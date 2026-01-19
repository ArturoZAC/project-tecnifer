/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTiktok,
  IconMessageChatbot,
} from "@tabler/icons-react";
import { BiMapPin, BiPhone } from "react-icons/bi";
import { RiMvAiLine } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { contactSchema, type ContactSchemaType } from "../../schemas/contact.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { Suspense, useState, useRef } from "react";
// import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "sonner";
import { getEnvs } from "../../helpers/getEnvs";
const ReCAPTCHA = React.lazy(() => import("react-google-recaptcha"));

const { VITE_API_URL } = getEnvs();

export default function ContactoSection() {
  const [isLoading, setIsLoading] = useState(false);
  const recaptchaRef = useRef<any>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactSchemaType>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactSchemaType) => {
    console.log({ data });

    if (!captchaToken) {
      toast.warning("Falta verificación de captcha");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch(`${VITE_API_URL}/enviar-contacto`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, captcha: captchaToken }),
      });

      if (!res.ok) throw new Error("Error al enviar el formulario");

      toast.success("Formulario enviado con éxito");
      reset();
      recaptchaRef.current?.reset();
      setCaptchaToken(null);
    } catch (error: any) {
      toast.error(error?.message || "Error al enviar el formulario");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 px-4">
      {/* <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4"> */}
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary mb-4">Ponte en Contacto</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos listos para ayudarte con instalación, mantenimiento o soporte eléctrico.
            Escríbenos y recibe atención personalizada.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Información de contacto y redes sociales */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-secondary mb-6">
                Información de Contacto
              </h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/80 p-3 rounded-full">
                    <RiMvAiLine className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium text-secondary">Email</p>
                    <p className="text-gray-600">tecnifer.info@gmail.com</p>
                    <p className="text-gray-600">proyectos@tecnifer.com.pe</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary/80 p-3 rounded-full">
                    <BiPhone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium text-secondary">Teléfono</p>
                    <p className="text-gray-600">+51 985 053 727</p>
                    <p className="text-gray-600">+51 966 597 948</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary/80 p-3 rounded-full">
                    <BiMapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium text-secondary">Ubicación</p>
                    <p className="text-gray-600">Independencia, Lima, Perú</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Redes sociales */}
            <div>
              <h3 className="text-2xl font-semibold text-secondary mb-6">Síguenos</h3>

              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/share/1CixsxYa8f/"
                  target="_blank"
                  className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <IconBrandFacebook className="w-6 h-6" />
                </a>

                <a
                  href="https://www.instagram.com/tecniferperu?igsh=cHVwdTN0dHhvcWp2"
                  target="_blank"
                  className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <IconBrandInstagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.tiktok.com/@tecni_ferreafanos?_r=1&_t=ZS-92r5eXFU070"
                  target="_blank"
                  className="bg-zinc-500 hover:bg-zinc-600 text-white p-3 rounded-full transition-colors duration-200"
                  aria-label="Tiktok"
                >
                  <IconBrandTiktok className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Mensaje adicional */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-semibold text-secondary mb-2">¿Prefieres llamarnos?</h3>
              <p className="text-gray-600 text-sm">
                Estamos disponibles de lunes a viernes de 9:00 AM a 6:00 PM. No dudes en
                contactarnos para cualquier consulta.
              </p>
            </div>
          </div>

          {/* Formulario de contacto */}
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-secondary mb-6">Envíanos un Mensaje</h3>

            <div className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="nombre"
                  // name="nombre"
                  required
                  // value={formData.nombre}
                  // onChange={handleInputChange}
                  {...register("fullName")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Tu nombre completo"
                />
              </div>
              {errors.fullName && (
                <p className="text-red-500 mt-1 text-sm">{errors.fullName.message}</p>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  // name="email"
                  required
                  // value={formData.email}
                  // onChange={handleInputChange}
                  {...register("email")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              {errors.email && <p className="text-red-500 mt-1 text-sm">{errors.email.message}</p>}

              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  // name="telefono"
                  // value={formData.telefono}
                  // onChange={handleInputChange}
                  {...register("phone")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="+51 999 999 999"
                />
              </div>
              {errors.phone && <p className="text-red-500 mt-1 text-sm">{errors.phone.message}</p>}

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  // name="mensaje"
                  required
                  rows={5}
                  // value={formData.mensaje}
                  // onChange={handleInputChange}
                  {...register("message")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Cuéntanos sobre tu proyecto o consulta..."
                />
              </div>
              {errors.message && (
                <p className="text-red-500 mt-1 text-sm">{errors.message.message}</p>
              )}

              {/* <div className="flex justify-center">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                  onChange={(token: any) => setCaptchaToken(token)}
                />
              </div> */}

              <div className="flex justify-center">
                <Suspense
                  fallback={
                    <div className="w-full h-24 bg-gray-200 animate-pulse rounded-lg"></div>
                  }
                >
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                    onChange={(token: any) => setCaptchaToken(token)}
                  />
                </Suspense>
              </div>

              <button
                type="submit"
                className="w-full fancy border-secondary border-2 hover:bg-secondary text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2 justify-center">
                    {/* Spinner */}
                    <div className="w-5 h-5 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin mx-auto"></div>
                  </div>
                ) : (
                  <span className="text group-hover:!ps-2 text-secondary ps-2 flex items-center gap-2 justify-center">
                    <IconMessageChatbot size={25} />
                    Enviar Mensaje
                  </span>
                )}
                {/* <span className="bottom-key-1 bg-white"></span> */}
                {/* <span className="bottom-key-2 bg-white"></span> */}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
