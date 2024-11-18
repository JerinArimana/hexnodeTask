import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TestimonialsCard from "../../../components/UI-widget/testimonialsCard";
import videoThumb1 from "../../../public/images/domonova-thumbnail.jpg";
import videoThumb2 from "../../../public/images/solazo-thumbnail.jpg";

import logoDomonova from "../../../public/images/logo-domonova.svg";
import logosolazo from "../../../public/images/logo-solazo.png";

import hexnodeulmer_sdtech from "../../../public/images/hexnode-wes-ulmer-sdtech.jpg";
import goodyear_domyown from "../../../public/images/hexnode-david-goodyear-domyown.jpg";
import relevant_services from "../../../public/images/hexnode-tom-morrison-relevant-services.jpg";
import case_study_donaldson from "../../../public/images/hexnode-case-study-on-donaldson.jpg";
import donaldsonLogo from "../../../public/images/donaldson.png";
import western_airwaysLogo from "../../../public/images/western-airways.png";
import conde_nastLogo from "../../../public/images/conde-nast.svg";
import case_study_western_airways from "../../../public/images/hexnode-case-study-on-western-airways.png";
import case_study_conde_nast from "../../../public/images/hexnode-case-study-on-conde-nast.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import CustomerStoriesCard from "../../../components/UI-widget/customerStoriesCard";
import CaseStudyCard from "../../../components/UI-widget/caseStudyCard";
const MultiTab = () => {
  const testimonialData = [
    {
      id: 1,
      videoBgImg: videoThumb1,
      videoBrandLogo: logoDomonova,
      videoURL: "https://www.hexnode.com?wvideo=0uab6myr8y",
      testimonialTitle: `Domonova was able to remotely manage devices deployed all across Spain, saving time and money.`,
      testimonialText: `“The reason why we chose Hexnode was they gave us the possibility to control all the devices from our HQ. This saves us a lot of money and time.”`,
      authorName: `Pedro Núñez Porras`,
      authorRole: `CEO`,
      authorCompany: `Domonova Soluciones Technológicas`,
    },
    {
      id: 2,
      videoBgImg: videoThumb2,
      videoBrandLogo: logosolazo,
      videoURL: "https://www.hexnode.com?wvideo=0uab6myr8y",
      testimonialTitle: `Hexnode enabled Solazo to manage, secure and lockdown devices used by their truck drivers all throughout the EU.`,
      testimonialText: `“It is very easy to select the drivers (users), select the application they need and install it. It is quite easy.”`,
      authorName: `Miguel Ángel Soravilla`,
      authorRole: `Operations Manager`,
      authorCompany: `Transportes Solazo`,
    },
  ];
  const customerStories = [
    {
      id: 1,
      videoBgImg: hexnodeulmer_sdtech,
      videoBrandLogo: logoDomonova,
      testimonialTitle: `We looked around to find a both reliable but a solution that also offered excellent support, that’s when we came across Hexnode.`,
      testimonialText: `How did Hexnode help SD Tech migrate from Apple to Samsung Knox ecosystem`,
      condent_list: [
        "Integrated phenomenally well with KME.",
        "Helped migrate devices from over 25+ locations remotely",
        "Made entire deployment of devices and apps, hands-off",
      ],
      authorName: `Wes Ulmer`,
      authorRole: `Owner`,
      authorCompany: `SD Tech`,
    },
    {
      id: 2,
      videoBgImg: goodyear_domyown,
      videoBrandLogo: logoDomonova,
      testimonialTitle: `...and then we found Hexnode and it checked all of the boxes`,
      testimonialText: `How Hexnode helped DoMyOwn’s one man IT team`,
      condent_list: [
        "Lockdown devices to specific functions",
        "Automatically handle device software update",
        "Set up geofences and location tracking on managed devices",
      ],
      authorName: `David Goodyear`,
      authorRole: `Information Technology Manager,`,
      authorCompany: `DoMyOwn.com`,
    },
    {
      id: 3,
      videoBgImg: relevant_services,
      videoBrandLogo: logoDomonova,
      testimonialTitle: `Hexnode was the mama bear solution, wasn’t too big, wasn’t too small, just the right fit`,
      testimonialText: `See how Hexnode streamlined Relevent Services Apple only ecosystem.`,
      condent_list: [
        "Helped rapidly deploy new devices",
        "Aided in pushing standard configurations to all devices",
        "Gave IT total control over managed devices",
      ],
      authorName: `Tom Morrison`,
      authorRole: `Owner - Technology Specialist`,
      authorCompany: `Relevant Services, LLC`,
    },
  ];
  const caseStudiesData = [
    {
      id: 1,
      caseStudyImg: case_study_donaldson,
      caseStudyLogo: donaldsonLogo,
      caseStudytext: `Streamlining device management with Hexnode`,
    },
    {
      id: 2,
      caseStudyImg: case_study_western_airways,
      caseStudyLogo: western_airwaysLogo,
      caseStudytext: `Managing mobile devices in the sky with Hexnode`,
    },
    {
      id: 3,
      caseStudyImg: case_study_conde_nast,
      caseStudyLogo: conde_nastLogo,
      caseStudytext: `Locking down field devices with Hexnode`,
    },
  ];
  return (
    <>
      <div className="multiTab__wrapper max-w-[620px] lg:max-w-full m-auto">
        <Tabs
          defaultActiveKey="testimonials"
          id="uncontrolled-tab-example"
          className="justify-center tabNav_menu"
        >
          <Tab eventKey="testimonials" title="Testimonials">
            <div className="multiTab__testimonial_wrapper relative">
              <Swiper
                navigation={true}
                spaceBetween={20}
                modules={[Navigation]}
                className="mySwiper"
              >
                {testimonialData.map((data) => (
                  <SwiperSlide key={data.id}>
                    <TestimonialsCard
                      videoThumb={data.videoBgImg}
                      videoBrandLogo={data.videoBrandLogo}
                      videoURL={data.videoURL}
                      testimonialTitle={data.testimonialTitle}
                      testimonialText={data.testimonialText}
                      authorName={data.authorName}
                      authorRole={data.authorRole}
                      authorCompany={data.authorCompany}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Tab>
          <Tab eventKey="customer-Stories" title="Customer Stories">
            <div className="multiTab__testimonial_wrapper relative">
              <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                {customerStories.map((data) => (
                  <SwiperSlide key={data.id}>
                    <CustomerStoriesCard
                      videoThumb={data.videoBgImg}
                      videoBrandLogo={data.videoBrandLogo}
                      condent_list={data.condent_list}
                      testimonialTitle={data.testimonialTitle}
                      testimonialText={data.testimonialText}
                      authorName={data.authorName}
                      authorRole={data.authorRole}
                      authorCompany={data.authorCompany}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Tab>
          <Tab eventKey="case-studies" title="Case Studies">
            <div className="multiTab__testimonial_wrapper relative  grid-cols-1 md:grid-cols-2  lg:grid-cols-3 grid gap-10 max-w-[280px] md:max-w-[1000px] m-auto case-studies">
              {caseStudiesData.map((data) => (
                <CaseStudyCard
                  key={data.id}
                  data={data.id}
                  caseStudyImg={data.caseStudyImg}
                  caseStudyLogo={data.caseStudyLogo}
                  caseStudytext={data.caseStudytext}
                />
              ))}
            </div>
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default MultiTab;
