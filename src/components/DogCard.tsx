/* eslint-disable @next/next/no-img-element */
import { ParsedUrlQuery } from "querystring";
import { type Dog } from "~/server/api/models/dogs";

interface DogCardProps {
  dog: Dog;
}

const DogCard: React.FC<DogCardProps> = ({ dog }) => {
  return (
    <section className="relative block cursor-pointer rounded-tl-[10px] rounded-tr-[10px] bg-white">
      <section className="relative rounded-[10px]">
        <div className="mx-auto bg-white p-3">
          <img
            className="h-44 w-full object-fill"
            src={`${dog.img}`}
            alt="Picture of a Dog"
          />
        </div>
        <section className="p-4">
          <h2 className="text-lg font-bold leading-6">Name: {dog.name}</h2>
          <p className="text-sm font-bold">Breed: {dog.breed}</p>
          <p className="text-sm font-bold">Age: {dog.age}</p>
          <p className="text-sm font-bold">Zip Code: {dog.zip_code}</p>
        </section>
      </section>
    </section>
  );
};

export default DogCard;
