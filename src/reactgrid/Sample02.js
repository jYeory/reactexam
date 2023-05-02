import React, { useState, useCallback } from 'react'

import ReactDataGrid from '@inovua/reactdatagrid-enterprise'
import '@inovua/reactdatagrid-enterprise/index.css'
import eventData from './data/event.json'

const dataSource = eventData;
const accountsGridStyle = { minHeight: 800 }

const getDataSource = (entity) => {
  // console.log(entity);
  return {};
  // return { data, count: parseInt(json.data.content.length) };
}

const floatNumber = value => Number(value).toLocaleString(undefined, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});
const commaNumber = value => Number(value).toLocaleString();

const renderGroupTitle = value => value || 'N/A';
const renderLabeledGroupTitle = value => value ? value.label : 'N/A';
const defaultVisible = false

const gridLinkStyle = { color: '#9BA7B4' }

const GridLink = ({ value }) => <a style={gridLinkStyle} href={value} target="_blank" rel="noreferrer">
  {value}
</a>

// 컬럼 병합
const rowspan = ({ value, dataSourceArray, rowIndex, column }) => {
  let rowspan = 1;

  const prevData = dataSourceArray[rowIndex - 1];
  if (prevData && prevData[column.name] === value) {
    return rowspan;
  }
  let currentRowIndex = rowIndex + 1;
  while (
    dataSourceArray[currentRowIndex] &&
    dataSourceArray[currentRowIndex][column.name] === value
  ) {
    rowspan++;
    currentRowIndex++;
  }
  return rowspan;
};

const rowspanInfo = {};

const columns = [
  { name: 'salesDt', renderGroupTitle, maxWidth: 100, header: '기준일', defaultLocked: 'start',
    rowspan: ({ value, dataSourceArray, rowIndex, column }) => {
      let rowspan = 1;

      // 병합 대상이 아닌 컬럼???
      const prevData = dataSourceArray[rowIndex - 1];
      if (prevData && prevData[column.name] === value) {
        // console.log(prevData[column.name] + ' = ' + value + ' > ' + rowspan);
        return rowspan;
      }

      let currentRowIndex = rowIndex + 1;
      while (
        dataSourceArray[currentRowIndex] &&
        dataSourceArray[currentRowIndex][column.name] === value
      ) {
        rowspan++;
        currentRowIndex++;
      }
      rowspanInfo[value] = rowspan;
      return rowspan;
    }
  },
  { name: 'suppCd', renderGroupTitle, header: '거래처코드', maxWidth: 120,  defaultLocked: 'start',
    rowspan: ({ value, dataSourceArray, rowIndex, column }) => {
      let rowspan = 1;
      // 컬럼 병합 대상이 아닌 컬럼을 위한 코드인가??
      // 주석 처리 할 경우 병합된 셀만 텍스트 나옴
      const prevData = dataSourceArray[rowIndex - 1];
      if (prevData && prevData[column.name] === value 
        && prevData.salesDt === dataSourceArray[rowIndex].salesDt) {
        // console.log(prevData[column.name] + ' = ' + value + ' > ' + rowspan);
        return rowspan;
      }

      let currentRowIndex = rowIndex + 1;
      while (
        dataSourceArray[currentRowIndex] &&
        dataSourceArray[currentRowIndex][column.name] === value
      ) {
        let currentSalesDt = dataSourceArray[currentRowIndex].salesDt;
        // console.log(dataSourceArray[currentRowIndex].salesDt + ' : ' + rowspanInfo[currentSalesDt]);
        rowspan++;
        currentRowIndex++;
        if (rowspanInfo && rowspan >= rowspanInfo[currentSalesDt]) {
          console.log('break!!!!!!!!')
          break;
        }
      }
      return rowspan;
  }},
  { name: 'suppNm', header: '거래처명', maxWidth:200, defaultLocked: 'start',
  rowspan: ({ value, dataSourceArray, rowIndex, column }) => {
    let rowspan = 1;
    const prevData = dataSourceArray[rowIndex - 1];
    // 이전 로우와 값이 동일하고
    if (prevData && prevData[column.name] === value 
      // 이전 로우의 기준일과 현재 로우의 기준일이 같을 경우
      && prevData.salesDt === dataSourceArray[rowIndex].salesDt) {
      return rowspan;
    }

    let currentRowIndex = rowIndex + 1;
    while (
      dataSourceArray[currentRowIndex] &&
      dataSourceArray[currentRowIndex][column.name] === value
    ) {
      let currentSalesDt = dataSourceArray[currentRowIndex].salesDt;
      rowspan++;
      currentRowIndex++;
      if (rowspanInfo && rowspan >= rowspanInfo[currentSalesDt]) {
        break;
      }
    }
    return rowspan;
}},
  { name: 'purchCondCd', renderGroupTitle, header: '구매조건코드', maxWidth: 120, defaultLocked: 'start',
  rowspan: ({ value, dataSourceArray, rowIndex, column }) => {
    let rowspan = 1;
    const prevData = dataSourceArray[rowIndex - 1];
    // 이전 로우와 값이 동일하고
    if (prevData && prevData[column.name] === value 
      // 이전 로우의 기준일과 현재 로우의 기준일이 같을 경우
      && prevData.salesDt === dataSourceArray[rowIndex].salesDt) {
      return rowspan;
    }

    let currentRowIndex = rowIndex + 1;
    while (
      dataSourceArray[currentRowIndex] &&
      dataSourceArray[currentRowIndex][column.name] === value
    ) {
      let currentSalesDt = dataSourceArray[currentRowIndex].salesDt;
      rowspan++;
      currentRowIndex++;
      if (rowspanInfo && rowspan >= rowspanInfo[currentSalesDt]) {
        break;
      }
    }
    return rowspan;
}},
  { name: 'purchCondNm', renderGroupTitle, header: '구매조건코드명', defaultLocked: 'start',
  rowspan: ({ value, dataSourceArray, rowIndex, column }) => {
    let rowspan = 1;
    const prevData = dataSourceArray[rowIndex - 1];
    // 이전 로우와 값이 동일하고
    if (prevData && prevData[column.name] === value 
      // 이전 로우의 기준일과 현재 로우의 기준일이 같을 경우
      && prevData.salesDt === dataSourceArray[rowIndex].salesDt) {
      return rowspan;
    }

    let currentRowIndex = rowIndex + 1;
    while (
      dataSourceArray[currentRowIndex] &&
      dataSourceArray[currentRowIndex][column.name] === value
    ) {
      let currentSalesDt = dataSourceArray[currentRowIndex].salesDt;
      rowspan++;
      currentRowIndex++;
      if (rowspanInfo && rowspan >= rowspanInfo[currentSalesDt]) {
        break;
      }
    }
    return rowspan;
}},
  { name: 'itemLclsNm', header: '상품대분류명', maxWidth: 120, },
  { name: 'itemMclsNm', header: '상품중분류명', maxWidth: 120, },
  { name: 'itemSclsNm', header: '상품소분류명', maxWidth: 120, },
  { name: 'itemCd', header: '상품코드', maxWidth: 150, },
  { name: 'itemNm', header: '상품명', maxWidth: 200, },
  { name: 'uniEvntCd', header: '행사구분코드', maxWidth: 120, },
  { name: 'uniEvntSpNm', header: '행사구분명', maxWidth: 120, },
  { name: 'evntTypeNm', header: '할인', maxWidth: 70, },
  { name: 'evntGrpNm', header: '행사그룹명', maxWidth: 200, },
  { name: 'evntDurBeginDt', header: '이벤트시작일', maxWidth: 120, },
  { name: 'evntDurEndDt', header: '이벤트종료일', maxWidth: 120, },
  { name: 'salesAmt', header: '매출금액', maxWidth: 100, 
  render: ({ data }) => commaNumber(data.salesAmt)+ "원" },
  { name: 'salesQty', header: '매출수량', maxWidth: 100, 
  render: ({ data }) => commaNumber(data.salesQty)+ "개" },
  { name: 'evntCst', header: '행사원가' , maxWidth: 120,
    render: ({ data }) => commaNumber(data.evntCst)+ "원" },
  { name: 'evntSprc', header: '행사매가', maxWidth: 120, 
    render: ({ data }) => commaNumber(data.evntSprc)+ "원" },
  { name: 'evntItemHdlStrCnt', header: '행사점포수', maxWidth: 120,
    render: ({ data }) => commaNumber(data.evntItemHdlStrCnt)+ "개" },
  { name: 'saleStrCnt', header: '전체점포수', maxWidth: 120,
    render: ({ data }) => commaNumber(data.saleStrCnt)+ "개" },
  { name: 'ratio', header: '행사취급률', maxWidth: 120,
    render: ({ data }) => floatNumber(data.ratio) + "%" }
];
const defaultGroupBy = []
const accountRowHeight = 40
const accountExpandHeight = 500

// https://reactdatagrid.io/docs/getting-started#using-a-data-source
const Sample02Grid = () => {
  const [accountRowHeights, setAccountRowHeights] = useState({});
  return (
    <ReactDataGrid
      dataSource={dataSource}
      style={accountsGridStyle}
      rowHeight={accountRowHeight}
      pagination
      rowExpandHeight={accountExpandHeight}
      rowHeights={accountRowHeights}
      defaultGroupBy={defaultGroupBy}
      columnDefaultWidth={200}
      columns={columns}
      defaultLimit={20}
    />
  );
}

export default Sample02Grid;