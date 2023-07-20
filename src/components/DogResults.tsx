import { type Dog } from "~/server/api/models/dogs";
import DogCard from "./DogCard";
import { api } from "~/utils/api";
import TablePagination from "./Pagination";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";

interface DogResultsProps {
  selectedFilters: string[];
  current: URLSearchParams;
}
const DogResults: React.FC<DogResultsProps> = ({
  selectedFilters,
  current,
}) => {
  const [from, setFrom] = useState(0);

  const router = useRouter();

  const searchDogs = api.dogs.searchDogs.useQuery({
    breeds: selectedFilters,
    from: from,
    size: Number(router.query.size),
  }).data?.dogObj as unknown as Dog[];

  const loadNextPage = () => {
    const nextDogs = Number(router.query.size) + from;
    setFrom(nextDogs);
    current.set("from", nextDogs.toString());
    const newUrl = `${router.pathname}?${current.toString()}`;
    void router.push(newUrl, undefined, { scroll: true });
  };

  const loadPrevPage = () => {
    const prevDogs = from - Number(router.query.size);
    setFrom(prevDogs);
    current.set("from", prevDogs.toString());
    const prevUrl = `${router.pathname}?${current.toString()}`;
    void router.push(prevUrl, undefined, { scroll: true });
  };

  return (
    <section className="bg-off-gray py-4 md:py-16">
      <div className=" container relative mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 xl:grid-cols-4 2xl:grid-cols-4">
        {searchDogs?.map((dog: Dog) => (
          <DogCard key={dog.id} dog={dog}></DogCard>
        ))}
      </div>
      <TablePagination
        selectedFilters={selectedFilters}
        loadPrevPage={loadPrevPage}
        loadNextPage={loadNextPage}
        searchDogs={searchDogs}
        from={from}
      />
    </section>
  );
};

export default DogResults;
