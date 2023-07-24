import { Listbox } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";
import { api } from "~/utils/api";

interface SearchProps {
  selectedFilters: string[];
  onHandleChange: (selectedFilter: string[]) => void;
}

const Search: React.FC<SearchProps> = ({ selectedFilters, onHandleChange }) => {
  const getDogBreeds = api.dogs.breeds.useQuery()?.data?.breeds as string[];
  return (
    <>
      <Listbox value={selectedFilters} onChange={onHandleChange} multiple>
        <Listbox.Button className="flex rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500">
          Search By Breed
        </Listbox.Button>
        <Listbox.Options className="absolute z-10 mr-80 mt-9 cursor-pointer rounded border border-gray-300 bg-white">
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

      <Link href={"/dogs/match"}>
        <button className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Match with a Dog
        </button>
      </Link>
    </>
  );
};

export default Search;
