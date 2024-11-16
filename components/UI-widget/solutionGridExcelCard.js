import Image from "next/image";
const SolutionGridExcelCard = ({ image, title, ...props }) => {
  return (
    <>
      <div className="solutionGrid-excel__item text-center flex flex-col items-center justify-center border-[1px] border-solid divide-slate-50 px-[30px] pb-[30px] pt-[50px]">
        <div className="item_info">
          <Image
            className="min-h-[120px] object-cover m-auto pb-3 md:pb-8"
            src={image}
            width={295}
            height={140}
            alt="Picture of the author"
          />
          <h3 className="text-[24px] mb-1 font-normal ">{title}</h3>
        </div>

        <button
          {...props}
          className="flex gap-3 justify-center items-center m-auto"
        >
          Explore{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8.111"
            height="13.393"
            viewBox="0 0 8.111 13.393"
          >
            <path
              id="Path_1"
              data-name="Path 1"
              d="M-59.92,210.72-54.638,216l-5.282,5.282"
              transform="translate(61.334 -209.306)"
              fill="none"
              stroke="#707070"
              stroke-linecap="round"
              stroke-width="2"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default SolutionGridExcelCard;
