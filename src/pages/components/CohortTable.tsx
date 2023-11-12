import { useEffect, useState } from "react";

export interface CohortChartProps {
  data: CohortProps[];
  // 다른 필요한 props를 여기에 추가할 수 있습니다.
}

export interface CohortProps {
  standardDate: string;
  firstOrderUsers: number;
  retention: Record<number, string>;
}

interface CohortChartData {
  "Month of First": string;
  "Customers per Month": number;
  [key: string]: number | string; // Retention 데이터를 포함하기 위한 타입 확장
}

export default function CohortChartTable({ data }: CohortChartProps) {
  const [chartData, setChartData] = useState<CohortChartData[]>();
  const [columnData, setColumnData] = useState<string[]>();

  const transformData = data.map((item) => {
    const flattened = {
      "Month of First": item.standardDate,
      "Customers per Month": item.firstOrderUsers,
      ...item.retention, // Retention 객체를 풀어서 상위 레벨의 프로퍼티로 추가
    };
    return flattened;
  });

  // 모든 객체에서 키를 추출하여 고유한 컬럼 세트를 생성
  const columns: string[] = transformData.reduce(
    (cols: string[], item: any) => {
      Object.keys(item).forEach((key: string) => {
        if (!cols.includes(key)) {
          cols.push(key);
        }
      });
      return cols;
    },
    []
  );

  // Month of First"와 "Coustomers per Month" 제거
  const filteredHeaders = columns.filter(
    (header) => header !== "Month of First" && header !== "Customers per Month"
  );

  // 숫자로 변환하여 정렬
  const sortedHeaders = filteredHeaders.sort(
    (a, b) => parseInt(a) - parseInt(b)
  );

  // "Month of First"와 "Coustomers per Month"를 맨 앞으로 추가
  sortedHeaders.unshift("Month of First", "Customers per Month");

  useEffect(() => {
    // console.log(sortedHeaders);
    setColumnData(sortedHeaders);
    setChartData(transformData);
  }, [data]);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {columnData &&
              columnData.map((col, index) => {
                return <th key={index}>{col}</th>;
              })}
          </tr>
        </thead>
        <tbody>
          {chartData &&
            chartData.map((item, rowIndex) => (
              <tr key={rowIndex}>
                {columnData &&
                  columnData.map((col, colIndex) => (
                    <td key={colIndex}>{item[col] || ""}</td> // 데이터 셀 생성
                  ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
