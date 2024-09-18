import { plans } from "@/data/pricing";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Pricing() {
  return (
    <div className="space-bottom" id="mantenimiento-web">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-7 col-xl-6 col-lg-8">
            <div className="title-area text-center">
              <h2 className="sec-title">Planes de Mantenimiento Web</h2>
            </div>
          </div>
        </div>
        <div className="row gy-4 justify-content-center">
          {plans.map((elm, i) => (
            <div key={i} className="col-lg-6 col-md-6">
              <div className="pricing-card bg-smoke">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "1.5rem",
                  }}
                >
                  <Image
                    src="/assets/img/pricing/plan-basico-mantenimiento.webp"
                    width={350}
                    height={350}
                    alt="Caja de Presentación Mantenimiento Web"
                    className="img-maintenance-box"
                  />
                </div>
                <h4 className="pricing-card_title">{elm.title}</h4>
                <div className="price-card-wrap">
                  <h4 className="pricing-card_price">
                    <span className="currency">$</span>
                    {elm.price}
                    <span className="duration">/mes</span>
                  </h4>
                </div>
                <p>{elm.title}</p>
                <div className="checklist">
                  <ul>
                    {elm.features.map((elm2, i2) => (
                      <li key={i2}>
                        <i className="fas fa-check"></i> {elm2}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link scroll={false} href="#" className="btn">
                  <span className="link-effect">
                    <span className="effect-1">ESCOGER ESTE PLAN</span>
                    <span className="effect-1">ESCOGER ESTE PLAN</span>
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
