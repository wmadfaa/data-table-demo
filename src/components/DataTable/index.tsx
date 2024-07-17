import { useTable, useFilters, useGlobalFilter, Column } from "react-table";
import Table from "../components/Table";

export interface DataTableProps<D extends object> {
  columns: ReadonlyArray<Column<D>>;
  data: readonly D[];
}

function DataTable<D extends object>({ columns, data }: DataTableProps<D>) {
  const rt = useTable<D>({ columns, data }, useFilters, useGlobalFilter);

  return (
    <div>
      <Table instance={rt} />
    </div>
  );
}

export default DataTable;
