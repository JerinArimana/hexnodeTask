import React from "react";
import Image from "next/image";

import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <header className="hex_header fixed w-full top-0 left-0">
        <div className="hex_custom_container">
          <div className="hex_header__hex_top_nav">
            <ul className="hex_header__hex_top_nav_list flex justify-end gap-3 md:gap-3 text-[13px]">
              <li>What's new</li>
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
                  src="https://static.hexnode.com/img/events/hexcon24/hexcon24-logo.svg"
                  width={120}
                  height={25}
                  alt="Hexcon 24 Logo"
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
              <Offcanvas show={show} onHide={handleClose} responsive="lg">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <div className="nav__item flex justify-between">
                    <Nav>
                      <NavDropdown
                        title="Solutions"
                        id="offcanvas-nav-dropdown1"
                      >
                        <ul>
                          <NavDropdown.Item href="#action/3.1">
                            Action
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">
                            Another action
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">
                            Something
                          </NavDropdown.Item>

                          <NavDropdown.Item href="#action/3.4">
                            Separated link
                          </NavDropdown.Item>
                        </ul>
                      </NavDropdown>
                      <Nav.Link href="#link">Pricing</Nav.Link>
                      <Nav.Link href="#link">Customers</Nav.Link>
                      <NavDropdown
                        title="Partners"
                        id="offcanvas-nav-dropdown2"
                      >
                        <ul>
                          <NavDropdown.Item href="#action/3.1">
                            Action
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">
                            Another action
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">
                            Something
                          </NavDropdown.Item>

                          <NavDropdown.Item href="#action/3.4">
                            Separated link
                          </NavDropdown.Item>
                        </ul>
                      </NavDropdown>
                      <Nav.Link href="#link">Blog</Nav.Link>
                      <NavDropdown
                        title="Contact Us"
                        id="offcanvas-nav-dropdown3"
                      >
                        <ul>
                          <NavDropdown.Item href="#action/3.1">
                            Action
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">
                            Another action
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">
                            Something
                          </NavDropdown.Item>

                          <NavDropdown.Item href="#action/3.4">
                            Separated link
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
