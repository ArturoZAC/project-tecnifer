import type { IconType } from "react-icons"
import { FaDraftingCompass, FaBuilding, FaCubes, FaSketch, FaHardHat, FaTree } from "react-icons/fa"
import { motion } from "motion/react"

export interface Servicio {
  icon: IconType
  nombre: string
  descripcion: string
}

const serviciosData = [
  {
    icon: FaDraftingCompass,
    nombre: "Diseño Arquitectónico",
    descripcion: "Creamos diseños innovadores, funcionales y personalizados para todo tipo de espacios."
  },
  {
    icon: FaBuilding,
    nombre: "Diseño de Interiores",
    descripcion: "Transformamos interiores en ambientes únicos que combinan estética y comodidad."
  },
  {
    icon: FaCubes,
    nombre: "Modelado 3D y Renderizado",
    descripcion: "Visualiza tu proyecto antes de construirlo con renders realistas y recorridos virtuales."
  },
  {
    icon: FaSketch,
    nombre: "Planificación y Anteproyecto",
    descripcion: "Desarrollamos propuestas preliminares con visión técnica y creativa para tomar decisiones acertadas."
  },
  {
    icon: FaHardHat,
    nombre: "Supervisión de Obra",
    descripcion: "Aseguramos que la ejecución se realice según los planos, tiempos y calidad establecidos."
  },
  {
    icon: FaTree,
    nombre: "Diseño Sostenible",
    descripcion: "Aplicamos soluciones ecológicas y eficientes para construir de manera responsable con el entorno."
  }
]

export default function ServicioSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-8">
      {
        serviciosData.map((servicio, index) => (
          <ServicioCard servicio={servicio} numero={index} key={index} />
        ))
      }
    </div>
  )
}

function ServicioCard({ servicio, numero }: { servicio: Servicio, numero: number }) {
  return (
    <motion.div 
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5, transition: {
        duration: 0.1
      } }}
      className="shadow-lg w-full space-y-2 cursor-default bg-white duration-300 transition-all"
    >
      <div className={`w-14 h-14 flex justify-center items-center ${numero % 2 === 0 ? 'bg-secondary' : 'bg-primary'} rounded-br-xl text-white`}>
        <servicio.icon size={28} />
      </div>
      <div className="space-y-2 p-3">
        <h3 className="font-bold text-lg">{servicio.nombre}</h3>
        <p>{servicio.descripcion}</p>
      </div>
    </motion.div>
  )
}