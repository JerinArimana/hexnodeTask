import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import hexcon24_logo from "../public/images/hexcon24-logo.svg";
import powered_by from "../public/images/powered-by-mitsogo.svg";
import SAA_show from "../public/images/SAA-show-event.jpg";
import Us_flag from "../public/images/Us_flag.png";

import Link from "next/link";
import CustomButton from "./UI-widget/customButton";

const Footer = () => {
  return (
    <>
      <footer className="footer bg-[#f5faff]  py-[50px]">
        <div className="hex_custom_container">
          <div className="">
            <Accordion className="desktop-accordion-open grid md:grid-cols-3  xl:grid-cols-6 gap-2 ">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <div>
                    <Image
                      src={hexcon24_logo}
                      width={100}
                      height={20}
                      alt="Picture of the author"
                      className="z-[2] "
                    />
                    <Image
                      src={powered_by}
                      width={100}
                      height={15}
                      alt="Picture of the author"
                      className="z-[2] "
                    />
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <ul className="p-0">
                    <li className="mb-2">
                      <Link
                        href={"#"}
                        className="no-underline text-[14px] text-[#556575]"
                      >
                        Hexnode UEM
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link
                        href={"#"}
                        className="no-underline text-[14px] text-[#556575]"
                      >
                        Hexnode Kiosk Lockdown
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link
                        href={"#"}
                        className="no-underline text-[14px] text-[#556575]"
                      >
                        Hexnode Secure Browser
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link
                        href={"#"}
                        className="no-underline text-[14px] text-[#556575]"
                      >
                        Hexnode Digital Signage
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link
                        href={"#"}
                        className="no-underline text-[14px] text-[#556575]"
                      >
                        Hexnode Genie
                      </Link>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                eventKey="1"
                className="md:row-span-1 xl:row-span-2"
              >
                <Accordion.Header>
                  <h6>PRODUCT</h6>
                </Accordion.Header>
                <Accordion.Body>
                  <div>
                    <ul className="p-0">
                      <li className="mb-2">
                        <Link
                          href={"#"}
                          className="no-underline text-[14px] text-[#556575]"
                        >
                          All Features
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          href={"#"}
                          className="no-underline text-[14px] text-[#556575]"
                        >
                          Pricing
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          href={"#"}
                          className="no-underline text-[14px] text-[#556575]"
                        >
                          Customers
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          href={"#"}
                          className="no-underline text-[14px] text-[#556575]"
                        >
                          Customer Stories
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          href={"#"}
                          className="no-underline text-[14px] text-[#556575]"
                        >
                          Resources
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          href={"#"}
                          className="no-underline text-[14px] text-[#556575]"
                        >
                          Webinar
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          href={"#"}
                          className="no-underline text-[14px] text-[#556575]"
                        >
                          Help
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          href={"#"}
                          className="no-underline text-[14px] text-[#556575]"
                        >
                          Academy
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          href={"#"}
                          className="no-underline text-[14px] text-[#556575]"
                        >
                          Forums
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          href={"#"}
                          className="no-underline text-[14px] text-[#556575]"
                        >
                          Developers
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          href={"#"}
                          className="no-underline text-[14px] text-[#556575]"
                        >
                          Marketplace
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          href={"#"}
                          className="no-underline text-[14px] text-[#556575]"
                        >
                          Free Trial
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className="xl:row-span-2">
                <Accordion.Header>
                  <h6>SALES & SUPPORT</h6>
                </Accordion.Header>
                <Accordion.Body>
                  <div>
                    <ul className="p-0">
                      <li className="mb-2">
                        <Link
                          href={"#"}
                          className="no-underline text-[14px] text-[#556575]"
                        >
                          US: +1-833-HEXNODE (439-6633) Toll-free
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          href={"#"}
                          className="no-underline text-[14px] text-[#556575]"
                        >
                          UK: +44-8003-689920 Toll-free
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          href={"#"}
                          className="no-underline text-[14px] text-[#556575]"
                        >
                          AU: +61-1800-165-939 Toll-free
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          href={"#"}
                          className="no-underline text-[14px] text-[#556575]"
                        >
                          NZ: +64-9-8842599 Direct
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          href={"#"}
                          className="no-underline text-[14px] text-[#556575]"
                        >
                          CH: +41-44-798-2244 Direct
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          href={"#"}
                          className="no-underline text-[14px] text-[#556575]"
                        >
                          International: +1-415-636-7555
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          href={"#"}
                          className="no-underline text-[14px] text-[#556575]"
                        >
                          Fax: +1-415-646-4151
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          href={"#"}
                          className="no-underline text-[14px] text-[#556575]"
                        >
                          Support: support@hexnode.com
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          href={"#"}
                          className="no-underline text-[14px] text-[#556575]"
                        >
                          Partnership: partners@hexnode.com
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className="xl:row-span-2">
                <Accordion.Header>
                  <h6>COMPANY</h6>
                </Accordion.Header>
                <Accordion.Body>
                  <div>
                    <ul className="p-0">
                      <li className="mb-2">
                        <Link
                          href={"#"}
                          className="no-underline text-[14px] text-[#556575]"
                        >
                          About us
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          href={"#"}
                          className="no-underline text-[14px] text-[#556575]"
                        >
                          Security
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          href={"#"}
                          className="no-underline text-[14px] text-[#556575]"
                        >
                          GDPR Compliance
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          href={"#"}
                          className="no-underline text-[14px] text-[#556575]"
                        >
                          Contact us
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          href={"#"}
                          className="no-underline text-[14px] text-[#556575]"
                        >
                          Sitemap
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          href={"#"}
                          className="no-underline text-[14px] text-[#556575]"
                        >
                          Blog
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          href={"#"}
                          className="no-underline text-[14px] text-[#556575]"
                        >
                          News
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          href={"#"}
                          className="no-underline text-[14px] text-[#556575]"
                        >
                          Events
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          href={"#"}
                          className="no-underline text-[14px] text-[#556575]"
                        >
                          Careers
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          href={"#"}
                          className="no-underline text-[14px] text-[#556575]"
                        >
                          Legal
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4" className="xl:row-span-2">
                <Accordion.Header>
                  <h6>CONTACT US</h6>
                </Accordion.Header>
                <Accordion.Body>
                  <ul className="p-0">
                    <li className="mb-2">
                      <Link
                        href={"#"}
                        className="no-underline text-[14px] text-[#556575]"
                      >
                        Talk to Sales/Support
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link
                        href={"#"}
                        className="no-underline text-[14px] text-[#556575]"
                      >
                        Schedule a Demo
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link
                        href={"#"}
                        className="no-underline text-[14px] text-[#556575]"
                      >
                        Watch a Demo
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link
                        href={"#"}
                        className="no-underline text-[14px] text-[#556575]"
                      >
                        Get a Quote
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link
                        href={"#"}
                        className="no-underline text-[14px] text-[#556575]"
                      >
                        Raise a Ticket
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link
                        href={"#"}
                        className="no-underline text-[14px] text-[#556575]"
                      >
                        Hexnode Partner Programs
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link
                        href={"#"}
                        className="no-underline text-[14px] text-[#556575]"
                      >
                        Reseller Partnership
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link
                        href={"#"}
                        className="no-underline text-[14px] text-[#556575]"
                      >
                        OEM Partnership
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link
                        href={"#"}
                        className="no-underline text-[14px] text-[#556575]"
                      >
                        Distribution Program
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link
                        href={"#"}
                        className="no-underline text-[14px] text-[#556575]"
                      >
                        ISV Partnership
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link
                        href={"#"}
                        className="no-underline text-[14px] text-[#556575]"
                      >
                        MSP Partnership
                      </Link>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="5" className="xl:row-span-2">
                {/* <Accordion.Header>Accordion Item #2</Accordion.Header> */}
                <Accordion.Body className="px-0 pb-0">
                  <div className="mb-3">
                    <Image
                      src={SAA_show}
                      width={221}
                      height={115}
                      alt="Picture of the author"
                      className="z-[2] "
                    />
                    <p className="mt-3">
                      Our team of industry experts will be at the Schools and
                      Academies Show this November 20th! Come meet us at Booth
                      A21 to have a chat
                    </p>
                    <h6>MEET THE TEAM</h6>
                  </div>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="6" className="xl:row-span-1">
                <Accordion.Header>
                  <h6>CAPABILITIES</h6>
                </Accordion.Header>
                <Accordion.Body>
                  <div>
                    <ul className="p-0">
                      <li className="mb-2">
                        <Link
                          href={"#"}
                          className="no-underline text-[14px] text-[#556575]"
                        >
                          Device Management
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          href={"#"}
                          className="no-underline text-[14px] text-[#556575]"
                        >
                          Kiosk Lockdown
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          href={"#"}
                          className="no-underline text-[14px] text-[#556575]"
                        >
                          Compliance & Security
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          href={"#"}
                          className="no-underline text-[14px] text-[#556575]"
                        >
                          Supported Platforms
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          href={"#"}
                          className="no-underline text-[14px] text-[#556575]"
                        >
                          Enterprise Integrations
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          href={"#"}
                          className="no-underline text-[14px] text-[#556575]"
                        >
                          Enterprise Integrations
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          href={"#"}
                          className="no-underline text-[14px] text-[#556575]"
                        >
                          Industry
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                eventKey="7"
                className="md:col-span-1 xl:col-span-5 md:order-3 lg:order-none"
              >
                <Accordion.Header>
                  <h6>LOCATIONS</h6>
                </Accordion.Header>
                <Accordion.Body>
                  <div>
                    <ul className="national_flag_wrapper p-0 flex gap-3 social_profile flex-wrap">
                      <li className="">
                        <Link
                          href={"#"}
                          className="no-underline text-[14px] text-[#556575] flex gap-2 items-center"
                        >
                          <p className="mb-0">San Francisco (HQ)</p>
                          <span className="national_flag w-[15px] h-[15px] overflow-hidden flex items-center rounded-full">
                            {" "}
                            <Image
                              src={Us_flag}
                              width={15}
                              height={15}
                              alt="Picture of the author"
                              className="z-[2] object-cover h-full"
                            />
                          </span>
                        </Link>
                      </li>

                      <li className="">
                        <Link
                          href={"#"}
                          className="no-underline text-[14px] text-[#556575] gap-2 flex items-center"
                        >
                          <p className="mb-0">Atlanta</p>
                          <span className="national_flag w-[15px] h-[15px] overflow-hidden flex items-center rounded-full">
                            {" "}
                            <Image
                              src={Us_flag}
                              width={15}
                              height={15}
                              alt="Picture of the author"
                              className="z-[2] object-cover h-full"
                            />
                          </span>
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          href={"#"}
                          className="no-underline text-[14px] text-[#556575] gap-2 flex items-center"
                        >
                          <p className="mb-0">London</p>
                          <span className="national_flag w-[15px] h-[15px] overflow-hidden flex items-center rounded-full">
                            {" "}
                            <Image
                              src={Us_flag}
                              width={15}
                              height={15}
                              alt="Picture of the author"
                              className="z-[2] object-cover h-full"
                            />
                          </span>
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          href={"#"}
                          className="no-underline text-[14px] text-[#556575] gap-2 flex items-center"
                        >
                          <p className="mb-0">Dubai</p>
                          <span className="national_flag w-[15px] h-[15px] overflow-hidden flex items-center rounded-full">
                            {" "}
                            <Image
                              src={Us_flag}
                              width={15}
                              height={15}
                              alt="Picture of the author"
                              className="z-[2] object-cover h-full"
                            />
                          </span>
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          href={"#"}
                          className="no-underline text-[14px] text-[#556575] gap-2 flex items-center"
                        >
                          <p className="mb-0">Singapore</p>
                          <span className="national_flag w-[15px] h-[15px] overflow-hidden flex items-center rounded-full">
                            {" "}
                            <Image
                              src={Us_flag}
                              width={15}
                              height={15}
                              alt="Picture of the author"
                              className="z-[2] object-cover h-full"
                            />
                          </span>
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          href={"#"}
                          className="no-underline text-[14px] text-[#556575] gap-2 flex items-center"
                        >
                          <p className="mb-0">Bangalore</p>
                          <span className="national_flag w-[15px] h-[15px] overflow-hidden flex items-center rounded-full">
                            {" "}
                            <Image
                              src={Us_flag}
                              width={15}
                              height={15}
                              alt="Picture of the author"
                              className="z-[2] object-cover h-full"
                            />
                          </span>
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          href={"#"}
                          className="no-underline text-[14px] text-[#556575] gap-2 flex items-center"
                        >
                          <p className="mb-0">Delhi</p>
                          <span className="national_flag w-[15px] h-[15px] overflow-hidden flex items-center rounded-full">
                            {" "}
                            <Image
                              src={Us_flag}
                              width={15}
                              height={15}
                              alt="Picture of the author"
                              className="z-[2] object-cover h-full"
                            />
                          </span>
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          href={"#"}
                          className="no-underline text-[14px] text-[#556575] gap-2 flex items-center"
                        >
                          <p className="mb-0">Chennai</p>
                          <span className="national_flag w-[15px] h-[15px] overflow-hidden flex items-center rounded-full">
                            {" "}
                            <Image
                              src={Us_flag}
                              width={15}
                              height={15}
                              alt="Picture of the author"
                              className="z-[2] object-cover h-full"
                            />
                          </span>
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          href={"#"}
                          className="no-underline text-[14px] text-[#556575] gap-2 flex items-center"
                        >
                          <p className="mb-0">Kochi</p>
                          <span className="national_flag w-[15px] h-[15px] overflow-hidden flex items-center rounded-full">
                            {" "}
                            <Image
                              src={Us_flag}
                              width={15}
                              height={15}
                              alt="Picture of the author"
                              className="z-[2] object-cover h-full"
                            />
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                eventKey="8"
                className="md:col-span-1 xl:col-span-1"
              >
                <Accordion.Header>
                  <h6>SOCIAL</h6>
                </Accordion.Header>
                <Accordion.Body>
                  <div>
                    <ul className="p-0 flex gap-3 social_profile">
                      <li className="">
                        <Link
                          href={"#"}
                          className="no-underline text-[14px] text-[#556575]"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-facebook"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                          </svg>
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          href={"#"}
                          className="no-underline text-[14px] text-[#556575]"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-twitter-x"
                            viewBox="0 0 16 16"
                          >
                            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                          </svg>
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          href={"#"}
                          className="no-underline text-[14px] text-[#556575]"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-linkedin"
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                          </svg>
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          href={"#"}
                          className="no-underline text-[14px] text-[#556575]"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-youtube"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                          </svg>
                        </Link>
                      </li>
                    </ul>
                    <div className="usersExisting">
                      <h6 className="mb-4 mt-10">EXISTING USERS</h6>
                      <CustomButton outline label={`Login`} href={"#"} />
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
