const WHATSAPP_PHONE = "51985053727";

export const enviarWhatsapp = (message: string = "Hola! Quiero cotizar 😁") => {
  const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(
    message
  )}`;
  window.open(url, "_blank");
};
