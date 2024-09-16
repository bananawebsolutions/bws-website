"use client";
import Image from "next/image";

export default function Contact() {
  return ( <div className="contact-area-1 space shape-mockup-wrap" id="contacto">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6">
            <div className="contact-form-wrap">
              <div className="title-area mb-30">
                <div className="doodle-title-container">
                  <div>
                    <Image
                      src="/assets/img/contact/doodle-arrow-2.png"
                      width={180}
                      height={180}
                      alt="Contact Doodle"
                      className="doodle-contact"
                    />
                  </div>
                  <h2 className="sec-title">¿Qué Proyecto Tienes en Mente?</h2>
                </div>
                <p>
                  Estamos emocionados de conocer la visión de tu proyecto,
                  tenemos muchas ganas de comenzar a trabajar contigo.
                </p>
              </div>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="contact-form ajax-contact"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        required
                        type="text"
                        className="form-control style-border"
                        name="name"
                        id="name"
                        placeholder="Nombre*"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        required
                        type="text"
                        className="form-control style-border"
                        name="email"
                        id="email"
                        placeholder="Correo electrónico*"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input
                        required
                        type="text"
                        className="form-control style-border"
                        name="website"
                        id="website"
                        placeholder="Link de tu sitio web"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <textarea
                        required
                        name="message"
                        placeholder="¿Cómo podemos ayudarte?*"
                        id="contactForm"
                        className="form-control style-border"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="form-btn col-12">
                  <button type="submit" className="btn mt-20">
                    <span className="link-effect">
                      <span className="effect-1">ENVIAR MENSAJE</span>
                      <span className="effect-1">ENVIAR MENSAJE</span>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
