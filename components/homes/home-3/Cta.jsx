"use client";

import addGsap from "@/utils/addGsap";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

export default function Cta() {
  useEffect(() => {
    addGsap();
  }, []);

  return (
    <div className="cta-area-1 overflow-hidden bg-title space text-xl-start text-center">
      <div className="container">
        <div className="row justify-content-xl-between justify-content-center align-items-center">
          <div className="col-xl-8 col-lg-10">
            <div className="title-area mb-xl-0 mb-60">
              <h2 className="sec-title text-white">Trabajemos Juntos</h2>
              <p className="sec-text mt-30 mb-n2 text-white">
                Transformamos tu visión en una realidad digital.
                <br /> Tu proyecto estará en las mejores manos.
              </p>
            </div>
          </div>
          <div className="col-xl-auto">
            <Link
              scroll={true}
              className="circle-btn btn bg-theme text-title gsap-magnetic flex-cta"
              href="/#contacto"
            >
              <Image
                width={60}
                height={60}
                src="/assets/img/contact/doodle-face.png"
                alt="Cara Sonriendo"
                className="face-doodle"
              />
              <span className="link-effect">
                <span className="effect-1">HABLEMOS</span>
                <span className="effect-1">HABLEMOS</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
