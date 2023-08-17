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
        className="p-2 text-lg font-semibold text-[#383838] lg:p-0"
        onClick={handleLogout}
      >
        LogOut
      </button>
    </section>
  );
};

export default LogoutButton;
