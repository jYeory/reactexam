import React, { useState, useCallback } from 'react'

import ReactDataGrid from '@inovua/reactdatagrid-enterprise'
import '@inovua/reactdatagrid-enterprise/index.css'

import NumberFilter from '@inovua/reactdatagrid-community/NumberFilter';
import SelectFilter from '@inovua/reactdatagrid-community/SelectFilter';
import './css/sample03.css'
import middleCdsJson from './data/mid_code.json'
import purCndInfo from './data/pur_cnd_cd.json'

const dataSource = middleCdsJson;
const grid2DataSource = purCndInfo;
const accountsGridStyle = { minHeight: 800 }

const getDataSource = (entity) => {
  console.log(entity);
  return {};
  // return { data, count: parseInt(json.data.content.length) };
}

const floatNumber = value => Number(value).toLocaleString(undefined, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

const renderGroupTitle = value => value || 'N/A';
const renderLabeledGroupTitle = value => value ? value.label : 'N/A';
const defaultVisible = false

const gridLinkStyle = { color: '#9BA7B4' }

const GridLink = ({ value }) => <a style={gridLinkStyle} href={value} target="_blank" rel="noreferrer">
  {value}
</a>


const columns = [
  { name: 'salsItemMclsCd', maxWidth: 150, header: '중분류코드' },
  { name: 'salsItemMclsNm', header: '중분류명' }
];

const accountRowHeight = 40
const accountExpandHeight = 200

const grid2Columns = [
  { name: 'purcndCd', maxWidth: 150, header: '구매조건코드', },
  { name: 'purcndNm', maxWidth: 150, header: '구매조건명', },
  { name: 'amt', maxWidth: 150, header: '정산금액', },
]

const grid3Columns = [
  { name: 'midCd', maxWidth: 150, header: '중분류코드' },
  { name: 'midNm', header: '중분류명' },
  { name: 'salsAmount', header: '정산금액' },
]

// https://reactdatagrid.io/docs/getting-started#using-a-data-source
const Sample03Grid = () => {
  const [accountRowHeights, setAccountRowHeights] = useState({});

  const contactsDataSource = useCallback(getDataSource('contacts'), [])

  const renderContactsGrid = ({ data }) => {
    console.log(data);
    return (
      <ReactDataGrid
        dataSource={contactsDataSource}
        columns={grid3Columns}
        columnDefaultWidth={200}
      />
    )
  }

  return (
    <div class="columns">
      <div class="column">
      <ReactDataGrid
        dataSource={dataSource}
        style={accountsGridStyle}
        rowHeight={accountRowHeight}
        pagination
        rowExpandHeight={accountExpandHeight}
        rowHeights={accountRowHeights}
        columnDefaultWidth={200}
        columns={columns}
        defaultLimit={10}
      />
      </div>
      <div class="column">
      {/* 우측 구매조건 그리드 */}
      <ReactDataGrid
        dataSource={grid2DataSource}
        style={accountsGridStyle}
        rowHeight={accountRowHeight}
        pagination
        rowExpandHeight={accountExpandHeight}
        rowHeights={accountRowHeights}
        renderDetailsGrid={renderContactsGrid}
        columnDefaultWidth={200}
        columns={grid2Columns}
        defaultLimit={10}
      />
      </div>
    </div>
  );
}

export default Sample03Grid;