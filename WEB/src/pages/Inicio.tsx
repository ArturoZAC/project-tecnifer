import Container from "../components/features/Container";
import SwiperBanner from "../components/features/SwiperBanner";

import AsideNosotros from "../assets/images/asideNosotros.webp"
// import Edificios from "../assets/images/edificios.png"

import { motion } from "motion/react";
import ServicioSection from "../components/features/ServicioCard";
import ProyectosSection from "../components/features/ProyectosSection";
import ContactoSection from "../components/features/ContactoSection";
import { scrollToElement } from "../logic/scrollToElement";

export default function Inicio() {



  return (
    <div className="overflow-hidden">
      <SwiperBanner />
      <section className="w-full bg-slate-50" id="nosotros">
        <Container className="py-10 space-y-6">
          <section className="flex gap-4 items-center lg:flex-row flex-col">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8 lg:w-1/2 w-full"
            >
              <h2 className="text-4xl font-bold text-black">
                ¿Porque <span className="text-primary">elegirnos?</span>
              </h2>
              <div className="space-y-3">
                <p >
                  En <strong>Arquitecture</strong>, diseñamos espacios que trascienden lo estético: creamos soluciones arquitectónicas que inspiran, funcionan y perduran en el tiempo.
                </p>
                <p >
                  Somos un equipo apasionado de arquitectos, diseñadores y profesionales técnicos con una visión clara: transformar ideas en estructuras que mejoren la calidad de vida de quienes las habitan. Desde nuestra fundación en 2020, hemos trabajado en proyectos residenciales, comerciales, corporativos y urbanos, destacándonos por nuestra atención al detalle, compromiso con la sostenibilidad y enfoque humano en cada diseño.
                </p>
                <p >
                  Creemos que la arquitectura no solo moldea ciudades, sino también historias. Por eso, colaboramos de cerca con nuestros clientes en cada etapa del proceso, entendiendo sus necesidades y convirtiéndolas en espacios únicos y funcionales, donde la forma y la función se encuentran en equilibrio
                </p>
              </div>

              {/*
              <h2 className="text-4xl font-bold text-black">
                Nos <span className="text-primary">respalda</span>
              </h2>

               <div className="flex gap-4">
                <div className="w-full space-y-3">
                  <p className="text-4xl font-bold text-secondary">+ 25</p>
                  <p className="text-xl">Proyectos</p>
                </div>
                <div className="w-full space-y-3">
                  <p className="text-4xl font-bold text-secondary">+ 3</p>
                  <p className="text-xl">Años de experiencia</p>
                </div>
              </div> */}

              {/* <div className="w-full flex gap-3 lg:flex-row flex-col">
                <div className="w-full lg:w-1/2 p-3 rounded-xl space-y-3">
                  <h3 className="font-bold text-3xl">Visión</h3>
                  <p>
                    Diseñar y construir espacios únicos que combinen estética, funcionalidad y sostenibilidad, superando las expectativas de nuestros clientes y mejorando su calidad de vida.
                  </p>
                </div>

                <div className="w-full lg:w-1/2 rounded-xl space-y-3">
                  <h3>Misión</h3>
                  <p>
                    Ser reconocidos como la empresa de arquitectura líder en diseño integral y experiencia del cliente, transformando sueños en espacios habitables que inspiren y perduren.
                  </p>
                </div>
              </div> */}

            </motion.div>
            <div className="lg:w-1/2 w-full">
              <motion.img
                src={AsideNosotros}
                alt="AsideNosotros"
                className="w-full rounded-2xl"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </section>
        </Container>

        <section className="bg-secondary w-full py-8 text-white">
          <Container className="flex flex-col gap-9 items-center">
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-center">Transformamos tus ideas en espacios funcionales, estéticos y sostenibles. Cada proyecto es una solución personalizada que refleja tu estilo y necesidad, con diseño de calidad y visión arquitectónica.</p>
            <button onClick={() => scrollToElement('#proyectos', 100)} className="px-4 py-2 group hover:bg-primary bg-transparent fancy hover:before:bg-white before:bg-white text-white text-sm border-2 border-white  hover:text-white duration-300 transition-colors max-lg:text-sm">
              <span className="top-key bg-secondary group-hover:bg-secondary"></span>
              <span className="text text-white Poppins-Font ps-8">Contactar</span>
              <span className="bottom-key-1 bg-secondary"></span>
              <span className="bottom-key-2 bg-secondary"></span>
            </button>
          </Container>
        </section>

        <section className="bg-slate-50 py-9" id="servicios">
          <Container className="w-full">
            <motion.h2
              className="text-4xl font-bold text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Nosotros contamos con los <span className="text-primary">mejores servicios</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mt-3 mb-16"
            >
              Diseñamos espacios, construimos sueños.
            </motion.p>

            <ServicioSection />
          </Container>
        </section>

        <section className="w-full py-5 bg-primary text-white" >
          <Container className="flex flex-col items-center gap-3">
            <p className="text-xl md:text-2xl lg:text-3xl text-center font-medium">Contáctanos hoy y cuéntanos tu idea. Nuestro equipo de arquitectos está listo para brindarte una atención personalizada y soluciones creativas a la medida de tus necesidades.</p>
            <p className="text-center my-2">¡Tu próximo proyecto comienza con una conversación!</p>
            <button onClick={() => scrollToElement("#contacto", 100)} className="px-4 py-2 w-fit fancy text-black hover:bg-secondary hover:text-white hover:before:bg-white border-2 border-white before:bg-white duration-300 transition-colors">
              <span className="top-key bg-primary group-hover:bg-secondary"></span>
              <span className="text text-white Poppins-Font ps-8">Contáctanos</span>
              <span className="bottom-key-1 bg-primary"></span>
              <span className="bottom-key-2 bg-primary"></span>
            </button>
          </Container>
        </section>

        <section className="w-full py-9 bg-slate-50" id="proyectos">
          <Container className="space-y-8">
            <h2 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl">Proyectos que <span className="text-primary">hemos diseñado</span></h2>

            <ProyectosSection />
          </Container>
        </section>

        <section className="w-full bg-slate-50 text-black" id="contacto">
          <Container>

            <section className="flex lg:flex-row flex-col gap-5">
              <ContactoSection />
            </section>
          </Container>
        </section>

      </section>
    </div>
  )
}
