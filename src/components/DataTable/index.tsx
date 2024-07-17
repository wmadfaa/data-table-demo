import { useTable, useFilters, useGlobalFilter, Column } from "react-table";
import Table from "./components/Table";
import FilterBox from "./components/FilterBox";
import { useMemo } from "react";

export interface DataTableProps<D extends object> {
  columns: ReadonlyArray<Column<D>>;
  data: readonly D[];
}

function DataTable<D extends object>({ columns, data }: DataTableProps<D>) {
  const defaultColumn = useMemo(
    () => ({
      Filter: <></>,
    }),
    [],
    // TODO fix types
  ) as Partial<Column<D>>;

  const rt = useTable<D>(
    { columns, data, defaultColumn },
    useFilters,
    useGlobalFilter,
  );

  return (
    <div className="flex flex-row">
      <div className="w-full max-w-sm px-4 sm:px-6 lg:px-8">
        {rt.flatHeaders
          // TODO fix type issue
          .filter((column) => (column as any).canFilter)
          .map((column) => (
            <FilterBox key={column.id} label={column.render("Header")}>
              {column.render("Filter")}
            </FilterBox>
          ))}
      </div>
      <div className="flex-grow">
        <Table instance={rt} />
      </div>
    </div>
  );
}

export default DataTable;
