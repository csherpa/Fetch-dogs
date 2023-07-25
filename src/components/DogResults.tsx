import { type Dog } from "~/server/api/models/dogs";
import DogCard from "./DogCard";
import TablePagination from "./Pagination";
import { useRouter } from "next/dist/client/router";
import { api } from "~/utils/api";

interface DogResultsProps {
  selectedFilters: string[];
  searchDogs: Dog[];
  current: URLSearchParams;
  getSize: string;
  getFrom: string;
}
const DogResults: React.FC<DogResultsProps> = ({
  selectedFilters,
  searchDogs,
  current,
  getSize,
  getFrom,
}) => {
  const size = Number(getSize);
  const from = Number(getFrom);

  const router = useRouter();

  const loadNextPage = () => {
    const nextDogs = size + from;
    current.set("from", nextDogs.toString());
    const newUrl = `${router.pathname}?${current.toString()}`;
    void router.push(newUrl, undefined, { scroll: true });
  };

  const loadPrevPage = () => {
    const prevDogs = from - size;
    current.set("from", prevDogs.toString());
    const prevUrl = `${router.pathname}?${current.toString()}`;
    void router.push(prevUrl, undefined, { scroll: true });
  };

  return (
    <>
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
          from={from}
          size={size}
        />
      </section>
    </>
  );
};

export default DogResults;
