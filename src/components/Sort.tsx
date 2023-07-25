import { Listbox } from "@headlessui/react";
import { type Dog } from "~/server/api/models/dogs";

interface SortProps {
  getSorBy: string;
  searchDogs: Dog[];
  handleSortChange: (value: string) => void;
}

const sortOptions = [
  { value: "breed", label: "Breed" },
  { value: "age", label: "Age" },
  { value: "name", label: "Name" },
  { value: "zip code", label: "Zip Code" },
];
const Sort: React.FC<SortProps> = ({
  getSorBy,
  searchDogs,
  handleSortChange,
}) => {
  switch (getSorBy) {
    case "age":
      searchDogs.sort((a, b) => a.age - b.age);
      break;
    case "name":
      searchDogs.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "zip_code":
      searchDogs.sort((a, b) => a.zip_code.localeCompare(b.zip_code));
      break;
    default:
      searchDogs.sort((a, b) => a.breed.localeCompare(b.breed));
      break;
  }

  return (
    <>
      <div>
        <Listbox value={getSorBy} onChange={handleSortChange}>
          <Listbox.Button className="mt-6 flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500">
            Sort by: {`${getSorBy.charAt(0).toUpperCase() + getSorBy.slice(1)}`}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
                className="ml-2 mt-1 fill-white"
              >
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </span>
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
