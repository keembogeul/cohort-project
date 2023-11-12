import React, { useEffect, useState } from "react";
import { DataType, fetchData } from "../slices/cohortSlice";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import _ from "lodash";
import CohortChartTable, { CohortChartProps, CohortProps } from "./CohortTable";

type FirstOrderData = {
  standardDate: string;
  firstOrderUsers: number;
  retention: Record<number, string>;
};

export default function CohortCalculate() {
  const [cohortData, setCohortData] = useState<CohortProps[]>();
  const [regionData, setRegionData] = useState<string[]>();
  const rowData = useAppSelector((state) => state.cohort.data);
  const dispatch = useAppDispatch();

  const fetchDataFromAPI = async () => {
    try {
      await dispatch(fetchData());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataFromAPI();
  }, [dispatch]);

  useEffect(() => {
    if (rowData.length > 0) {
      const cohortData = calculateCohortData(rowData);
      setCohortData(cohortData);

      const uniqRegionRow = _.uniqBy(rowData, "region");

      let regionData = uniqRegionRow.map((row) => {
        return row.region;
      });

      regionData.unshift("전체");

      setRegionData(regionData);
    }
  }, [rowData]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        padding: "15px",
      }}
    >
      <div style={{ alignSelf: "flex-end", margin: "10px" }}>
        <select
          style={{
            width: "200px",
            padding: "10px",
            fontSize: "1rem",
            borderRadius: "0.375rem",
          }}
        >
          {regionData?.map((region, index) => {
            return <option key={index}>{region}</option>;
          })}
        </select>
      </div>
      {cohortData && <CohortChartTable data={cohortData} />}
    </div>
  );
}

const calculateCohortData = (rowData: DataType[]) => {
  // uid 기준으로 가장 작은 standardDate(첫 주문)인 rowData
  const minDatesByUid: DataType[] = Object.values(
    rowData.reduce((acc: Record<string, DataType>, row) => {
      const key = row.uid.toString();
      if (
        !acc[key] ||
        row.standardDate.slice(0, 7) < acc[key].standardDate.slice(0, 7)
      ) {
        acc[key] = row;
      }
      return acc;
    }, {})
  );

  // standardDate 기준으로 sort
  const sortedMinDatesByUid = minDatesByUid.sort((a, b) =>
    a.standardDate.slice(0, 7).localeCompare(b.standardDate.slice(0, 7))
  );

  // standardDate로 그룹화하고 각 그룹의 uid 개수를 length로 만들기
  const groupData = _.groupBy(sortedMinDatesByUid, (row) =>
    row.standardDate.slice(0, 7)
  );
  const groupedByDate: { standardDate: string; firstOrderUsers: number }[] =
    Object.entries(groupData).map(([standardDate, array]) => ({
      standardDate,
      firstOrderUsers: array.length,
    }));

  let minDate = groupedByDate[0].standardDate;
  let maxDate = groupedByDate[0].standardDate;

  groupedByDate.forEach((item) => {
    if (item.standardDate < minDate) {
      minDate = item.standardDate;
    }
    if (item.standardDate > maxDate) {
      maxDate = item.standardDate;
    }
  });

  // 잔존율 데이터 계산
  const finalData = calculateMonthlyRetention(
    minDatesByUid,
    rowData,
    minDate,
    maxDate
  );

  return finalData;
};

// 날짜에 달을 더하는 함수
const addMonths = (dateStr: string, months: number): string => {
  let date = new Date(dateStr);
  date.setMonth(date.getMonth() + months);
  return date.toISOString().split("T")[0];
};

// 월별 잔존율 계산 함수
const calculateMonthlyRetention = (
  minDatesByUid: DataType[],
  allOrders: DataType[],
  startDate: string,
  endDate: string
): FirstOrderData[] => {
  const groupedData: Record<string, DataType[]> = {};

  // 첫 주문을 월별로 그룹화
  minDatesByUid.forEach((order) => {
    const monthKey = order.standardDate.slice(0, 7); // 년-월 기준으로 그룹화

    if (!groupedData[monthKey]) {
      groupedData[monthKey] = [];
    }
    groupedData[monthKey].push(order);
  });

  const retentionData: FirstOrderData[] = [];

  Object.keys(groupedData).forEach((month) => {
    const monthlyData = groupedData[month];
    const retention: Record<number, string> = {};

    let currentDate = startDate;
    let i = 0;
    while (currentDate < endDate) {
      // 잔존율 계산
      currentDate = addMonths(month, i).slice(0, 7);
      if (i !== 0) {
        retention[i] =
          (
            (monthlyData.filter((user) =>
              allOrders.some(
                (order) =>
                  order.uid === user.uid && order.standardDate > currentDate
              )
            ).length /
              monthlyData.length) *
            100
          ).toFixed(2) + "%";
      }
      i++;
    }
    retentionData.push({
      standardDate: month,
      firstOrderUsers: monthlyData.length,
      retention,
    });
  });

  return retentionData;
};
