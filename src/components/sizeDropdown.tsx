import { useRouter } from "next/dist/client/router";
import { type Dispatch, type SetStateAction } from "react";

interface SizeDropdownProps {
  size: number;
  setSize: Dispatch<SetStateAction<number>>;
  current: URLSearchParams;
}

const SizeDropdown: React.FC<SizeDropdownProps> = ({
  size,
  setSize,
  current,
}) => {
  const router = useRouter();

  const handleSelectChange = (event: { target: { value: unknown } }) => {
    console.log("here");
    const selectedSize = Number(event.target.value);
    setSize(selectedSize);
    current.set("size", selectedSize.toString());
    const sizeQueryUrl = `${router.pathname}?${current.toString()}`;
    void router.push(sizeQueryUrl);
  };

  return (
    <div>
      <select
        id="size"
        name="size"
        defaultValue={size ? `Selected Size: ${size}` : "Select Size"}
        onChange={handleSelectChange}
        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <option value="" className="text-white">
          Selected Size: {size}
        </option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="40">40</option>
      </select>
    </div>
  );
};

export default SizeDropdown;
