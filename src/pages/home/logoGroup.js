import SectionSecondHeader from "../../../components/UI-widget/sectionSecondHeader";
import Image from "next/image";

import marriott from "../../../public/images/marriott-intl.svg";
import hilton from "../../../public/images/hilton.svg";
import merck from "../../../public/images/merck.svg";
import costco from "../../../public/images/costco.svg";
import saic from "../../../public/images/saic.svg";
import automotive from "../../../public/images/group1-automotive.png";
import lowes from "../../../public/images/lowes.svg";
import polaris from "../../../public/images/polaris.svg";
import gorillas from "../../../public/images/gorillas.svg";
import wolt from "../../../public/images/wolt.svg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const LogoGrop = () => {
  const logoList = [
    { id: 1, src: marriott },
    { id: 2, src: hilton },
    { id: 3, src: merck },
    { id: 4, src: costco },
    { id: 5, src: saic },
    { id: 6, src: lowes },
    { id: 7, src: automotive },
    { id: 8, src: polaris },
    { id: 9, src: gorillas },
    { id: 10, src: wolt },
  ];
  return (
    <>
      <div className="solution-logoGroup__wrapper">
        <div className="max-w-[780px] m-auto">
          <SectionSecondHeader
            title={`Trusted by hundred's of SMBs and Enterprises around the world`}
            removeText
            dark
            center
          />
        </div>

        <div>
          {/* ..... mobile logoGroup start */}

          <div className="olution-logoGroup__md_brandLogo grid grid-cols-2 sm:grid-cols-3 md:hidden">
            {logoList.map((data) => (
              <div>
                <Image
                  src={data.src}
                  width={210}
                  height={102}
                  alt="Picture of the author"
                />
              </div>
            ))}
          </div>
          {/* ..... mobile logoGroup end */}
          <div className="hidden md:block">
            <Swiper
              slidesPerView={6}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 6,
                  spaceBetween: 30,
                },
              }}
              // modules={[Pagination]}
              className="mySwiper "
            >
              {logoList.map((data) => (
                <SwiperSlide key={data.id}>
                  <div>
                    <Image
                      src={data.src}
                      width={210}
                      height={102}
                      alt="Picture of the author"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogoGrop;
