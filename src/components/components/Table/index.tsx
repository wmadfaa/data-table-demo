import { TableInstance } from "react-table";

export interface TableProps<D extends object> {
  instance: TableInstance<D>;
}

function Table<D extends object>({ instance: rt }: TableProps<D>) {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table
                {...rt.getTableProps()}
                className="min-w-full divide-y divide-gray-300"
              >
                <thead className="bg-gray-50">
                  {rt.headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th
                          className="first:pl-4 sm:first:pl-6 px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          {...column.getHeaderProps()}
                        >
                          {column.render("Header")}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody
                  className="divide-y divide-gray-200 bg-white"
                  {...rt.getTableBodyProps()}
                >
                  {rt.rows.map((row) => {
                    rt.prepareRow(row);
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => (
                          <td
                            className="whitespace-nowrap first:pl-4 sm:first:pl-6 px-3 py-4 text-sm text-gray-900"
                            {...cell.getCellProps()}
                          >
                            {cell.render("Cell")}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
