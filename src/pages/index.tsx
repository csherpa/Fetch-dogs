import { type NextPage } from "next";
export function getStaticProps() {
  return {
    redirect: {
      permanent: true,
      destination: `/login`,
    },
    props: {} as never,
  };
}

const NextPage: NextPage<typeof getStaticProps> = () => {
  return <div></div>;
};

export default NextPage;
