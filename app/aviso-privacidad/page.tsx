import Link from "next/link";

export default function PrivacyPage() {
    return (
        <>
            <div style={{ width: "100%" }}>
                <div
                    style={{
                        maxWidth: "1200px",
                        margin: "0 auto",
                        padding: "4rem 1rem",
                    }}
                >
                    <Link
                        href="/"
                        style={{
                            padding: "0.5rem 1rem",
                            backgroundColor: "black",
                            color: "white",
                            float: "right",
                        }}
                    >
                        Regresar a Inicio
                    </Link>
                    <h1>Aviso de privacidad integral</h1>

                    <p>
                        <b>Fernando Rojas</b> mejor conocido como{" "}
                        <b>Banana Web Solutions</b>, con domicilio en Atizapán
                        de Zaragoza, Adolfo López Mateos, Estado de México y
                        portal de internet bananawebsolutions.com, es el
                        responsable del uso y protección de sus datos
                        personales, y al respecto le informamos lo siguiente:
                    </p>
                    <h4>¿Para qué fines utilizaremos sus datos personales?</h4>
                    <p>
                        Los datos personales que recabamos de usted, los
                        utilizaremos para las siguientes finalidades que son
                        necesarias para el servicio que solicita: <br />-
                        Respuesta a mensajes del formulario de contacto
                    </p>
                    <h4>
                        ¿Qué datos personales utilizaremos para estos fines?
                    </h4>
                    <p>
                        Para llevar a cabo las finalidades descritas en el
                        presente aviso de privacidad, utilizaremos los
                        siguientes datos personales: <br />- Nombre y correo
                        electrónico
                    </p>
                    <h4>
                        ¿Cómo puede acceder, rectificar o cancelar sus datos
                        personales, u oponerse a su uso o ejercer la revocación
                        de consentimiento?
                    </h4>
                    <p>
                        Usted tiene derecho a conocer qué datos personales
                        tenemos de usted, para qué los utilizamos y las
                        condiciones del uso que les damos (Acceso). Asimismo, es
                        su derecho solicitar la corrección de su información
                        personal en caso de que esté desactualizada, sea
                        inexacta o incompleta (Rectificación); que la eliminemos
                        de nuestros registros o bases de datos cuando considere
                        que la misma no está siendo utilizada adecuadamente
                        (Cancelación); así como oponerse al uso de sus datos
                        personales para fines específicos (Oposición). Estos
                        derechos se conocen como derechos ARCO. Para el
                        ejercicio de cualquiera de los derechos ARCO, debe
                        enviar una petición vía correo electrónico a
                        contacto@bananawebsolutions.com y deberá contener:{" "}
                        <br />
                        - Nombre completo del titular. <br /> - Domicilio.{" "}
                        <br /> - Teléfono. <br /> - Correo electrónico usado en
                        este sitio web. <br /> - Copia de una identificación
                        oficial adjunta. <br /> - Asunto «Derechos ARCO»
                        Descripción el objeto del escrito, los cuales pueden ser
                        de manera enunciativa más no limitativa los siguientes:
                        Revocación del consentimiento para tratar sus datos
                        personales; y/o Notificación del uso indebido del
                        tratamiento de sus datos personales; y/o Ejercitar sus
                        Derechos ARCO, con una descripción clara y precisa de
                        los datos a Acceder, Rectificar, Cancelar o bien,
                        Oponerse. En caso de Rectificación de datos personales,
                        deberá indicar la modificación exacta y anexar la
                        documentación soporte; es importante en caso de
                        revocación del consentimiento, que tenga en cuenta que
                        no en todos los casos podremos atender su solicitud o
                        concluir el uso de forma inmediata, ya que es posible
                        que por alguna obligación legal requiramos seguir
                        tratando sus datos personales. Asimismo, usted deberá
                        considerar que para ciertos fines, la revocación de su
                        consentimiento implicará que no le podamos seguir
                        prestando el servicio que nos solicitó, o la conclusión
                        de su relación con nosotros.
                    </p>
                    <h4>
                        ¿En cuántos días le daremos respuesta a su solicitud?
                    </h4>
                    <p>15 días</p>
                </div>
            </div>
        </>
    );
}
