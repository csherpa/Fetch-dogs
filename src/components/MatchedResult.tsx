/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type Dog } from "~/server/api/models/dogs";
import { api } from "~/utils/api";
import DogCard from "./DogCard";

interface MatchedResultProps {
  selectedFilters: string[];
}

const MatchedResult: React.FC<MatchedResultProps> = ({ selectedFilters }) => {
  const findMatch = api.dogs.searchDogs.useQuery({ breeds: selectedFilters })
    .data?.match;

  const searchDogs = api.dogs.searchDogs.useQuery({
    breeds: selectedFilters,
  }).data?.dogObj;

  console.log({ findMatch, searchDogs });

  const matchedDog = searchDogs.find(
    (dogObj) => dogObj.id === findMatch?.match
  );

  console.log({ matchedDog });
  return <section>{<DogCard dog={matchedDog}></DogCard>}</section>;
};

export default MatchedResult;
