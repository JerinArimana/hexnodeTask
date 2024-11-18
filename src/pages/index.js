import Image from "next/image";
import Header from "../../components/Header";
import Banner from "./home/banner";
import ResearchService from "./home/researchService";
import SolutionGridExcel from "./home/solutionGridExcel";
import LogoGrop from "./home/logoGroup";
import MultiTab from "./home/multiTab";
import Webinar from "./home/webinar";
import SignupSection from "./home/signupSection";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="banner pt-[100px] md:pt-[125px] bg-[#101420]">
          <div className="hex_custom_container">
            <Banner />
          </div>
        </section>
        <section className="research-service py-[30px] bg-[#1a1c2b]">
          <div className="hex_custom_container">
            <ResearchService />
          </div>
        </section>
        <section className="solutionGrid-excel py-[50px]">
          <div className="hex_custom_container">
            <SolutionGridExcel />
          </div>
        </section>
        <section className="solution-logoGroup py-[50px] bg-[#f5faff]">
          <div className="hex_custom_container">
            <LogoGrop />
          </div>
        </section>
        <section className="multiTab py-[50px]">
          <div className="hex_custom_container">
            <MultiTab />
          </div>
        </section>
        <section className="webinar bg-[#f5faff]  py-[50px]">
          <div className="hex_custom_container">
            <Webinar />
          </div>
        </section>
        <section className="signup_bottom bg-[#020a19] py-[50px]">
          <div className="hex_custom_container">
            <SignupSection />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
