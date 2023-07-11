import { api } from "~/utils/api";

const Search: React.FC = () => {
  const getDogBreeds = api.dogs.breeds.useQuery();
  console.log(getDogBreeds.data, "breedsData");

  const searchDogs = api.dogs.searchDogs.useQuery({ breeds: [] }).data;
  console.log(searchDogs?.data, "searchDogs");
  console.log(searchDogs?.matchdata, "matchDogs");
  return <section></section>;
};

export default Search;
