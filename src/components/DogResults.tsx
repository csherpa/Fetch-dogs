import { useEffect, useState } from "react";
import { type Dog } from "~/server/api/models/dogs";
import { api } from "~/utils/api";
import DogCard from "./DogCard";

const DogResults: React.FC = () => {
  const [moreDogs, setmoreDogs] = useState([] as Dog[]);

  const searchDogs = api.dogs.searchDogs.useQuery({
    breeds: [],
  }).data;
  // console.log(searchDogs?.data, "searchDogs");
  useEffect(() => setmoreDogs(searchDogs?.data), [searchDogs?.data]);

  // console.log({ moreDogs });
  return (
    <section className="bg-off-gray py-4 md:py-16">
      <div className=" container relative mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 xl:grid-cols-4 2xl:grid-cols-4">
        {moreDogs?.map((dog: Dog) => (
          <DogCard key={dog.id} dog={dog}></DogCard>
        ))}
      </div>
    </section>
  );
};

export default DogResults;
