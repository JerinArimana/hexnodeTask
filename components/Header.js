import React, { useState, useEffect } from "react";
import Image from "next/image";

import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import hexcon24_logo from "../public/images/hexcon24-logo.svg";
import hexcon24_logoWhite from "../public/images/hexcon24-logoWhite.png";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`hex_header fixed w-full top-0 left-0 z-50 ${
          isActive ? "active" : ""
        }`}
      >
        <div className="hex_custom_container">
          <div className="hex_header__hex_top_nav">
            <ul className="hex_header__hex_top_nav_list flex justify-end gap-3 md:gap-3 text-[13px]">
              <li>{`What's new`}</li>
              <li className="demo-nav">
                <Dropdown>
                  <Dropdown.Toggle
                    variant="success"
                    id="dropdown-basic"
                    className="text-[32px]"
                  >
                    Demo
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li>Contact Sales</li>
              <li>
                <span></span>English
              </li>
            </ul>
          </div>

          <Navbar expand="lg" className="">
            <>
              <Navbar.Brand href="#home">
                <Image
                  src={hexcon24_logo}
                  width={120}
                  height={25}
                  alt="Hexcon 24 Logo"
                  className="blackLogo"
                />
                <Image
                  src={hexcon24_logoWhite}
                  width={120}
                  height={25}
                  alt="Hexcon 24 Logo"
                  className="whiteLogo"
                />
              </Navbar.Brand>

              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                onClick={handleShow}
              />

              {/* <Navbar.Collapse
                id="basic-navbar-nav"
                className="d-none d-lg-block"
              ></Navbar.Collapse> */}

              {/* Offcanvas for mobile view */}
              <Offcanvas
                show={show}
                onHide={handleClose}
                responsive="lg"
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <div className="nav__item flex justify-between ">
                    <Nav>
                      <NavDropdown
                        title="Solutions"
                        id="offcanvas-nav-dropdown1"
                      >
                        <ul className="menu_count lg:w-10/12 grid grid-cols-1 lg:grid-cols-3 gap-3 text-left p-0">
                          <NavDropdown.Item
                            href="#action/3.1"
                            className="max-w-[333px] px-0 hover:border-l-4 border-indigo-500 "
                          >
                            <h6 className="text-[16px] lg:font-bold">
                              Hexnode UEM
                            </h6>
                            <p className="hidden lg:block text-[13px] font-normal text-[#020a19]">
                              Centralize management of mobiles, PCs and
                              wearables in the enterprise
                            </p>
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            href="#action/3.1"
                            className="max-w-[333px] px-0 hover:border-l-4 border-indigo-500"
                          >
                            <h6 className="text-[16px] lg:font-bold">
                              Hexnode UEM
                            </h6>
                            <p className="hidden lg:block text-[13px] font-normal text-[#020a19]">
                              Centralize management of mobiles, PCs and
                              wearables in the enterprise
                            </p>
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            href="#action/3.1"
                            className="max-w-[333px] px-0 hover:border-l-4 border-indigo-500"
                          >
                            <h6 className="text-[16px] lg:font-bold">
                              Hexnode UEM
                            </h6>
                            <p className="hidden lg:block text-[13px] font-normal text-[#020a19]">
                              Centralize management of mobiles, PCs and
                              wearables in the enterprise
                            </p>
                          </NavDropdown.Item>

                          <NavDropdown.Item
                            href="#action/3.1"
                            className="max-w-[333px] px-0 hover:border-l-4 border-indigo-500"
                          >
                            <h6 className="text-[16px] lg:font-bold">
                              Hexnode UEM
                            </h6>
                            <p className="hidden lg:block text-[13px] font-normal text-[#020a19]">
                              Centralize management of mobiles, PCs and
                              wearables in the enterprise
                            </p>
                          </NavDropdown.Item>
                        </ul>
                      </NavDropdown>
                      <Nav.Link href="#link">Pricing</Nav.Link>
                      <Nav.Link href="#link">Customers</Nav.Link>
                      <NavDropdown
                        title="Partners"
                        id="offcanvas-nav-dropdown2"
                      >
                        <ul className="menu_count lg:w-10/12 grid grid-cols-1 lg:grid-cols-3 gap-3 text-left p-0">
                          <NavDropdown.Item
                            href="#action/3.1"
                            className="max-w-[333px] px-0 hover:border-l-4 border-indigo-500 "
                          >
                            <h6 className="text-[16px] lg:font-bold">
                              Hexnode Partner Programs
                            </h6>
                            <p className="hidden lg:block text-[13px] font-normal text-[#020a19]">
                              Explore every partnership program offered by
                              Hexnode
                            </p>
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            href="#action/3.1"
                            className="max-w-[333px] px-0 hover:border-l-4 border-indigo-500"
                          >
                            <h6 className="text-[16px] lg:font-bold">
                              Reseller Partnership
                            </h6>
                            <p className="hidden lg:block text-[13px] font-normal text-[#020a19]">
                              Deliver the world-class mobile & PC security
                              solution to your clients
                            </p>
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            href="#action/3.1"
                            className="max-w-[333px] px-0 hover:border-l-4 border-indigo-500"
                          >
                            <h6 className="text-[16px] lg:font-bold">
                              MSP Partnership
                            </h6>
                            <p className="hidden lg:block text-[13px] font-normal text-[#020a19]">
                              Help your clients scale up their endpoint
                              management efforts
                            </p>
                          </NavDropdown.Item>

                          <NavDropdown.Item
                            href="#action/3.1"
                            className="max-w-[333px] px-0 hover:border-l-4 border-indigo-500"
                          >
                            <h6 className="text-[16px] lg:font-bold">
                              OEM Partnership
                            </h6>
                            <p className="hidden lg:block text-[13px] font-normal text-[#020a19]">
                              Integrate with Hexnode for the complete management
                              of your devices
                            </p>
                          </NavDropdown.Item>
                        </ul>
                      </NavDropdown>
                      <Nav.Link href="#link">Blog</Nav.Link>
                      <NavDropdown
                        title="Contact Us"
                        id="offcanvas-nav-dropdown3"
                      >
                        <ul className="menu_count lg:w-10/12 grid grid-cols-1 lg:grid-cols-3 gap-3 text-left p-0">
                          <NavDropdown.Item
                            href="#action/3.1"
                            className="max-w-[333px] px-0 hover:border-l-4 border-indigo-500 "
                          >
                            <h6 className="text-[16px] lg:font-bold">
                              Talk to Sales/Support
                            </h6>
                            <p className="hidden lg:block text-[13px] font-normal text-[#020a19]">
                              Request a call back from the sales/tech support
                              team
                            </p>
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            href="#action/3.1"
                            className="max-w-[333px] px-0 hover:border-l-4 border-indigo-500"
                          >
                            <h6 className="text-[16px] lg:font-bold">
                              Schedule a Demo
                            </h6>
                            <p className="hidden lg:block text-[13px] font-normal text-[#020a19]">
                              Request a detailed product walkthrough from the
                              support
                            </p>
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            href="#action/3.1"
                            className="max-w-[333px] px-0 hover:border-l-4 border-indigo-500"
                          >
                            <h6 className="text-[16px] lg:font-bold">
                              Get a Quote
                            </h6>
                            <p className="hidden lg:block text-[13px] font-normal text-[#020a19]">
                              Request the pricing details of any available plans
                            </p>
                          </NavDropdown.Item>

                          <NavDropdown.Item
                            href="#action/3.1"
                            className="max-w-[333px] px-0 hover:border-l-4 border-indigo-500"
                          >
                            <h6 className="text-[16px] lg:font-bold">
                              Raise a Ticket
                            </h6>
                            <p className="hidden lg:block text-[13px] font-normal text-[#020a19]">
                              Raise a ticket for any sales and support inquiry
                            </p>
                          </NavDropdown.Item>
                        </ul>
                      </NavDropdown>
                    </Nav>

                    <button className="hex_header__trialBtn py-2 px-7 rounded-md">
                      14 Day Free Trial
                    </button>
                  </div>
                </Offcanvas.Body>
              </Offcanvas>
            </>
          </Navbar>
        </div>
      </header>
    </>
  );
};

export default Header;
