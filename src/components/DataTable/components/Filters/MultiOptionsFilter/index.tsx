import { Column } from "react-table";

interface MultiOptionsFilterProps {
  column: Column;
  options: Array<{ label: string; value: string | number }>;
}

export function MultiOptionsFilter({
  column,
  options,
}: MultiOptionsFilterProps) {
  return (
    <div className="space-y-5">
      {options.map((option) => (
        <div className="relative flex items-start">
          <div className="flex h-6 items-center">
            <input
              id="comments"
              name="comments"
              type="checkbox"
              aria-describedby="comments-description"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              checked={column.filterValue.includes(option.value)}
              onChange={(e) => {
                if (e.target.checked) {
                  column.setFilter(
                    Array.from(new Set([...filterValue, option.value])),
                  );
                } else {
                  column.setFilter(
                    filterValue.filter((v) => v !== option.value),
                  );
                }
              }}
            />
          </div>
          <div className="ml-3 text-sm leading-6">
            <label htmlFor="comments" className="font-medium text-gray-900">
              {option.label}
            </label>
            <p id="comments-description" className="text-gray-500">
              Get notified when someones posts a comment on a posting.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
