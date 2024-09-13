"use client";
import Image from "next/image";
// import MobileMenuSocials from "./MobileMenuSocials";
import Link from "next/link";
import addGsap from "@/utils/addGsap";
import { useEffect } from "react";

export default function SideMenu({ isOpen, setIsOpen }) {
  useEffect(() => {
    addGsap();
  }, []);

  return (
    <div className={`sidemenu-wrapper  ${isOpen ? "show" : ""}`}>
      <div className="sidemenu-content">
        <button
          className="closeButton sideMenuCls"
          onClick={() => setIsOpen(false)}
        >
          <Image
            width={24}
            height={24}
            src="/assets/img/icon/close.svg"
            alt="icon"
          />
        </button>
        <div className="widget footer-widget">
          <div className="widget-about">
            <div className="footer-logo">
              <Link scroll={false} href="/">
                {/* <Image
                  width={86}
                  height={24}
                  src="/assets/img/logo-white.svg"
                  alt="Ovation"
                /> */}
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
                      style={{ filter: "invert(1)" }}
                    />
                    <Link className="logo-style" scroll={false} href="/" style={{ color: "white" }}>
                      {/* <Image */}
                      {/*   width={86} */}
                      {/*   height={24} */}
                      {/*   src="/assets/img/logo.svg" */}
                      {/*   alt="logo" */}
                      {/* /> */}
                      BWS
                    </Link>
                  </div>
              </Link>
            </div>
            <p className="about-text">
              Ofrecemos las mejores soluciones digitales para tu negocio.
            </p>
            <div className="sidebar-wrap">
              <h6>Ciudad de México, MX</h6>
              <h6>By Fernando Rojas</h6>
            </div>
            <div className="sidebar-wrap">
              <h6>
                <a href="tel:7298880123">+52 729 888 0123</a>
              </h6>
              <h6>
                <a href="mailto:frisk.agency@mail.com">contacto@bananawebsolutions.com</a>
              </h6>
            </div>
            {/* <div className="social-btn style2">
              <MobileMenuSocials />
            </div> */}
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <Link
            scroll={false}
            href="/contact"
            className="chat-btn gsap-magnetic flex-cta"
          >
          <Image width={60} height={60} src="/assets/img/contact/doodle-face.png" alt="Cara Sonriendo" className="face-doodle"  /> 
            Hablemos
          </Link>
        </div>
      </div>
    </div>
  );
}
