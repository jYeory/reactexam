import React, { useState, useCallback } from 'react'

import ReactDataGrid from '@inovua/reactdatagrid-enterprise'
import '@inovua/reactdatagrid-enterprise/index.css'

import NumberFilter from '@inovua/reactdatagrid-community/NumberFilter';
import SelectFilter from '@inovua/reactdatagrid-community/SelectFilter';

import Button from '@inovua/reactdatagrid-community/packages/Button'

const dataSource = [
  {
    "id": 1,
    "name": "Goldner-Rodriguez",
    "phone": "297-469-5428",
    "email": "contact@goldner-rodriguez.com",
    "website": "http://www.goldner-rodriguez.com",
    "facebook": null,
    "twitter": null,
    "linkedIn": "https://www.linkedin.com/goldner-rodriguez",
    "type": {
      "id": 5,
      "label": "Investor"
    },
    "annualRevenue": 14130000.0,
    "noOfEmployees": 97,
    "industry": {
      "id": 4,
      "label": "Chemical"
    },
    "address": "5 Ridge Oak Trail",
    "permissionToCall": true,
    "permissionToEmail": null,
    "permissionToFax": false,
    "notes": "Devolved human-resource access",
    "createdOn": "2016-11-23T08:59:25Z",
    "createdBy": {
      "id": 11,
      "username": "julee.tomasini"
    }
  },
  {
    "id": 2,
    "name": "Ritchie, Dare and Veum",
    "phone": "653-266-3193",
    "email": "contact@ritchie.com",
    "website": "http://www.ritchie.com",
    "facebook": null,
    "twitter": null,
    "linkedIn": "https://www.linkedin.com/ritchie",
    "type": {
      "id": 7,
      "label": "Partner"
    },
    "annualRevenue": 92414000.0,
    "noOfEmployees": 136,
    "industry": {
      "id": 3,
      "label": "Beverage & Tobacco"
    },
    "address": "0 Fairfield Trail",
    "permissionToCall": true,
    "permissionToEmail": null,
    "permissionToFax": false,
    "notes": "Networked bifurcated migration",
    "createdOn": "2017-05-02T23:09:44Z",
    "createdBy": {
      "id": 12,
      "username": "broddie.shoveller"
    }
  },
  {
    "id": 3,
    "name": "Stiedemann and Sons",
    "phone": "142-403-6183",
    "email": "contact@stiedemann.com",
    "website": "http://www.stiedemann.com",
    "facebook": null,
    "twitter": null,
    "linkedIn": null,
    "type": {
      "id": 6,
      "label": "Other"
    },
    "annualRevenue": 83878000.0,
    "noOfEmployees": 174,
    "industry": {
      "id": 10,
      "label": "Internet"
    },
    "address": "1 Sachtjen Road",
    "permissionToCall": true,
    "permissionToEmail": null,
    "permissionToFax": false,
    "notes": null,
    "createdOn": "2017-04-05T21:13:53Z",
    "createdBy": {
      "id": 8,
      "username": "lester.janney"
    }
  },
  {
    "id": 4,
    "name": "Lemke-Mueller",
    "phone": "918-317-0452",
    "email": "contact@lemke-mueller.com",
    "website": "http://www.lemke-mueller.com",
    "facebook": "https://www.facebook.com/lemke-mueller",
    "twitter": "https://www.twitter.com/lemke-mueller",
    "linkedIn": null,
    "type": {
      "id": 6,
      "label": "Other"
    },
    "annualRevenue": 32798000.0,
    "noOfEmployees": 138,
    "industry": {
      "id": 8,
      "label": "Grocery"
    },
    "address": "3461 Dapin Road",
    "permissionToCall": true,
    "permissionToEmail": null,
    "permissionToFax": true,
    "notes": "Progressive attitude-oriented circuit",
    "createdOn": "2017-01-10T18:55:34Z",
    "createdBy": {
      "id": 1,
      "username": "brooke.muslim"
    }
  }
]

const contractJson = [
  {
    "1": [
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
    ],
    "2": [
      {
        "id": 76,
        "firstName": "Harley",
        "lastName": "Sketcher",
        "gender": null,
        "email": "harley.sketcher@bubblebox.com",
        "phone": null,
        "dateOfBirth": "1982-02-12T00:00:00Z",
        "facebook": "https://www.facebook.com/harley.sketcher",
        "twitter": "https://www.twitter.com/hsketcher23",
        "linkedIn": "https://www.linkedin.com/harley.sketcher",
        "address": "624 Southridge Way",
        "permissionToCall": true,
        "permissionToEmail": false,
        "notes": null,
        "createdOn": "2017-02-04T01:14:33Z",
        "pictureId": null,
        "account": {
          "id": 2,
          "name": "Ritchie, Dare and Veum"
        },
        "createdBy": {
          "id": 6,
          "username": "barnie.caherny"
        }
      },
      {
        "id": 110,
        "firstName": "Bryant",
        "lastName": "Kester",
        "gender": null,
        "email": "bryant.kester@bubblebox.com",
        "phone": "513-247-6774",
        "dateOfBirth": "1982-03-18T00:00:00Z",
        "facebook": null,
        "twitter": null,
        "linkedIn": "https://www.linkedin.com/bryant.kester",
        "address": "5 Surrey Street",
        "permissionToCall": true,
        "permissionToEmail": false,
        "notes": null,
        "createdOn": "2017-08-06T21:23:44Z",
        "pictureId": null,
        "account": {
          "id": 2,
          "name": "Ritchie, Dare and Veum"
        },
        "createdBy": {
          "id": 11,
          "username": "julee.tomasini"
        }
      },
      {
        "id": 419,
        "firstName": "Kinna",
        "lastName": "Di Domenico",
        "gender": null,
        "email": "kinna.di domenico@bubblebox.com",
        "phone": null,
        "dateOfBirth": "1983-01-21T00:00:00Z",
        "facebook": null,
        "twitter": null,
        "linkedIn": "https://www.linkedin.com/kinna.di domenico",
        "address": "369 Darwin Place",
        "permissionToCall": true,
        "permissionToEmail": false,
        "notes": null,
        "createdOn": "2017-06-26T07:12:47Z",
        "pictureId": 30,
        "account": {
          "id": 2,
          "name": "Ritchie, Dare and Veum"
        },
        "createdBy": {
          "id": 9,
          "username": "teressa.lansly"
        }
      },
      {
        "id": 564,
        "firstName": "Licha",
        "lastName": "Spivie",
        "gender": null,
        "email": "licha.spivie@bubblebox.com",
        "phone": "751-388-3331",
        "dateOfBirth": "1983-06-15T00:00:00Z",
        "facebook": "https://www.facebook.com/licha.spivie",
        "twitter": null,
        "linkedIn": "https://www.linkedin.com/licha.spivie",
        "address": "51 Dayton Road",
        "permissionToCall": true,
        "permissionToEmail": true,
        "notes": null,
        "createdOn": "2016-12-21T17:05:25Z",
        "pictureId": 57,
        "account": {
          "id": 2,
          "name": "Ritchie, Dare and Veum"
        },
        "createdBy": {
          "id": 8,
          "username": "lester.janney"
        }
      },
      {
        "id": 656,
        "firstName": "Swen",
        "lastName": "Yorath",
        "gender": null,
        "email": "swen.yorath@bubblebox.com",
        "phone": null,
        "dateOfBirth": "1983-09-15T00:00:00Z",
        "facebook": null,
        "twitter": null,
        "linkedIn": "https://www.linkedin.com/swen.yorath",
        "address": "47094 Dahle Lane",
        "permissionToCall": false,
        "permissionToEmail": false,
        "notes": null,
        "createdOn": "2016-12-08T04:36:18Z",
        "pictureId": null,
        "account": {
          "id": 2,
          "name": "Ritchie, Dare and Veum"
        },
        "createdBy": {
          "id": 7,
          "username": "karoly.garey"
        }
      }
    ],
    "3": [
      {
        "id": 17,
        "firstName": "Felisha",
        "lastName": "Fairweather",
        "gender": null,
        "email": "felisha.fairweather@flashspan.com",
        "phone": "892-935-4408",
        "dateOfBirth": "1981-12-15T00:00:00Z",
        "facebook": null,
        "twitter": "https://www.twitter.com/ffairweatherg",
        "linkedIn": "https://www.linkedin.com/felisha.fairweather",
        "address": "849 Glendale Way",
        "permissionToCall": true,
        "permissionToEmail": true,
        "notes": null,
        "createdOn": "2017-01-11T02:45:08Z",
        "pictureId": null,
        "account": {
          "id": 3,
          "name": "Stiedemann and Sons"
        },
        "createdBy": {
          "id": 2,
          "username": "alvinia.hannigane"
        }
      },
      {
        "id": 164,
        "firstName": "Kristien",
        "lastName": "Hairsnape",
        "gender": null,
        "email": "kristien.hairsnape@flashspan.com",
        "phone": "435-850-5909",
        "dateOfBirth": "1982-05-11T00:00:00Z",
        "facebook": null,
        "twitter": null,
        "linkedIn": "https://www.linkedin.com/kristien.hairsnape",
        "address": "1 Vidon Lane",
        "permissionToCall": false,
        "permissionToEmail": false,
        "notes": null,
        "createdOn": "2016-11-16T13:59:21Z",
        "pictureId": null,
        "account": {
          "id": 3,
          "name": "Stiedemann and Sons"
        },
        "createdBy": {
          "id": 1,
          "username": "brooke.muslim"
        }
      },
      {
        "id": 342,
        "firstName": "Laurent",
        "lastName": "Mordon",
        "gender": null,
        "email": "laurent.mordon@flashspan.com",
        "phone": "211-277-9557",
        "dateOfBirth": "1982-11-05T00:00:00Z",
        "facebook": null,
        "twitter": "https://www.twitter.com/lmordon9h",
        "linkedIn": null,
        "address": null,
        "permissionToCall": false,
        "permissionToEmail": false,
        "notes": null,
        "createdOn": "2016-12-31T05:47:03Z",
        "pictureId": null,
        "account": {
          "id": 3,
          "name": "Stiedemann and Sons"
        },
        "createdBy": {
          "id": 9,
          "username": "teressa.lansly"
        }
      }
    ],
    "4": [
      {
        "id": 293,
        "firstName": "Dunc",
        "lastName": "Argabrite",
        "gender": null,
        "email": "dunc.argabrite@dynabox.com",
        "phone": "393-721-5434",
        "dateOfBirth": "1982-09-17T00:00:00Z",
        "facebook": null,
        "twitter": null,
        "linkedIn": "https://www.linkedin.com/dunc.argabrite",
        "address": "0514 Scoville Road",
        "permissionToCall": true,
        "permissionToEmail": false,
        "notes": null,
        "createdOn": "2017-06-13T17:41:45Z",
        "pictureId": null,
        "account": {
          "id": 4,
          "name": "Lemke-Mueller"
        },
        "createdBy": {
          "id": 3,
          "username": "emory.ingram"
        }
      },
      {
        "id": 498,
        "firstName": "Marv",
        "lastName": "Freeland",
        "gender": null,
        "email": "marv.freeland@dynabox.com",
        "phone": "335-177-8865",
        "dateOfBirth": "1983-04-10T00:00:00Z",
        "facebook": "https://www.facebook.com/marv.freeland",
        "twitter": null,
        "linkedIn": "https://www.linkedin.com/marv.freeland",
        "address": "44 Golden Leaf Court",
        "permissionToCall": false,
        "permissionToEmail": true,
        "notes": null,
        "createdOn": "2017-01-31T11:55:08Z",
        "pictureId": null,
        "account": {
          "id": 4,
          "name": "Lemke-Mueller"
        },
        "createdBy": {
          "id": 10,
          "username": "avis.grahl"
        }
      }
    ]
  }
];

const API_URL = 'https://demos.reactdatagrid.io/api/v1/'

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

const dataSourceCache = {}

const defaultGroupBy = []

const accountRowHeight = 40
const contactRowHeight = accountRowHeight
const accountExpandHeight = 500

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
    defaultVisible,
    groupByName: "account.name",
    sortName: "account.name",
    filterName: "account.name",
    minWidth: 250
  },
  {
    name: 'dateOfBirth',
    header: 'Date of Birth',
    defaultVisible,
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


const getContactsFilterValue = (account) => {
  return [
    {
      name: 'account.id',
      value: account ? account.id: '',
      operator: 'eq',
      type: 'string'
    },
    {
      name: 'firstName',
      type: 'string',
      operator: 'contains',
      value: ''
    },
    {
      name: 'phone',
      type: 'string',
      operator: 'contains',
      value: ''
    },
    {
      name: 'email',
      type: 'string',
      operator: 'contains',
      value: ''
    },
    {
      name: 'account',
      type: 'string',
      operator: 'contains',
      value: ''
    },
    {
      name: 'facebook',
      type: 'string',
      operator: 'contains',
      value: ''
    },
    {
      name: 'twitter',
      type: 'string',
      operator: 'contains',
      value: ''
    },
    {
      name: 'address',
      type: 'string',
      operator: 'contains',
      value: ''
    },
    {
      name: 'createdBy',
      type: 'string',
      operator: 'contains',
      value: ''
    },
    {
      name: 'linkedIn',
      type: 'string',
      operator: 'contains',
      value: ''
    },
    {
      name: 'permissionToCall',
      type: 'bool',
      operator: 'eq',
      value: null
    },
    {
      name: 'permissionToEmail',
      type: 'bool',
      operator: 'eq',
      value: null
    }
  ]
}

// https://reactdatagrid.io/docs/getting-started#using-a-data-source
const Sample02Grid = () => {
  const [accountRowHeights, setAccountRowHeights] = useState({});

  const contactsDataSource = useCallback(getDataSource('contacts'), [])

  const renderContactsGrid = ({ data }) => {
    const defaultFilterValue = getContactsFilterValue(data);

    return (
      <ReactDataGrid
        defaultFilterValue={defaultFilterValue}
        dataSource={contactsDataSource}
        pagination
        columns={contactsColumns}
        columnDefaultWidth={200}
      />
    )
  }

  return (
    <ReactDataGrid
      dataSource={dataSource}
      style={accountsGridStyle}
      rowHeight={accountRowHeight}
      pagination='local'
      rowExpandHeight={accountExpandHeight}
      rowHeights={accountRowHeights}
      renderDetailsGrid={renderContactsGrid}
      defaultGroupBy={defaultGroupBy}
      columnDefaultWidth={200}
      columns={columns}
      defaultLimit={2}
    />
  );
}

export default Sample02Grid;