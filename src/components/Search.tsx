import { Listbox } from "@headlessui/react";
import { type Dispatch, Fragment, type SetStateAction } from "react";

interface SearchProps {
  selectedFilters: string[];
  setSelectedFilters: Dispatch<SetStateAction<string[]>>;
  getDogBreeds: string[];
  clearSelectedFilters: () => void;
}

const Search: React.FC<SearchProps> = ({
  selectedFilters,
  setSelectedFilters,
  getDogBreeds,
  clearSelectedFilters,
}) => {
  return (
    <section>
      <Listbox value={selectedFilters} onChange={setSelectedFilters}>
        <Listbox.Button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Search By Breed
        </Listbox.Button>
        <Listbox.Options className="absolute z-10 cursor-pointer text-white">
          <div className="max-h-80 overflow-y-scroll ">
            {getDogBreeds?.map((breed: string) => (
              // <Listbox.Option key={breed} value={breed}>
              //   <li className="bg-white text-black">{breed}</li>
              // </Listbox.Option>
              <Listbox.Option key={breed} value={breed} as={Fragment}>
                {({ active, selected }) => (
                  <li
                    className={`${
                      active
                        ? " bg-indigo-600 text-white"
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
      <button
        onClick={clearSelectedFilters}
        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Clear Breeds
      </button>
    </section>
  );
};

export default Search;
