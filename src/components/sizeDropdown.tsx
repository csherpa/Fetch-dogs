import { Listbox } from "@headlessui/react";

interface SizeDropdownProps {
  current: URLSearchParams;
  getSize: string;
  handleSelectChange: (value: number) => void;
}

const sizeOptions = [
  { value: "10", label: "10" },
  { value: "20", label: "20" },
  { value: "40", label: "40" },
];

const SizeDropdown: React.FC<SizeDropdownProps> = ({
  handleSelectChange,
  getSize,
}) => {
  const size = Number(getSize);

  return (
    <>
      <div>
        <Listbox value={size} onChange={handleSelectChange}>
          <Listbox.Button className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500">
            Selected Size: {size}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
                className="ml-2 mt-1 fill-white"
              >
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </span>
          </Listbox.Button>
          <Listbox.Options className="absolute z-10 mt-2 w-40 rounded border border-gray-300 bg-white py-2 shadow-lg">
            {sizeOptions.map((option) => (
              <Listbox.Option key={option.value} value={option.value}>
                {({ active }) => (
                  <li
                    className={`relative cursor-pointer select-none px-4 py-2 ${
                      active
                        ? "bg-indigo-600 text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    {option.label}
                  </li>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </div>
    </>
  );
};

export default SizeDropdown;
