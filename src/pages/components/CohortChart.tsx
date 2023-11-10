import React, { useEffect, useState } from "react";
import { DataType, fetchData } from "../slices/cohortSlice";
import { useAppSelector, useAppDispatch } from "../store/hooks";
// import  from 'lodash';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import _ from 'lodash';

interface CohortData {
  month: string;
  firstOrderUsers: number;
  retentionRates: number[];
}
interface CohortChartProps {
  data: CohortData[];
}

export default function CohortChart() {
  const cohortData = useAppSelector((state) => state.cohort.data);
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

    if (cohortData.length > 0) {
      // 데이터 처리 및 변환

      const processedData = calculateCohortData(cohortData);

      console.log(processedData)
      // console.log(_.chain(cohortData)
      //   .filter((row) => row.standardDate.startsWith("2023-06"))
      //   .groupBy('uid').value())

      // console.log(_.uniq(cohortData.map((row) => row.standardDate.slice(0, 7))).sort())
    }
  }, [cohortData]);

  const calculateCohortData = (rowData: typeof cohortData) => {

    // const groupedByUid = _.groupBy(rowData, (row) => row.uid);

    // const minDatesByUid = _.mapValues(groupedByUid, (group) => {
    //   const minRow = _.minBy(group, 'standardDate');
    //   return minRow;
    // });

    const minDatesByUid: DataType[] = Object.values(
      rowData.reduce((acc: Record<string, DataType>, row) => {
        const key = row.uid.toString();
        if (!acc[key] || row.standardDate < acc[key].standardDate) {
          acc[key] = row;
        }
        return acc;
      }, {})
    );


    // return minDatesByUid

    const sortedMinDatesByUid = minDatesByUid.sort((a, b) => a.standardDate.localeCompare(b.standardDate));

    // standardDate로 그룹화하고 각 그룹의 uid 개수를 length로 만들기
    const groupedByDate: { standardDate: string; firstOrderUsers: number }[] = sortedMinDatesByUid.map((row) => ({
      standardDate: row.standardDate,
      firstOrderUsers: rowData.filter((item) => item.standardDate === row.standardDate).length,
    }));

    return groupedByDate
    // const uniqueMonths = _.uniq(data.map((row) => row.standardDate.slice(0, 7))).sort();

    // return uniqueMonths.map((month, index) => {
    //   const seenUids: Set<number> = new Set();
    //   const firstOrderUsers = _.chain(data)
    //     .filter((row) => row.standardDate.startsWith(month) && !seenUids.has(row.uid))
    //     .groupBy('uid')
    //     .map((groupedRows) => {
    //       const firstOrderRow = _.minBy(groupedRows, 'standardDate');
    //       if (firstOrderRow) {
    //         seenUids.add(firstOrderRow.uid);
    //       }
    //       return firstOrderRow;
    //     })
    //     .compact()
    //     .value().length;

    //   const retentionRates = Array.from({ length: uniqueMonths.length - index }, (v, i) => {
    //     const targetMonth = uniqueMonths[index + i];
    //     console.log(targetMonth)
    //     const targetUsers = _.chain(data)
    //       .filter((row: { standardDate: string; }) => row.standardDate.startsWith(targetMonth))
    //       .groupBy('uid')
    //       .map((groupedRows) => {  
    //         const firstOrderRow = _.minBy(groupedRows, 'standardDate');
    //         return firstOrderRow && seenUids.has(firstOrderRow.uid) ? firstOrderRow : null;
    //       })
    //       .compact()
    //       .value().length;

    //     return firstOrderUsers > 0 ? (targetUsers / firstOrderUsers) * 100 : 0;
    //   });

    //   return { month, firstOrderUsers, retentionRates };
    // });
  };

  return <></>;
}

// let array2 = _.uniq(firstOrderUsers)
//       array.push(...array2)
//       console.log(_.uniq(array))





