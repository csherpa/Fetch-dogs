import { type Dog } from "~/server/api/models/dogs";
import DogCard from "./DogCard";
import { api } from "~/utils/api";

interface DogResultsProps {
  selectedFilters: string[];
}
const DogResults: React.FC<DogResultsProps> = ({ selectedFilters }) => {
  const searchDogs = api.dogs.searchDogs.useQuery({
    breeds: selectedFilters,
  }).data?.dogObj as unknown as Dog[];
  return (
    <section className="bg-off-gray py-4 md:py-16">
      <div className=" container relative mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 xl:grid-cols-4 2xl:grid-cols-4">
        {searchDogs?.map((dog: Dog) => (
          <DogCard key={dog.id} dog={dog}></DogCard>
        ))}
      </div>
    </section>
  );
};

export default DogResults;
