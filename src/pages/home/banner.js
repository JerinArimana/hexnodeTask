import Image from "next/image";
import SectionHeader from "../../../components/UI-widget/sectionHeader";
import CustomButton from "../../../components/UI-widget/customButton";
const Banner = () => {
  const clickHandler = () => {
    console.log("click");
  };
  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:gap-9 lg:gap-40 lg:grid-cols-2  items-center  md:text-left">
        <div className="banner_info">
          <SectionHeader
            title={`The Standard for Unified Endpoint Management`}
            text={`Manage devices of varying form factors and operating systems with one solution`}
          />
          <div className="banner_btn flex gap-4 m-auto justify-center lg:justify-start">
            <CustomButton
              href={""}
              label={"TRY FOR FREE"}
              onClick={clickHandler}
            />
            <CustomButton
              outline
              href={""}
              label={"REQUEST DEMO"}
              onClick={clickHandler}
            />
          </div>
        </div>
        <div className=" m-auto sm:w-1/2 lg:w-full">
          <Image
            className="w-full"
            src="/images/device-management-automated.jpg"
            alt="Picture of the author"
            width={600}
            height={540}
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
