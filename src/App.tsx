import DataTable from "./components/DataTable";

import { data } from "./data/table-mocks";

function App() {
  return (
    <DataTable
      data={data}
      columns={[
        {
          Header: "Name",
          accessor: "name",
        },
        {
          Header: "Regions",
          accessor: "regions",
        },
        {
          Header: "Tags",
          accessor: "tags",
        },
        {
          Header: "Active",
          accessor: "active",
        },
        {
          Header: "Public",
          accessor: "public",
        },
      ]}
    />
  );
}

export default App;
