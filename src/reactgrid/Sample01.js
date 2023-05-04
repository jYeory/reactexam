import React, { useState, useCallback } from 'react'

import ReactDataGrid from '@inovua/reactdatagrid-enterprise'
import '@inovua/reactdatagrid-enterprise/index.css'

import NumberFilter from '@inovua/reactdatagrid-community/NumberFilter';
import SelectFilter from '@inovua/reactdatagrid-community/SelectFilter';

import masterData from './data/sample01.json';
// import detailData from './data/contracts.json';

const accountsGridStyle = { minHeight: 800 }
const data = [
  {
    "id": 157,
    "firstName": "Merl",
    "lastName": "Jordeson",
    "gender": null,
    "email": "merl.jordeson@kaymbo.com",
    "phone": null,
    "dateOfBirth": "1982-05-04T00:00:00Z",
    "facebook": "https://www.facebook.com/merl.jordeson",
    "twitter": null,
    "linkedIn": null,
    "address": null,
    "permissionToCall": true,
    "permissionToEmail": false,
    "notes": null,
    "createdOn": "2017-09-01T04:40:40Z",
    "pictureId": null,
    "account": {
      "id": 1,
      "name": "Goldner-Rodriguez"
    },
    "createdBy": {
      "id": 11,
      "username": "julee.tomasini"
    }
  },
  {
    "id": 251,
    "firstName": "Jenny",
    "lastName": "Jansema",
    "gender": null,
    "email": "jenny.jansema@kaymbo.com",
    "phone": "581-931-5040",
    "dateOfBirth": "1982-08-06T00:00:00Z",
    "facebook": "https://www.facebook.com/jenny.jansema",
    "twitter": null,
    "linkedIn": "https://www.linkedin.com/jenny.jansema",
    "address": "550 Boyd Crossing",
    "permissionToCall": false,
    "permissionToEmail": true,
    "notes": "Focused 24 hour concept",
    "createdOn": "2017-07-31T21:50:38Z",
    "pictureId": null,
    "account": {
      "id": 1,
      "name": "Goldner-Rodriguez"
    },
    "createdBy": {
      "id": 8,
      "username": "lester.janney"
    }
  },
  {
    "id": 395,
    "firstName": "Pedro",
    "lastName": "Hotson",
    "gender": null,
    "email": "pedro.hotson@kaymbo.com",
    "phone": "343-264-5948",
    "dateOfBirth": "1982-12-28T00:00:00Z",
    "facebook": "https://www.facebook.com/pedro.hotson",
    "twitter": null,
    "linkedIn": "https://www.linkedin.com/pedro.hotson",
    "address": "78 Redwing Alley",
    "permissionToCall": false,
    "permissionToEmail": true,
    "notes": null,
    "createdOn": "2017-07-27T05:41:35Z",
    "pictureId": null,
    "account": {
      "id": 1,
      "name": "Goldner-Rodriguez"
    },
    "createdBy": {
      "id": 6,
      "username": "barnie.caherny"
    }
  },
  {
    "id": 606,
    "firstName": "Lynnet",
    "lastName": "Feldhammer",
    "gender": null,
    "email": "lynnet.feldhammer@kaymbo.com",
    "phone": null,
    "dateOfBirth": "1983-07-27T00:00:00Z",
    "facebook": "https://www.facebook.com/lynnet.feldhammer",
    "twitter": null,
    "linkedIn": "https://www.linkedin.com/lynnet.feldhammer",
    "address": "85213 Fairview Parkway",
    "permissionToCall": true,
    "permissionToEmail": false,
    "notes": null,
    "createdOn": "2017-01-08T23:46:59Z",
    "pictureId": null,
    "account": {
      "id": 1,
      "name": "Goldner-Rodriguez"
    },
    "createdBy": {
      "id": 7,
      "username": "karoly.garey"
    }
  }
];

const getDataSource = (entity) => {
  return ({ skip, limit, sortInfo, groupBy, filterValue }) => {
    // console.log(filterValue);
    let id = filterValue[0].id;
    // let data = detailData[0][id];
    // console.log({ data, count: parseInt(data.length) });
    console.log(data);
    return { data, count: parseInt(data.length) };
  }
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
  { name: 'id', maxWidth: 50, defaultVisible, header: 'ID' },
  { name: 'name', renderGroupTitle, header: 'Name' },
  { name: 'email', renderGroupTitle, header: 'Email' },
  { name: 'phone', renderGroupTitle, header: 'Phone' },
  {
    name: 'website',
    header: 'Website',
    renderGroupTitle,
    render: ({ data }) => <GridLink value={data.website} />
  },
  {
    name: 'type',
    header: 'Type',
    renderGroupTitle,
    groupToString: value => value ? value.label: 'N/A',
    filterEditor: SelectFilter,
    sortName: 'type.label',
    groupByName: 'type.label',
    render: ({ data }) => {
      return data.type && data.type.label;
    }
  },
  {
    name: 'industry',
    header: 'Industry',
    filterEditor: SelectFilter,
    renderGroupTitle,
    groupToString: value => value ? value.label: 'N/A',
    sortName: 'industry.label',
    groupByName: 'industry.label',
    render: ({ data }) => {
      return data.industry && data.industry.label;
    }
  },
  {
    name: 'annualRevenue',
    header: 'Annual Revenue',
    filterEditor: NumberFilter,
    defaultVisible,
    renderGroupTitle,
    type: 'number',
    filterDelay: 500,
    render: ({ data }) => "$ " + floatNumber(data.annualRevenue)
  },
  {
    name: 'noOfEmployees',
    header: '# of Employees',
    filterEditor: NumberFilter,
    defaultVisible,
    renderGroupTitle
  },
  {
    name: 'facebook',
    header: 'Facebook',
    renderGroupTitle,
    defaultVisible,
    render: ({ data }) => <GridLink value={data.facebook} />
  },
  {
    name: 'twitter',
    header: 'Twitter',
    renderGroupTitle,
    defaultVisible,
    render: ({ data }) => <GridLink value={data.twitter} />
  },
  {
    name: 'linkedIn',
    header: 'LinkedIn',
    renderGroupTitle,
    defaultVisible,
    render: ({ data }) => <GridLink value={data.linkedIn} />
  }
];

const contactsColumns = [
  { name: 'id', maxWidth: 50, defaultVisible, header: 'ID', },
  {
    name: 'firstName',
    header: 'Name',
    renderGroupTitle,
    render: ({ data }) => data.firstName + " " + data.lastName
  },
  { name: "email", renderGroupTitle, header: 'Email' },
  { name: "phone", renderGroupTitle, header: 'Phone' },
  {
    name: "account",
    header: 'Account',
    groupByName: "account.name",
    sortName: "account.name",
    filterName: "account.name",
    minWidth: 250
  },
  {
    name: 'dateOfBirth',
    header: 'Date of Birth',
    renderGroupTitle,
    render: ({ data }) => {
      return data.dateOfBirth.toString();
    }
  },
  {
    name: 'facebook',
    header: 'Facebook',
    defaultVisible,
    resizable: true,
    renderGroupTitle,
    group: 'socialMedia',
    render: ({ data }) => {
      return <GridLink value={data.facebook} />;
    }
  },
  {
    name: 'twitter',
    header: 'Twitter',
    group: 'socialMedia',
    resizable: true,
    defaultVisible,
    renderGroupTitle,
    render: ({ data }) => {
      return <GridLink value={data.twitter} />;
    }
  },
  {
    name: 'linkedIn',
    header: 'Linked In',
    defaultVisible,
    group: 'socialMedia',
    resizable: true,
    renderGroupTitle,
    render: ({ data }) => {
      return <GridLink value={data.linkedIn} />;
    }
  },
  {
    name: 'address',
    header: 'Address',
    defaultVisible,
    renderGroupTitle,
    group: 'contactInfo'
  },
];

const accountRowHeight = 40
const accountExpandHeight = 500

const Sample01Grid = () => {
  const [accountRowHeights, setAccountRowHeights] = useState({});

  const contactsDataSource = useCallback(getDataSource('contacts'), [])

  const renderContactsGrid = useCallback(({ data }) => {
    let filterValue = [
      {
        id: data.id
      }
    ]
    // defaultFilterValue 옵션 필수
    return (
      <ReactDataGrid
        defaultFilterValue={filterValue}
        dataSource={contactsDataSource}
        columns={contactsColumns}
        columnDefaultWidth={200}
      />
    );
  }, [])

  return (
    <ReactDataGrid
      dataSource={masterData}
      style={accountsGridStyle}
      rowHeight={accountRowHeight}
      pagination='local'
      rowExpandHeight={accountExpandHeight}
      rowHeights={accountRowHeights}
      renderDetailsGrid={renderContactsGrid}
      columnDefaultWidth={200}
      columns={columns}
      defaultLimit={5}
    />
  );
}

export default Sample01Grid;