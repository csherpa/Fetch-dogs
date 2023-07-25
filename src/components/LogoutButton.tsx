import { useRouter } from "next/dist/client/router";
import { api } from "~/utils/api";

const LogoutButton: React.FC = () => {
  const router = useRouter();

  const logout = api.auth.logout.useMutation();

  const handleLogout = () => {
    logout.mutate();
    void router.push("/login");
  };

  return (
    <section>
      <button
        className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={handleLogout}
      >
        LogOut
      </button>
    </section>
  );
};

export default LogoutButton;
