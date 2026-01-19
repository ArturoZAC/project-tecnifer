import Container from "../features/Container";
// import LogoFooter from "../../assets/logoFooter.webp";
import LogoFooter from "../../assets/LOGO-WHITE.png";
import { BiMapPin, BiPhone } from "react-icons/bi";
import { RiMvAiLine } from "react-icons/ri";
import LogosPeru from "../../assets/logosPeru.webp";
import { scrollToElement } from "../../logic/scrollToElement";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTiktok,
  IconLink,
} from "@tabler/icons-react";
import { useServicesStore } from "../../store/services.store";

export default function Footer() {
  const services = useServicesStore((state) => state.services);

  // const servicios = [
  //   { nombre: "Instalaciones Eléctricas", link: "#servicios" },
  //   { nombre: "Fabricación de Tableros Eléctricos", link: "#servicios" },
  //   { nombre: "Mantenimiento de Tableros Eléctricos", link: "#servicios" },
  //   { nombre: "Sistemas de Puesta a Tierra", link: "#servicios" },
  //   { nombre: "Instalación de Electrobombas", link: "#servicios" },
  //   { nombre: "Mantenimiento de Electrobombas", link: "#servicios" },
  //   { nombre: "Servicios Complementarios", link: "#servicios" },
  // ];

  const newServicesFormat = services?.map((service) => ({
    nombre: service.title,
    link: "#servicios",
  }));

  console.log({ newServicesFormat });

  const contactoInfo = {
    email: "tecnifer.info@gmail.com",
    email2: "proyectos@tecnifer.com.pe",
    telefono: "+51 985 053 727",
    telefono2: "+51 966 597 948",
    direccion: "Independencia, Lima, Perú",
  };

  const redesSociales = [
    {
      icon: IconBrandFacebook,
      link: "https://www.facebook.com/share/1CixsxYa8f",
      color: "hover:text-blue-300",
    },
    {
      icon: IconBrandInstagram,
      link: "https://www.instagram.com/tecniferperu?igsh=cHVwdTN0dHhvcWp2",
      color: "hover:text-lue-300",
    },
    {
      icon: IconBrandTiktok,
      link: "https://www.tiktok.com/@tecni_ferreafanos?_r=1&_t=ZS-92r5eXFU070",
      color: "hover:text-blue-300",
    },
  ];

  return (
    <>
      <div className="py-10 w-full bg-blue-900">
        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <section className="w-full lg:col-span-1">
            <div className="mb-4">
              <div className="w-full rounded-lg flex items-center justify-start mb-4">
                <img src={LogoFooter} alt="logo" className="w-full h-full max-w-56" />
              </div>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed mb-6">
              Nos enfocamos en atender tus requerimientos con un servicio personalizado, de calidad
              y orientado a resultados.
            </p>

            {/* Redes sociales */}
            <div className="flex space-x-3">
              {redesSociales.map((red, index) => {
                const IconComponent = red.icon;
                return (
                  <a
                    key={index}
                    href={red.link}
                    className={`text-blue-200 ${red.color} transition-colors duration-200 p-2 rounded-full hover:bg-blue-800`}
                    target="_blank"
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </section>

          {/* Proyectos */}
          {/* <section className="w-full">
            <h4 className="text-white font-semibold text-lg mb-4 border-b border-blue-700 pb-2">
              Proyectos
            </h4>
            <ul className="space-y-3">
              {proyectos.map((proyecto, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToElement(proyecto.link, 100)}
                    className="text-blue-200 hover:text-white transition-colors duration-200 text-sm flex items-center group"
                  >
                    <FaExternalLinkAlt
                      size={14}
                      className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    {proyecto.nombre}
                  </button>
                </li>
              ))}
            </ul>
          </section> */}

          {/* Servicios */}
          <section className="w-full">
            <h4 className="text-white font-semibold text-lg mb-4 border-b border-blue-700 pb-2">
              Servicios
            </h4>
            <ul className="space-y-2">
              {newServicesFormat.map((servicio, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToElement(servicio.link, 100)}
                    className="text-blue-200 hover:text-white transition-colors duration-200 text-sm flex items-center group"
                  >
                    {/* <FaExternalLinkAlt
                      size={14}
                      className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    /> */}
                    <IconLink className="mr-2" />
                    {servicio.nombre}
                  </button>
                </li>
              ))}
            </ul>
          </section>

          {/* Contacto */}
          <section className="w-full">
            <h4 className="text-white font-semibold text-lg mb-4 border-b border-blue-700 pb-2">
              Contacto
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <RiMvAiLine size={16} className="text-blue-300 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-blue-200 text-sm">Email</p>
                  <div className="flex flex-col">
                    <a
                      href={`mailto:${contactoInfo.email}`}
                      className="text-white text-sm hover:text-blue-300 transition-colors"
                    >
                      {contactoInfo.email}
                    </a>

                    <a
                      href={`mailto:${contactoInfo.email2}`}
                      className="text-white text-sm hover:text-blue-300 transition-colors"
                    >
                      {contactoInfo.email2}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <BiPhone size={16} className="text-blue-300 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-blue-200 text-sm">Teléfono</p>
                  <div className="flex flex-col">
                    <a
                      href={`tel:${contactoInfo.telefono}`}
                      className="text-white text-sm hover:text-blue-300 transition-colors"
                    >
                      {contactoInfo.telefono}
                    </a>
                    <a
                      href={`tel:${contactoInfo.telefono2}`}
                      className="text-white text-sm hover:text-blue-300 transition-colors"
                    >
                      {contactoInfo.telefono2}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <BiMapPin size={16} className="text-blue-300 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-blue-200 text-sm">Ubicación</p>
                  <p className="text-white text-sm">{contactoInfo.direccion}</p>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </div>

      {/* Copyright */}
      <div className="w-full py-4 bg-blue-950 text-white border-t border-blue-800">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm">
              <span className="font-medium">Tecnifer</span>
              <span>© 2026 Todos los derechos reservados</span>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-6 text-sm text-blue-200">
              <a
                href="https://logosperu.com.pe/"
                className="text-white flex gap-2 items-center text-sm mb-4 md:mb-0 hover:text-white transition-colors duration-300"
              >
                <span>Realizado por </span>
                <span>
                  {" "}
                  <img src={LogosPeru} alt="w" className="w-5" />{" "}
                </span>
              </a>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
