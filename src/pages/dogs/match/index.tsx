/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @next/next/no-img-element */
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const DogMatchPage: NextPage = () => {
  const router = useRouter();
  const { query } = router;

  return (
    <>
      <Head>
        <title>T3 Dogs App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <Link href={"/dogs/search"}>
          <button className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500">
            Home
          </button>
        </Link>
        <h1 className="mt-4 text-white">
          You have been matched with {`${query.name}`}
        </h1>
        <section className="relative mt-6 block cursor-pointer rounded-tl-[10px] rounded-tr-[10px] bg-white">
          <section className="relative rounded-[10px]">
            <div className="mx-auto bg-white p-3">
              <img
                className="h-44 w-full object-fill"
                src={`${query.img}`}
                alt="Picture of a Dog"
              />
            </div>
            <section className="p-4">
              <h2 className="text-lg font-bold leading-6">
                Name: {query.name}
              </h2>
              <p className="text-sm font-bold">Breed: {query.breed}</p>
              <p className="text-sm font-bold">Age: {query.age}</p>
              <p className="text-sm font-bold">Zip Code: {query.zip_code}</p>
            </section>
          </section>
        </section>
      </main>
    </>
  );
};

export default DogMatchPage;
