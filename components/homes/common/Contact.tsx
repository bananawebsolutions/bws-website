"use client";

import Image from "next/image";
import { sendMail } from "@/utils/send-mail";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const contactFormSchema = z.object({
  nombre: z.string().min(2, { message: "El nombre es requerido" }),
  email: z.string().email({ message: "El correo electrónico es inválido" }),
  website: z.string().url({ message: "Ingresa un link válido" }),
  mensaje: z.string().min(10, {
    message: "Por favor, escribe un mensaje de más de 10 caracteres",
  }),
});

export default function Contact() {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      nombre: "",
      email: "",
      website: "",
      mensaje: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
    const mailText = `Name: ${values.nombre}\n  Email: ${values.email}\n  Website: ${values.website}\n Message: ${values.mensaje}`;
    const response = await sendMail({
      email: values.email,
      subject: "Nuevo mensaje de contacto (BWS)",
      text: mailText,
    });
    if (response?.messageId) {
      toast.success("Formulario enviado, ¡Gracias por contactarnos!");
    } else {
      toast.error("Error enviando formulario, inténtalo de nuevo");
    }
  };

  return (
    <div className="contact-area-1 space shape-mockup-wrap" id="contacto">
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
                onSubmit={form.handleSubmit(onSubmit)}
                className="contact-form"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        required
                        type="text"
                        className="form-control style-border"
                        name="nombre"
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
                        name="mensaje"
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
