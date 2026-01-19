import Container from "../components/features/Container";
import SwiperBanner from "../components/features/SwiperBanner";

import AsideNosotros from "../assets/pruebaNosotros.webp";
// import AsideNosotros from "../assets/images/asideNosotros.webp";
// import Edificios from "../assets/images/edificios.png"

import { motion } from "motion/react";
import ServicioSection from "../components/features/ServicioCard";
import ProyectosSection from "../components/features/ProyectosSection";
import ContactoSection from "../components/features/ContactoSection";
import { scrollToElement } from "../logic/scrollToElement";
import { IconEye, IconTargetArrow } from "@tabler/icons-react";

export default function Inicio() {
  return (
    <div className="overflow-hidden">
      <SwiperBanner />
      <section className="w-full bg-slate-50" id="nosotros">
        {/* <Container className="py-10 space-y-6">
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
                <p>
                  En <strong>Arquitecture</strong>, diseñamos espacios que trascienden lo estético:
                  creamos soluciones arquitectónicas que inspiran, funcionan y perduran en el
                  tiempo.
                </p>
                <p>
                  Somos un equipo apasionado de arquitectos, diseñadores y profesionales técnicos
                  con una visión clara: transformar ideas en estructuras que mejoren la calidad de
                  vida de quienes las habitan. Desde nuestra fundación en 2020, hemos trabajado en
                  proyectos residenciales, comerciales, corporativos y urbanos, destacándonos por
                  nuestra atención al detalle, compromiso con la sostenibilidad y enfoque humano en
                  cada diseño.
                </p>
                <p>
                  Creemos que la arquitectura no solo moldea ciudades, sino también historias. Por
                  eso, colaboramos de cerca con nuestros clientes en cada etapa del proceso,
                  entendiendo sus necesidades y convirtiéndolas en espacios únicos y funcionales,
                  donde la forma y la función se encuentran en equilibrio
                </p>
              </div>
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
        </Container> */}

        {/* <Container className="py-14 space-y-14"> */}
        <Container className="py-14 space-y-14 relative">
          <div className="absolute top-20 -left-16 w-36 h-36 bg-primary/30 rounded-full blur-3xl -z-9" />
          <section className="flex gap-10 items-center lg:flex-row flex-col">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 lg:w-1/2 w-full"
            >
              <h2 className="text-4xl font-bold text-secondary">
                ¿Por qué <span className="text-primary">elegirnos?</span>
              </h2>

              <p className="md:text-justify text-start">
                En <strong className="text-secondary">TECNIFER SAC</strong> ofrecemos soluciones
                integrales en
                <strong> instalaciones eléctricas</strong>, tableros eléctricos, sistemas de puesta
                a tierra y electrobombas para proyectos residenciales, comerciales e industriales.
              </p>

              <p className="md:text-justify text-start">
                Fundada en 2018 por especialistas con amplia trayectoria en el sector eléctrico,
                nuestra empresa trabaja con tecnología moderna y procedimientos certificados para
                garantizar seguridad, eficiencia y cumplimiento normativo.
              </p>

              <p className="md:text-justify text-start">
                Nos enfocamos en ofrecer un servicio técnico confiable, rápido y personalizado,
                acompañando a cada cliente desde el diseño hasta la implementación para optimizar y
                proteger sus instalaciones eléctricas.
              </p>
            </motion.div>

            {/* IMAGEN */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 w-full"
            >
              <img
                src={AsideNosotros}
                alt="Equipo técnico TECNIFER"
                className="w-full rounded-2xl"
                width="679"
                height="679"
              />
            </motion.div>
          </section>

          {/* MISIÓN & VISIÓN */}
          <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-6 relative"
          >
            <div className="bg-white rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3 text-primary justify-center">
                <IconTargetArrow size={32} />
                <h3 className="text-2xl font-bold">Misión</h3>
              </div>
              <p className="text-center">
                Brindar soluciones técnicas especializadas en instalaciones eléctricas, tableros
                eléctricos, sistemas de puesta a tierra e instalaciones de electrobombas,
                garantizando seguridad, eficiencia y continuidad operativa, cumpliendo con
                estándares nacionales e internacionales y asegurando la satisfacción de nuestros
                clientes.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3 text-primary justify-center">
                <IconEye size={32} />
                <h3 className="text-2xl font-bold">Visión</h3>
              </div>
              <p className="text-center">
                Ser la empresa referente en instalaciones y soluciones eléctricas a nivel nacional,
                destacando por la calidad técnica, la innovación continua y el compromiso con la
                seguridad y la confiabilidad operativa.
              </p>
            </div>
            <div className="absolute bottom-20 -right-24 w-36 h-36 -top-52 bg-secondary/90 rounded-full blur-3xl -z-9" />
          </motion.section>
        </Container>

        <section className="bg-secondary w-full py-20 text-white">
          <Container className="flex flex-col gap-9 items-center">
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-center">
              Transformamos tus necesidades en soluciones eléctricas seguras, eficientes y
              duraderas. Cada proyecto es una solución personalizada que protege tus instalaciones y
              optimiza su funcionamiento, con altos estándares técnicos y calidad profesional.
            </p>
            <button
              onClick={() => scrollToElement("#contacto", 100)}
              className="px-4 py-2 group hover:bg-primary bg-transparent fancy hover:before:bg-white before:bg-white text-white text-sm border-2 border-white  hover:text-white duration-300 transition-colors max-lg:text-sm"
            >
              <span className="top-key bg-secondary group-hover:bg-secondary"></span>
              <span className="text text-white ps-8">Contactar</span>
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
              className="text-center mt-3 mb-16 text-secondary font-semibold"
            >
              Protegemos y optimizamos tus instalaciones eléctricas.
            </motion.p>

            <ServicioSection />
          </Container>
        </section>

        <section className="w-full py-16 bg-primary text-white">
          <Container className="flex flex-col items-center gap-3">
            <p className="text-xl md:text-2xl lg:text-3xl text-center font-medium">
              Contáctanos hoy y cuéntanos tu requerimiento.
            </p>

            <p className="text-center my-2 text-lg">
              Nuestro equipo técnico está listo para brindarte una atención personalizada y
              soluciones eléctricas seguras, eficientes y a la medida de tus necesidades.
            </p>

            <p className="text-center my-2">Tu proyecto comienza con una solución confiable.</p>

            <button
              onClick={() => scrollToElement("#contacto", 100)}
              className="px-4 py-2 w-fit fancy text-black hover:bg-secondary hover:text-white hover:before:bg-white border-2 border-white before:bg-white duration-300 transition-colors"
            >
              <span className="top-key bg-primary group-hover:bg-secondary"></span>
              <span className="text text-white ps-8">Contáctanos</span>
              <span className="bottom-key-1 bg-primary"></span>
              <span className="bottom-key-2 bg-primary"></span>
            </button>
          </Container>
        </section>

        <section className="w-full py-9 bg-slate-50" id="proyectos">
          <Container className="space-y-8">
            <div className="space-y-3">
              <h2 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl">
                Nuestros <span className="text-primary">Trabajos</span>
              </h2>

              <p className="text-center max-w-3xl mx-auto text-gray-600">
                Desde 2018, en TECNIFER SAC hemos ejecutado trabajos en instalaciones eléctricas,
                tableros eléctricos, sistemas de puesta a tierra y electrobombas para proyectos
                residenciales, comerciales e industriales. Cada servicio refleja nuestro compromiso
                con la seguridad, la calidad técnica y la confianza de nuestros clientes.
              </p>
            </div>

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
  );
}
