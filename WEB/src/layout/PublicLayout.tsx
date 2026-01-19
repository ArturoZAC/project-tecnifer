import { Outlet } from "react-router-dom";
// import Header from '../components/estructura/Header'
import Footer from "../components/estructura/Footer";
import HeaderV0 from "../components/estructura/HeaderV0";
import { enviarWhatsapp } from "../helpers/enviarWhatsapp";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { useServicesStore } from "../store/services.store";
import { useEffect } from "react";

export default function PublicLayout() {
  // const services = useServicesStore((state) => state.services);
  const getServices = useServicesStore((state) => state.getServices);

  // console.log({ services });

  useEffect(() => {
    getServices();
  }, [getServices]);

  return (
    <div>
      <HeaderV0 />
      {/* <Header /> */}
      <Outlet />
      <Footer />

      {/* BOTÓN FLOTANTE WHATSAPP */}
      <button
        onClick={() => enviarWhatsapp("Hola! Quiero cotizar un servicio eléctrico 😁")}
        className="
    fixed 
    bottom-6 right-6 
    bg-green-700 hover:bg-green-800 
    text-white font-medium 
    px-4 py-3
    sm:px-6 sm:py-4 
    rounded-full 
    shadow-lg shadow-black/30 
    flex items-center gap-2 
    transition-all 
    z-50
    sm:text-lg
    text-base

  "
      >
        {/* Ping animado */}
        <span className="absolute -top-1 right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75"></span>
          <span className="relative inline-flex h-4 w-4 rounded-full bg-red-500"></span>
        </span>
        <IconBrandWhatsapp size={32} />
        Cotizar Ahora
      </button>
    </div>
  );
}
