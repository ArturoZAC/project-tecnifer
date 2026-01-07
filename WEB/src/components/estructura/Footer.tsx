import Container from "../features/Container";
import LogoFooter from "../../assets/logoFooter.webp"
import { FaExternalLinkAlt, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BiMapPin, BiPhone } from "react-icons/bi";
import { RiMvAiLine } from "react-icons/ri";
import LogosPeru from "../../assets/logosPeru.webp"
import { scrollToElement } from "../../logic/scrollToElement";

export default function Footer() {

  const proyectos = [
    { nombre: "Residencia Moderna en Los Álamos", link: "#proyectos" },
    { nombre: "Edificio Corporativo Nova", link: "#proyectos" },
    { nombre: "Casa de Campo El Retiro", link: "#proyectos" },
    { nombre: "Parque Lineal Río Verde", link: "#proyectos" }
  ];

  const servicios = [
    { nombre: "Diseño Sostenible", link: "#servicios" },
    { nombre: "Modelado 3D y Renderizado", link: "#servicios" },
    { nombre: "Diseño de Interiores", link: "#servicios" },
    { nombre: "Diseño Arquitectónico", link: "#servicios" }
  ];

  const contactoInfo = {
    email: "contacto@empresa.com",
    telefono: "+51 999 999 999",
    direccion: "Lima, Perú"
  };

  const redesSociales = [
    { icon: FaFacebook, link: "#", color: "hover:text-blue-300" },
    { icon: BsTwitter, link: "#", color: "hover:text-blue-300" },
    { icon: FaInstagram, link: "#", color: "hover:text-lue-300" },
    { icon: FaLinkedin, link: "#", color: "hover:text-blue-300" }
  ];

  return (
    <>
      <div className='py-10 w-full bg-blue-900'>
        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <section className="w-full lg:col-span-1">
            <div className="mb-4">
              <div className="w-[150px] rounded-lg flex items-center justify-center mb-4">
                <img src={LogoFooter} alt="logo" className="w-full h-full" />
              </div>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed mb-6">
              Desarrollamos soluciones tecnológicas innovadoras para impulsar tu negocio hacia el futuro digital.
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
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </section>

          {/* Proyectos */}
          <section className="w-full">
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
                    <FaExternalLinkAlt size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {proyecto.nombre}
                  </button>
                </li>
              ))}
            </ul>
          </section>

          {/* Servicios */}
          <section className="w-full">
            <h4 className="text-white font-semibold text-lg mb-4 border-b border-blue-700 pb-2">
              Servicios
            </h4>
            <ul className="space-y-3">
              {servicios.map((servicio, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToElement(servicio.link, 100)}
                    className="text-blue-200 hover:text-white transition-colors duration-200 text-sm flex items-center group"
                  >
                    <FaExternalLinkAlt size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
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
                  <a
                    href={`mailto:${contactoInfo.email}`}
                    className="text-white text-sm hover:text-blue-300 transition-colors"
                  >
                    {contactoInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <BiPhone size={16} className="text-blue-300 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-blue-200 text-sm">Teléfono</p>
                  <a
                    href={`tel:${contactoInfo.telefono}`}
                    className="text-white text-sm hover:text-blue-300 transition-colors"
                  >
                    {contactoInfo.telefono}
                  </a>
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
              <span className="font-medium">Arquitecture</span>
              <span>© 2025 Todos los derechos reservados</span>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-6 text-sm text-blue-200">
              <a href="https://logosperu.com.pe/" className="text-white flex gap-2 items-center text-sm mb-4 md:mb-0 hover:text-white transition-colors duration-300">
                <span>Realizado por </span>
                <span> <img src={LogosPeru} alt="w" className="w-5" /> </span>
              </a>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
