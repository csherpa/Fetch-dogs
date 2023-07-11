/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Head from "next/head";
// import { api } from "~/utils/api";
import { useRouter } from "next/router";
import LoginForm from "~/components/LoginForm";

export default function Home() {
  const router = useRouter();
  // console.log(router, "Query");
  // const redirectUrl = `/dogs`;
  // const allZipArr: unknown[] = [];

  // const getDogBreeds = api.dogs.breeds.useQuery();
  // console.log(getDogBreeds.data, "breedsData");

  // const searchDogs = api.dogs.searchDogs.useQuery({ breeds: [] }).data;
  // console.log(searchDogs?.data, "searchDogs");
  // console.log(searchDogs?.matchdata, "matchDogs");

  // const zipCodes = searchDogs?.data.forEach((val: any) => {
  //   // console.log(val.zip_code);
  //   allZipArr.push(val.zip_code);
  // });
  // const locations = api.location.location.useQuery({ zip_codes: allZipArr });
  // console.log(locations.data);
  // const matchDog = () => {
  //   axios({
  //     method: "POST",
  //     url: "https://frontend-take-home-service.fetch.com/dogs/match",
  //     body: dogIds,
  //   }).then(({ data }) => {
  //     console.log(data, "data");
  //   });
  // };

  // useEffect(() => {
  //   console.log(zipCodes);
  // }, [zipCodes]);
  return (
    <>
      <Head>
        <title>T3 Dogs App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <LoginForm />
      </main>
    </>
  );
}
