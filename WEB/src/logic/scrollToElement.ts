export function scrollToElement(id: string, offset: number = 0) {
  const element = document.querySelector(id)
  console.log(element)
  if (element) {

    const elementRect = element.getBoundingClientRect();
    const elementPosition = elementRect.top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  } else {
    console.warn(`Elemento con ID "${id}" no encontrado.`);
  }
}