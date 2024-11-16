import Link from "next/link";
import Image from "next/image";
const ResearchServiceCard = ({ researchBrand, researchText, ...props }) => {
  return (
    <>
      <Link
        {...props}
        className="no-underline px-[10px] pd:mx-[20px] lg:px-[50px] first:pl-0 last:pr-0"
      >
        <div className="research-service__item  ">
          <Image
            className="mb-3"
            src={researchBrand}
            width={156}
            height={25}
            alt="research service"
            style={{ width: "", height: "auto" }}
          />
          <p className="text-sm">{researchText}</p>
        </div>
      </Link>
    </>
  );
};

export default ResearchServiceCard;
