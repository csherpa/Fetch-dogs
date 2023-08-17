import Link from "next/link";
import { useState } from "react";
import LogoutButton from "./LogoutButton";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <header>
      <div className="container mx-auto px-8 py-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="justify-bewteen flex w-full flex-row-reverse items-center">
            <div data-testid="menu" className="ml-12 md:ml-32">
              <svg
                onClick={() => {
                  setMenuIsOpen(!menuIsOpen);
                }}
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
                className="ml-auto block h-6 w-6 lg:hidden"
              >
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
              </svg>
            </div>
          </div>

          <nav
            className={`mx-2 max-w-full flex-1 py-4 lg:w-[400px] lg:flex-none lg:py-0 xl:w-[500px] ${
              menuIsOpen ? "block" : "hidden lg:block"
            }`}
          >
            <ul
              className={`absolute left-0 right-0 flex flex-col items-end justify-evenly bg-white px-8 py-4 shadow-sm lg:relative lg:flex-row lg:items-center lg:px-0 lg:py-0 lg:shadow-none ${
                menuIsOpen ? "flex" : "hidden lg:flex"
              }`}
            >
              <li className="p-2 text-lg font-semibold text-[#383838] lg:p-0">
                <Link href="/dogs/search">Paw Pals</Link>
              </li>
              <li className="p-2 text-lg font-semibold text-[#383838] lg:p-0">
                <Link href="/dogs/match">Match with Paw Pals</Link>
              </li>
              <li>
                <LogoutButton />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
