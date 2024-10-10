"use client";

import { useEffect, useState } from "react";
import SideMenu from "./component/SideMenu";
import MobileNav from "./component/MobileNav";
// import MobileMenuSocials from "./component/MobileMenuSocials";
import Nav from "./component/Nav";
import Image from "next/image";
import Link from "next/link";

export default function Header1() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      const menuWrapper = document.querySelector(".mobile-menu-wrapper");
      const menuContainer = document.querySelector(".mobile-menu-area");

      // Check if the click is outside of modal-content but inside modal-dialog
      if (
        menuWrapper &&
        menuContainer &&
        !menuContainer.contains(event.target) &&
        menuWrapper.contains(event.target)
      ) {
        // Your logic for handling the click outside modal-content
        setMobileMenuOpen(false);
      }
    };

    // Attach the event listener when the component mounts
    document.addEventListener("click", handleDocumentClick);

    // Detach the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 500);
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className={`mobile-menu-wrapper ${
          mobileMenuOpen ? "body-visible" : ""
        } `}
      >
        <div className="mobile-menu-area">
          <button
            className="menu-toggle"
            onClick={() => setMobileMenuOpen(false)}
          >
            <i className="fas fa-times"></i>
          </button>
          <div className="mobile-logo">
            <Link href="/">
              <div
                className="header-logo"
                style={{
                  display: "flex",
                  gap: "5px",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/assets/img/bws-banana-icon.png"
                  width={30}
                  height={30}
                  alt="Banana Web Solutions Logo"
                />
                <div className="logo-style">
                  BWS
                </div>
              </div>
            </Link>
          </div>
          <div className="mobile-menu">
            <ul>
              <MobileNav />
            </ul>
          </div>
          <div className="sidebar-wrap">
            <h6>Ciudad de México, MX</h6>
            <h6>By Fernando Rojas</h6>
          </div>
          <div className="sidebar-wrap">
            <h6>
              <a href="tel:+52798880123">+52 798 880 1234</a>
            </h6>
            <h6>
              <a href="mailto:contacto@bananawebsolutions.com">
                contacto
                <br />
                @bananawebsolutions.com
              </a>
            </h6>
          </div>
          {/* <div className="social-btn style3">
            <MobileMenuSocials />
          </div> */}
        </div>
      </div>

      {/*--============================== Header Area ==============================*/}

      <header className="nav-header  header-layout1">
        <div className={`sticky-wrapper ${isScrolled ? "header-sticky" : ""} `}>
          {/*-- Main Menu Area */}
          <div className="menu-area">
            <div className="container-fluid">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <Link
                    href="/"
                    className="header-logo"
                    style={{
                      display: "flex",
                      gap: "5px",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      src="/assets/img/bws-banana-icon.png"
                      width={30}
                      height={30}
                      alt="Banana Web Solutions Logo"
                    />
                    <div className="logo-style">
                      BWS
                    </div>
                  </Link>
                </div>
                <div className="col-auto ms-auto">
                  <nav className="main-menu d-none d-lg-inline-block">
                    <ul>
                      <Nav />
                    </ul>
                  </nav>
                  <div className="navbar-right d-inline-flex d-lg-none">
                    <button
                      type="button"
                      className="menu-toggle sidebar-btn"
                      onClick={() => setMobileMenuOpen(true)}
                    >
                      <span className="line"></span>
                      <span className="line"></span>
                      <span className="line"></span>
                    </button>
                  </div>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <div className="header-button">
                    <button
                      type="button"
                      className="sidebar-btn sideMenuToggler"
                      onClick={() => setIsOpen(true)}
                    >
                      <span className="line"></span>
                      <span className="line"></span>
                      <span className="line"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
