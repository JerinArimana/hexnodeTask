import Image from "next/image";
import bookIcon from "../../public/images/book.svg";
import playCircle from "../../public/images/play-circle.svg";

import Link from "next/link";
const CaseStudyCard = ({ caseStudyImg, caseStudyLogo, caseStudytext }) => {
  return (
    <>
      <div className="case-studies__wrapper max-w-[100%] text-center">
        <div className="case-studies__image rounded-xl overflow-hidden relative ">
          <Image
            src={caseStudyImg}
            width={290}
            height={260}
            alt="Picture of the author"
            className="thumbImage z-[2] w-full"
          />
          <div className="case_studies_hover z-10 absolute left-0 top-0 w-full h-full  grid grid-cols-1 ">
            <div className="case_studies_hover_item first_item flex justify-center items-center m-auto relative w-full h-full">
              <Link
                href={"#"}
                className="flex w-full justify-center gap-3 text-white"
              >
                <Image
                  src={bookIcon}
                  width={32}
                  height={32}
                  alt="Picture of the author"
                  className="z-[2] "
                />
                <span className="">Read Story</span>
              </Link>
            </div>
            <div className="case_studies_hover_item flex justify-center items-center m-auto">
              <Link
                href={"#"}
                className="flex w-full justify-center gap-3 text-white"
              >
                <Image
                  src={playCircle}
                  width={32}
                  height={32}
                  alt="Picture of the author"
                  className="z-[2] "
                />
                <span className="">Read Story</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="case-studies__info p-4">
          <Image
            src={caseStudyLogo}
            width={140}
            height={35}
            alt="Picture of the author"
            className="z-[2] m-auto min-h-[80px] object-contain"
          />
          <p>{caseStudytext}</p>
        </div>
      </div>
    </>
  );
};

export default CaseStudyCard;
