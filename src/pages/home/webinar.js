import Image from "next/image";
import Link from "next/link";
import IDC_booklet from "../../../public/images/IDC-booklet.png";
import arrow_right_red from "../../../public/images/arrow-right-red.svg";
import idc_logo from "../../../public/images/idc-logo_black.png";
const Webinar = () => {
  return (
    <>
      <div className="webinar__wrapper grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        <div className="webinar__content col-span-2  lg:max-w-[610px]">
          <Image
            src={idc_logo}
            width={100}
            height={30}
            alt="Picture of the author"
            className="z-[2] mb-4"
          />
          <h3 className="font-bold text-[28px] leading-10  mb-6">
            Mitsogo (Hexnode) mentioned as a Major Player in IDC MarketScape:
            Worldwide Unified Endpoint Management Software 2024 Vendor
            Assessment
          </h3>
          <Link href={"#"} className="text-[#dd0735]">
            <button className="flex gap-3 items-center font-bold">
              Get Report
              <Image
                src={arrow_right_red}
                width={6}
                height={10}
                alt="Picture of the author"
                className="z-[2] "
              />
            </button>
          </Link>
        </div>
        <div className="webinar__speaker max-w-[370px] max-h-[300px]">
          <Image
            src={IDC_booklet}
            width={370}
            height={333}
            alt="Picture of the author"
            className="z-[2] w-full"
          />
        </div>
      </div>
    </>
  );
};

export default Webinar;
