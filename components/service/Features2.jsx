import { featureData4 } from "@/data/features";
import Image from "next/image";
import React from "react";

export default function Features2() {
  return (
    <div className="feature-area-1 space">
      <div className="container">
        <div className="title-container">
          <h2 className="text-center web-solutions-title">
            Soluciones web integrales para tu negocio
          </h2>
        </div>
        <div className="row gy-4 align-items-center justify-content-center">
          {featureData4.map((elm, i) => (
            <div key={i} className="col-xxl-6 col-xl-6">
              <div className="feature-card style-grid">
                <div className="feature-card-icon">
                  <Image width={55} height={55} src={elm.iconSrc} alt="icon" />
                </div>
                <div className="feature-card-details">
                  <h4 className="feature-card-title">{elm.title}</h4>
                  <p className="feature-card-text">{elm.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
