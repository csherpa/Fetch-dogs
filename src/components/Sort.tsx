import { Listbox } from "@headlessui/react";

interface SortProps {
  sortValue: string;
  handleSortChange: (value: string) => void;
}

const sortOptions = [
  { value: "breed", label: "Breed" },
  { value: "age", label: "Age" },
  { value: "name", label: "Name" },
  { value: "zip_code", label: "Zip Code" },
];
const Sort: React.FC<SortProps> = ({ sortValue, handleSortChange }) => {
  return (
    <>
      <div>
        <Listbox
          value={sortValue}
          onChange={handleSortChange}
          defaultValue="Breed"
        >
          <Listbox.Button className="mt-6 flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500">
            Sort by:{" "}
            {sortOptions.find((option) => option.value === sortValue)?.label ||
              "Breed"}
          </Listbox.Button>
          <Listbox.Options className="absolute z-10 mt-2 w-40 rounded border border-gray-300 bg-white py-2 shadow-lg">
            {sortOptions.map((option) => (
              <Listbox.Option key={option.value} value={option.value}>
                {({ active }) => (
                  <li
                    className={`relative cursor-pointer select-none px-4 py-2 ${
                      active
                        ? "bg-indigo-600 text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    {option.label}
                  </li>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </div>
    </>
  );
};

export default Sort;
