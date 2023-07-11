import Link from "next/link";
import Image from "next/image";

interface DogCardProps {
  dog: unknown;
}

const DogCard: React.FC<DogCardProps> = ({ dog }) => {
  console.log({ dog });
  return (
    <section className="relative block cursor-pointer rounded-tl-[10px] rounded-tr-[10px] bg-white">
      <section className="shadow-card relative rounded-[10px]">
        {/* <Image
          src={`${dog.img}`}
          blurDataURL={`${dog.img}`}
          layout="responsive"
          loading="eager"
          placeholder="blur"
          width={600}
          height={400}
          alt=""
          className="h-44 w-full rounded-tl-[10px] rounded-tr-[10px] object-cover"
        /> */}
        <img
          className="h-44 w-full rounded-tl-[10px] rounded-tr-[10px] object-cover"
          src={`${dog.img}`}
          alt="dogs"
        />
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
