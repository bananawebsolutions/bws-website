import { plans } from "../../../data/pricing";
import Link from "next/link";
import Image from "next/image";

export default function Pricing() {
    return (
        <div className="space-bottom" id="mantenimiento-web">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xxl-7 col-xl-6 col-lg-8">
                        <div className="title-area text-center">
                            <h2 className="sec-title">
                                Planes de Mantenimiento Web
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row gy-4 justify-content-center">
                    {plans.map((elm, i) => (
                        <div key={i} className="col-xl-6 col-xxl-4 col-md-10">
                            <div
                                className={`pricing-card bg-smoke ${
                                    elm.morePopular ? "position-relative" : ""
                                }`}
                                style={{
                                    borderColor: elm.morePopular
                                        ? "#fade36"
                                        : "transparent",
                                    borderWidth: elm.morePopular
                                        ? "3px"
                                        : "0px",
                                    borderStyle: elm.morePopular
                                        ? "solid"
                                        : "none",
                                }}
                            >
                                {elm.morePopular && (
                                    <span className="popular-tag">
                                        Más popular
                                    </span>
                                )}
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        marginBottom: "1.5rem",
                                    }}
                                >
                                    <Image
                                        src={elm.img}
                                        width={350}
                                        height={350}
                                        alt="Caja de Presentación Mantenimiento Web"
                                        className="img-maintenance-box"
                                        style={{
                                            width: "auto",
                                            height: "auto",
                                        }}
                                    />
                                </div>
                                <h4 className="pricing-card_title">
                                    {elm.title}
                                </h4>
                                <div className="price-card-wrap">
                                    <h4 className="pricing-card_price">
                                        <span className="text-before-price">
                                            Desde{" "}
                                        </span>
                                        <span className="currency">$</span>
                                        {elm.price}*
                                        <span className="duration">
                                            /mes (MXN)
                                        </span>
                                    </h4>
                                </div>
                                <p>{elm.title}</p>
                                <div className="checklist">
                                    <ul>
                                        {elm.features.map((elm2, i2) => (
                                            <li key={i2}>
                                                <i className="fas fa-check"></i>{" "}
                                                {elm2}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <p className="info-price-text">
                                        <i>
                                            *El precio puede variar dependiendo
                                            de la complejidad del proyecto.
                                            Precio ya incluye IVA.
                                        </i>
                                    </p>
                                </div>
                                <Link
                                    scroll={true}
                                    href={elm.link}
                                    className="btn"
                                >
                                    <span className="link-effect">
                                        <span className="effect-1">
                                            SOLICITAR INFORMACIÓN
                                        </span>
                                        <span className="effect-1">
                                            SOLICITAR INFORMACIÓN
                                        </span>
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
