"use client";

import Image from "next/image";
import Link from "next/link";
import HeroAnimation from "./HeroAnimation";

export default function Hero() {
  return (
    <div className="hero-wrapper hero-1 hero-position" id="hero">
      <div className="hero-animation-banana">
        <HeroAnimation />
      </div>
      <div className="container">
        <div className="hero-style1">
          <div className="row">
            <span className="banana-logo-mobile">
              <Image
                src="/assets/img/hero/bws-logo.png"
                alt="Banana Web Solutions Logo"
                width={150}
                height={150}
              />
            </span>
            <div className="col-lg-12">
              {/* <h1 className="hero-title wow img-custom-anim-left animated">
                Next Generation
              </h1> */}
              <div className="banana-logo-inline">
                <h1 className="hero-title wow animated">Banana</h1>
                <span className="banana-logo">
                  <Image
                    src="/assets/img/hero/bws-logo.png"
                    alt="Banana Web Solutions Logo"
                    width={200}
                    height={200}
                  />
                </span>
              </div>
              {/* <h1 className="hero-title text-lg-end wow img-custom-anim-right animated">
                Digital Agency
              </h1> */}
              <h1 className="hero-title text-lg-end wow animated">
                Web Solutions
              </h1>
            </div>
            <div className="col-lg-6 offset-lg-6">
              <p className="hero-text wow animated">
                Nos dedicamos a ofrecer soluciones web personalizadas que se
                alinean perfectamente con tus objetivos y necesidades para hacer
                crecer tu negocio
              </p>
              <div className="btn-group fade_right">
                <Link
                  scroll={true}
                  href="/#servicios"
                  className="btn wow animated"
                >
                  <span className="link-effect">
                    <span className="effect-1">NUESTROS SERVICIOS</span>
                    <span className="effect-1">NUESTROS SERVICIOS</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="hero-year-tag wow animated">
            <Image
              width={40}
              height={40}
              src="/assets/img/icon/worldwide.svg"
              alt="img"
            />
            <h6>By Fernando Rojas, desde México</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
