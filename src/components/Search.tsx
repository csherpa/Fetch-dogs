import { api } from "~/utils/api";
import { Listbox } from "@headlessui/react";
import { useEffect, useState } from "react";

const Search: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const getDogBreeds = api.dogs.breeds.useQuery().data;

  useEffect(() => {
    setSelectedFilters(getDogBreeds?.data);
  }, [getDogBreeds?.data]);

  console.log(selectedFilters, "breedsData");

  return (
    <section>
      <Listbox value={selectedFilters} onChange={setSelectedFilters} multiple>
        <Listbox.Button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Search By Breed
        </Listbox.Button>
        <Listbox.Options className="text-white">
          {selectedFilters?.map((breed) => (
            <Listbox.Option key={breed} value={breed}>
              {breed}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </section>
  );
};

export default Search;
