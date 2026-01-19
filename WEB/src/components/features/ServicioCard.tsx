import { motion } from "motion/react";
import { scrollToElement } from "../../logic/scrollToElement";
import { BsSend, BsWhatsapp } from "react-icons/bs";
import { enviarWhatsapp } from "../../helpers/enviarWhatsapp";
import { useServicesStore, type Service } from "../../store/services.store";
import { getEnvs } from "../../helpers/getEnvs";

export interface Servicio {
  // icon: IconType;
  id: number;
  title: string;
  description: string;
  image: string;
}

const normalizeHtml = (html: string) => {
  return (
    html
      // entidades
      .replace(/&nbsp;/g, " ")

      // elimina <p> vacíos
      .replace(/<p>\s*<\/p>/g, "")

      // elimina spans innecesarios
      .replace(/<\/?span[^>]*>/g, "")

      // aplana UL anidadas (3 niveles → 1)
      .replace(/<ul>\s*<li>\s*<ul>\s*<li>\s*<ul>/g, "<ul>")
      .replace(/<\/ul>\s*<\/li>\s*<\/ul>\s*<\/li>\s*<\/ul>/g, "</ul>")

      // asegura que los UL tengan separación
      .replace(/<ul>/g, '<ul class="list-disc pl-5 mt-2">')
      .replace(/<li>/g, '<li class="mb-1">')
  );
};

export default function ServicioSection() {
  const servicesData = useServicesStore((state) => state.services);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-8">
      {servicesData?.map((servicio, index) => (
        <ServicioCard servicio={servicio} key={index} />
      ))}
    </div>
  );
}

const { VITE_API_URL_BASE } = getEnvs();

function ServicioCard({ servicio }: { servicio: Service }) {
  const fullUrlImage = `${VITE_API_URL_BASE}/${servicio.image}`;

  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5, transition: { duration: 0.1 } }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      {/* IMAGEN */}
      <img src={fullUrlImage} alt={servicio.title} className="w-full h-48 object-cover" />

      {/* CONTENIDO */}
      <div className="p-4 flex-col flex gap-y-3">
        <h3 className="font-bold text-lg">{servicio.title}</h3>

        {/* <div
          className="text-sm space-y-1"
          dangerouslySetInnerHTML={{ __html: servicio.description }}
        /> */}

        <div
          className="
    text-gray-700 text-[13.5px]

    [&_p]:mb-2

    [&_ul]:list-disc
    [&_ul]:pl-6
    [&_ul]:mb-1

    [&_p+ul]:mt-1 

    [&_li]:mb-1
  "
          dangerouslySetInnerHTML={{ __html: normalizeHtml(servicio.description) }}
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
            onClick={() => enviarWhatsapp(`Hola! requiero de este servicio: ${servicio.title} 😁`)}
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
