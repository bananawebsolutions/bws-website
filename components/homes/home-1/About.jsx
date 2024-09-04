import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <div className="about-area-1 space bg-theme shape-mockup-wrap">
      <div
        className="about-img-1-1 shape-mockup wow animated"
        style={{
          top: "-200px",
          left: "0px",
          bottom: "140px",
          visibility: "visible",
        }}
        data-left="0"
        data-top="-200px"
        data-bottom="140px"
        data-wow-duration="1.5s"
        data-wow-delay="0.1s"
      >
        <Image
          width={838}
          height={730}
          src="/assets/img/normal/macbook2.png"
          alt="Macbook with hero image with a banana"
        />
        <div className="doodle-container">
          <Image
            width={250}
            height={250}
            src="/assets/img/normal/doodle-arrow.png"
            alt="dodle of an arrow"
          />
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center justify-content-end">
          <div className="col-lg-6">
            <div>
              <div className="about-content-wrap ">
                <div className="title-area mb-0">
                  <h2 className="sec-title">
                    Transforma tu prescencia online con soluciones a la medida
                  </h2>
                  <p className="sec-text mt-35">
                    En{" "}
                    <span className="bold-text">
                      <i>Banana Web Solutions</i>
                    </span>{" "}
                    somos expertos en transformar tu visión en realidad digital.
                  </p>
                  <p className="sec-text mt-30">
                    Con años de experiencia en el desarrollo web y una pasión
                    por la innovación, nos dedicamos a crear soluciones web que
                    no solo cumplen con tus expectativas, sino que las superan.
                    Cada proyecto es una oportunidad para aportar creatividad,
                    tecnología y resultados medibles.
                  </p>
                  <div className="btn-wrap mt-50">
                    <Link scroll={false} href="/about" className="link-btn">
                      <span className="link-effect">
                        <span className="effect-1">
                          HABLEMOS DE TU PROYECTO
                        </span>
                        <span className="effect-1">
                          HABLEMOS DE TU PROYECTO
                        </span>
                      </span>
                      <Image
                        width={13}
                        height={13}
                        src="/assets/img/icon/arrow-left-top.svg"
                        alt="icon"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
