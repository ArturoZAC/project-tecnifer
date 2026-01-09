import { motion } from "motion/react";
import { scrollToElement } from "../../logic/scrollToElement";
import { BsSend, BsWhatsapp } from "react-icons/bs";
import { enviarWhatsapp } from "../../helpers/enviarWhatsapp";

import service01 from "../../assets/services/service01-tec.webp";
import service02 from "../../assets/services/service02-tec.webp";
import service03 from "../../assets/services/service03-tec.webp";
import service04 from "../../assets/services/service04-tec.webp";
import service05 from "../../assets/services/service05-tec.webp";
import service06 from "../../assets/services/service06-tec.webp";
import service07 from "../../assets/services/servicio07-tec.webp";

export interface Servicio {
  // icon: IconType;
  image: string;
  nombre: string;
  descripcion: string;
}

// const serviciosData = [
//   {
//     image: service01,
//     nombre: "Fabricación de Tableros Eléctricos",
//     descripcion:
//       "Diseñamos y fabricamos tableros eléctricos a medida, garantizando seguridad, eficiencia y cumplimiento de normas técnicas.",
//   },
//   {
//     image: service02,
//     nombre: "Mantenimiento de Tableros Eléctricos",
//     descripcion:
//       "Realizamos mantenimiento preventivo y correctivo para asegurar el óptimo funcionamiento de tableros eléctricos.",
//   },
//   {
//     image: service03,
//     nombre: "Sistemas de Puesta a Tierra",
//     descripcion:
//       "Implementamos sistemas de puesta a tierra que protegen equipos, instalaciones y personas ante fallas eléctricas.",
//   },
//   {
//     image: service04,
//     nombre: "Instalación de Electrobombas",
//     descripcion:
//       "Instalamos electrobombas eficientes y confiables para aplicaciones industriales, comerciales y residenciales.",
//   },
//   {
//     image: service05,
//     nombre: "Mantenimiento de Electrobombas",
//     descripcion:
//       "Brindamos mantenimiento técnico especializado para prolongar la vida útil y el rendimiento de electrobombas.",
//   },
//   {
//     image: service06,
//     nombre: "Soporte Técnico Eléctrico",
//     descripcion:
//       "Ofrecemos soporte técnico eléctrico especializado con soluciones rápidas, seguras y adaptadas a cada proyecto.",
//   },
// ];

const serviciosData = [
  {
    image: service06,
    nombre: "Instalaciones Eléctricas",
    descripcion: `
      <p class="text-gray-600">
        Realizamos instalaciones eléctricas completas en proyectos residenciales, comerciales e
        industriales, aplicando normas técnicas y garantizando seguridad y eficiencia.
      </p>
    `,
  },
  {
    image: service01,
    nombre: "Fabricación de Tableros Eléctricos",
    descripcion: `
      <p class="text-gray-600">
        Diseñamos y fabricamos tableros eléctricos a medida, garantizando seguridad, eficiencia y
        cumplimiento de normas técnicas según la necesidad del proyecto.
      </p>
    `,
  },
  {
    image: service02,
    nombre: "Mantenimiento de Tableros Eléctricos",
    descripcion: `
      <p class="text-gray-600">
        Realizamos mantenimiento preventivo y correctivo para asegurar el óptimo funcionamiento de
        tableros eléctricos en instalaciones residenciales, comerciales e industriales.
      </p>
    `,
  },
  {
    image: service03,
    nombre: "Sistemas de Puesta a Tierra",
    descripcion: `
      <p class="text-gray-600">
        Implementamos sistemas de puesta a tierra que protegen equipos e instalaciones ante fallas
        eléctricas, cumpliendo normas de seguridad y continuidad operativa.
      </p>
    `,
  },
  {
    image: service04,
    nombre: "Instalación de Electrobombas",
    descripcion: `
      <p class="text-gray-600">
        Instalamos electrobombas eficientes y confiables para diferentes aplicaciones garantizando
        rendimiento, seguridad y durabilidad en el sistema hidráulico.
      </p>
    `,
  },
  {
    image: service05,
    nombre: "Mantenimiento de Electrobombas",
    descripcion: `
      <p class="text-gray-600">
        Brindamos mantenimiento técnico especializado para prolongar la vida útil de las
        electrobombas, prevenir fallas y asegurar un funcionamiento continuo.
      </p>
    `,
  },

  {
    image: service07,
    nombre: "Servicios Complementarios",
    descripcion: `
      <p class="mb-2 text-gray-600">
        Ofrecemos servicios complementarios para el desarrollo integral de obras e infraestructura:
      </p>
      <ul class="list-disc list-inside text-gray-600">
        <li>Aire acondicionado</li>
        <li>Gasfitería</li>
        <li>Drywall</li>
        <li>Pintura</li>
      </ul>
    `,
  },
];

export default function ServicioSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-8">
      {serviciosData.map((servicio, index) => (
        <ServicioCard servicio={servicio} numero={index} key={index} />
      ))}
    </div>
  );
}

function ServicioCard({ servicio /* numero */ }: { servicio: Servicio; numero: number }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5, transition: { duration: 0.1 } }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      {/* IMAGEN */}
      <img src={servicio.image} alt={servicio.nombre} className="w-full h-48 object-cover" />

      {/* CONTENIDO */}
      <div className="p-4 space-y-3">
        <h3 className="font-bold text-lg">{servicio.nombre}</h3>
        {/* <p className="text-sm text-gray-600">{servicio.descripcion}</p> */}

        <div
          className="text-sm space-y-1"
          dangerouslySetInnerHTML={{ __html: servicio.descripcion }}
        />

        <div className="flex gap-3 border-t pt-4 border-gray-200">
          <button
            onClick={() => scrollToElement("#contacto", 100)}
            className="flex-1 bg-white group text-secondary fancy hover:bg-primary border-2 border-secondary font-medium px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <span className="text flex items-center gap-2">
              <BsSend size={20} />
              Contacto
            </span>
          </button>

          <button
            onClick={() => enviarWhatsapp(`Hola! requiero de este servicio: ${servicio.nombre} 😁`)}
            className="flex-1 text-white group border-2 hover:bg-green-600 border-green-600 fancy font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <span className="text text-green-600 flex items-center gap-2">
              <BsWhatsapp size={20} />
              WhatsApp
            </span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
