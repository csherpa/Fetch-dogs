import { useRouter } from "next/dist/client/router";

const Header: React.FC = () => {
  const router = useRouter();
  const handleLogout = () => {
    void router.push("/login");
  };
  return (
    <section>
      <button
        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={handleLogout}
      >
        LogOut
      </button>
    </section>
  );
};

export default Header;
