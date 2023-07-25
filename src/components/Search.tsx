import { Listbox } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { api } from "~/utils/api";

interface SearchProps {
  selectedFilters: string[];
  onHandleChange: (selectedFilter: string[]) => void;
  handleSendData: () => void;
}

const Search: React.FC<SearchProps> = ({
  selectedFilters,
  onHandleChange,
  handleSendData,
}) => {
  const getDogBreeds = api.dogs.breeds.useQuery()?.data?.breeds as string[];
  return (
    <>
      <div>
        <Listbox value={selectedFilters} onChange={onHandleChange} multiple>
          <Listbox.Button className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500">
            Search By Breed
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

          <Listbox.Options className="w-50 absolute z-10 mr-80 mt-2 cursor-pointer rounded border border-gray-300 bg-white py-2 shadow-lg">
            <div className="max-h-80 overflow-y-scroll ">
              {getDogBreeds?.map((breed: string) => (
                <Listbox.Option key={breed} value={breed} as={Fragment}>
                  {({ active, selected }) => (
                    <li
                      className={`relative cursor-pointer select-none px-4 py-2 ${
                        active
                          ? "bg-indigo-600 text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      {selected}
                      {breed}
                    </li>
                  )}
                </Listbox.Option>
              ))}
            </div>
          </Listbox.Options>
        </Listbox>
      </div>
      <Link href={`match`}>
        <button
          onClick={handleSendData}
          className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Match with a Dog
        </button>
      </Link>
    </>
  );
};

export default Search;
