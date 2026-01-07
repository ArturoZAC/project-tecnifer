
import { motion } from "motion/react"
import Proyecto1 from "../../assets/proyectos/proyecto1.webp"
import Proyecto2 from "../../assets/proyectos/proyecto2.webp"
import Proyecto3 from "../../assets/proyectos/proyecto3.webp"
import Proyecto4 from "../../assets/proyectos/proyecto4.webp"
import Proyecto5 from "../../assets/proyectos/proyecto5.webp"
import Proyecto6 from "../../assets/proyectos/proyecto6.webp"

import { BsSend, BsWhatsapp } from "react-icons/bs"
import { scrollToElement } from "../../logic/scrollToElement"

interface Proyecto {
  nombre: string
  imagen: string
  descripcion: string
}


const proyectosData: Proyecto[] = [
  {
    nombre: "Residencia Moderna en Los Álamos",
    imagen: Proyecto1,
    descripcion: "Vivienda unifamiliar de estilo contemporáneo, diseñada con espacios abiertos, iluminación natural y acabados minimalistas."
  },
  {
    nombre: "Edificio Corporativo Nova",
    imagen: Proyecto2,
    descripcion: "Diseño arquitectónico para oficinas modernas, con un enfoque en eficiencia energética y funcionalidad empresarial."
  },
  {
    nombre: "Casa de Campo El Retiro",
    imagen: Proyecto3,
    descripcion: "Proyecto residencial rústico que combina materiales tradicionales con confort moderno, en armonía con el entorno natural."
  },
  {
    nombre: "Centro Cultural Horizonte",
    imagen: Proyecto4,
    descripcion: "Espacio público multifuncional orientado al arte y la comunidad, con una propuesta arquitectónica innovadora y accesible."
  },
  {
    nombre: "Departamento Urbano Vista 360",
    imagen: Proyecto5,
    descripcion: "Diseño de interiores y remodelación de un departamento en altura, optimizando vistas, confort y estilo."
  },
  {
    nombre: "Parque Lineal Río Verde",
    imagen: Proyecto6,
    descripcion: "Proyecto urbano que integra paisajismo, movilidad sostenible y espacios recreativos en la ribera de un río."
  }
]

export default function ProyectosSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {
        proyectosData.map((proyecto, index) => (
          <ProyectoCard proyecto={proyecto} key={index} />
        ))
      }
    </div>
  )
}

function ProyectoCard({ proyecto }: { proyecto: Proyecto }) {
  /*
  const handleContact = () => {
    // Aquí puedes agregar la lógica para el contacto
    window.open('mailto:contacto@empresa.com?subject=Consulta sobre ' + proyecto.nombre, '_blank');
  };
  */
  const handleWhatsApp = () => {
    const message = `Hola! Me interesa conocer más sobre el proyecto: ${proyecto.nombre}`;
    const whatsappUrl = `https://wa.me/51999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, rotateY: 100 }}
      whileInView={{ opacity: 1, rotateY: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md mx-auto bg-white rounded-b-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      {/* Imagen del proyecto */}
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src={proyecto.imagen}
          alt={proyecto.nombre}
        />
        <div className="absolute top-4 right-4">
          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Proyecto
          </span>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          {proyecto.nombre}
        </h2>

        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 h-16">
          {proyecto.descripcion}
        </p>

        {/* Botones de acción */}
        <div className="flex gap-3 border-t pt-4 border-gray-200">
          <button
            onClick={() => scrollToElement('#contacto', 100)}
            className="flex-1 bg-white group text-secondary fancy hover:bg-primary border-2 border-secondary font-medium px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <span className="top-key bg-white"></span>
            <span className="text group-hover:!ps-2 text-secondary ps-2 Poppins-Font flex items-center gap-2"><BsSend size={20} />Contacto</span>
            <span className="bottom-key-1 bg-white"></span>
            <span className="bottom-key-2 bg-white"></span>
          </button>

          <button
            onClick={handleWhatsApp}
            className="flex-1 text-white group border-2 hover:bg-green-600 border-green-600 fancy font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <span className="top-key bg-white"></span>
            <span className="text group-hover:!ps-2  text-green-600 ps-2 Poppins-Font flex items-center gap-2">
              <BsWhatsapp size={20} />
              WhatsApp
            </span>
            <span className="bottom-key-1 bg-white"></span>
            <span className="bottom-key-2 bg-white"></span>

          </button>
        </div>
      </div>
    </motion.div>
  );
}