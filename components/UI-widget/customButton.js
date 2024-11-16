import Link from "next/link";

const CustomButton = ({ outline, label, ...props }) => {
  return (
    <>
      <Link {...props} className="max-w-[220px]">
        <button
          className={`w-full py-3 px-11 text-white ${
            outline ? "border" : "bg-[#dd0735] "
          }`}
          {...props}
        >
          {label}
        </button>
      </Link>
    </>
  );
};

export default CustomButton;
