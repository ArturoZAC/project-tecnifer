// import { motion } from "motion/react";
import { useState } from "react";
import Proyecto1 from "../../assets/proyectos/trabajo01-tec.webp";
import Proyecto2 from "../../assets/proyectos/trabajo02-tec.webp";
import Proyecto3 from "../../assets/proyectos/trabajo03-tec.webp";
import Proyecto4 from "../../assets/proyectos/trabajo04-tec.webp";
import Proyecto5 from "../../assets/proyectos/trabajo05-tec.webp";
import Proyecto6 from "../../assets/proyectos/trabajo06-tec.webp";
import Proyecto7 from "../../assets/proyectos/add01.webp";
import Proyecto8 from "../../assets/proyectos/add02.webp";
import Proyecto9 from "../../assets/proyectos/add03.webp";
import Lightbox from "yet-another-react-lightbox";
import { IconCircleDashedCheck } from "@tabler/icons-react";

const images = [
  Proyecto1,
  Proyecto2,
  Proyecto3,
  Proyecto4,
  Proyecto5,
  Proyecto6,
  Proyecto7,
  Proyecto8,
  Proyecto9,
];

export default function ProyectosSection() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
            className="relative group cursor-pointer overflow-hidden rounded-xl"
          >
            <img
              src={img}
              alt={`Trabajo ${i + 1}`}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="flex items-center gap-2 p-4 translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                <IconCircleDashedCheck size={20} className="text-green-500" />
                <p className="text-green-500 font-semibold">Trabajo exitoso</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images.map((img) => ({ src: img }))}
      />
    </>
  );
}
