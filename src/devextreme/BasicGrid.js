import DataGrid from 'devextreme-react/data-grid';
import customers from './data/customers.json';
const columns = ['CompanyName', 'City', 'State', 'Phone', 'Fax'];

const BasicGrid = () => {
  return (
    <DataGrid
      dataSource={customers}
      defaultColumns={columns}
      showBorders={true}
    />
  );
}

export default BasicGrid;