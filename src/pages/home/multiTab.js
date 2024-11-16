import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TestimonialsCard from "../../../components/UI-widget/testimonialsCard";
import videoThumb from "../../../public/images/domonova-thumbnail.jpg";
import logoDomonova from "../../../public/images/logo-domonova.svg";

const MultiTab = () => {
  return (
    <>
      <div className="multiTab__wrapper">
        <Tabs
          defaultActiveKey="testimonials"
          id="uncontrolled-tab-example"
          className="mb-3 justify-center"
        >
          <Tab eventKey="testimonials" title="Testimonials">
            <div className="multiTab__testimonial_wrapper">
              <TestimonialsCard
                videoThumb={videoThumb}
                videoBrandLogo={logoDomonova}
                videoURL={"https://www.hexnode.com?wvideo=0uab6myr8y"}
                testimonialTitle={`Domonova was able to remotely manage devices deployed all across Spain, saving time and money.`}
                testimonialText={`“The reason why we chose Hexnode was they gave us the possibility to control all the devices from our HQ. This saves us a lot of money and time.”`}
                authorName={`Pedro Núñez Porras`}
                authorRole={`CEO`}
                authorCompany={`Domonova Soluciones Technológicas`}
              />
            </div>
          </Tab>
          <Tab eventKey="customer-Stories" title="Customer Stories">
            Tab content for Customer Stories
          </Tab>
          <Tab eventKey="case-studies" title="Case Studies">
            Tab content for Case Studies
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default MultiTab;
