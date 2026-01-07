"use client"

import { useEffect, useState } from "react"
import Logo from "../../assets/logo1.png"
import Container from "../features/Container"
import { AnimatePresence, motion } from "motion/react"
import { BiMenu, BiX, BiPhone, BiEnvelope, BiTime, BiMapPin, BiUser, BiChat } from "react-icons/bi"
import { BsX, BsFacebook, BsInstagram, BsWhatsapp, BsLinkedin, BsTelephone } from "react-icons/bs"
import { scrollToElement } from "../../logic/scrollToElement"

export default function HeaderV0() {
  const [isTop, setIsTop] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())

  function handleScroll() {
    if (window.scrollY > 100) {
      setIsTop(true)
    } else {
      setIsTop(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Actualizar hora cada minuto
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Cerrar menú móvil cuando se redimensiona la pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const menuItems = [
    { href: "#inicio", label: "Inicio" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#servicios", label: "Servicios" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#contacto", label: "Contacto" },
  ]

  const contactInfo = {
    phone: "+1 (555) 123-4567",
    email: "info@empresa.com",
    address: "123 Calle Principal, Ciudad",
    hours: "Lun-Vie: 9:00-18:00",
  }

  const socialLinks = [
    { icon: BsFacebook, href: "#", label: "Facebook", color: "hover:text-blue-600" },
    { icon: BsInstagram, href: "#", label: "Instagram", color: "hover:text-pink-600" },
    { icon: BsWhatsapp, href: "#", label: "WhatsApp", color: "hover:text-green-600" },
    { icon: BsLinkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-700" },
  ]

  const handleMenuClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const isBusinessHours = () => {
    const now = new Date()
    const hour = now.getHours()
    const day = now.getDay()
    return day >= 1 && day <= 5 && hour >= 9 && hour < 18
  }

  return (
    <>
      {/* Top Bar - Solo visible en desktop */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={`hidden lg:block w-full py-2 text-sm ${isTop ? "bg-gray-100 text-gray-700" : "bg-secondary text-white backdrop-blur-sm"
          } transition-all duration-300`}
      >
        <Container className="flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <BiPhone className="text-sm" />
              <span>{contactInfo.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <BiEnvelope className="text-sm" />
              <span>{contactInfo.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <BiTime className={`text-sm ${isBusinessHours() ? "text-green-400" : "text-red-400"}`} />
              <span className={`${isBusinessHours() ? "text-green-400" : "text-red-400"}`}>{contactInfo.hours}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className={`transition-colors duration-200 ${social.color}`}
                  whileHover={{ scale: 1.2 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
            <div className="text-xs opacity-75">
              {currentTime.toLocaleTimeString("es-ES", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
              })}
            </div>
          </div>
        </Container>
      </motion.div>

      {/* Main Header */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`w-full py-3 lg:py-4 fixed z-50 ${isTop ? "bg-white/95 backdrop-blur-md shadow-lg text-black" : "bg-transparent text-white"
          } duration-300 transition-all ${isTop ? "top-0" : "lg:top-10 top-0"}`}
      >
        <Container className="flex justify-between items-center">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3">
            <img src={Logo || "/placeholder.svg"} alt="logo" className="w-20 lg:w-24" />
            <div className={`hidden sm:block ${isTop ? "text-gray-700" : "text-white"}`}>
              <div className="font-bold text-lg">Aquitecture</div>
              <div className="text-xs opacity-75">Soluciones Profesionales</div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-6 xl:gap-8 font-bold">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.href}

                onClick={(e) => {
                  e.preventDefault()
                  handleMenuClick(item.href)
                  scrollToElement(item.href, 100)
                }}
                className={`relative transition-colors duration-200 hover:text-blue-400 ${isTop ? "hover:text-primary" : "hover:text-secondary"
                  }`}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {item.label}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-current"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.a
              href="tel:+15551234567"
              className={`flex items-center gap-2 fancy px-4 bg-primary py-2 rounded-full border-2 transition-all duration-200 ${isTop
                ? "border-secondary text-blue-600 hover:bg-secondary hover:text-white"
                : "border-white text-white hover:bg-primary hover:text-black"
                }`}
              whileTap={{ scale: 0.95 }}
            >
              <span className="top-key bg-primary"></span>
              <span className="text group-hover:!ps-2 text-white !ps-2 Poppins-Font flex items-center gap-2 justify-center">
                <BsTelephone size={16} />
                <span>Llamar</span>
              </span>
              <span className="bottom-key-1 bg-primary"></span>
              <span className="bottom-key-2 bg-primary"></span>
            </motion.a>

            <motion.button
              className={`bg-secondary ${isTop ? 'hover:bg-primary' : ''} fancy ${isTop ? 'border-2 bg-secondary' : 'border-2 border-white'} text-white px-6 py-2 rounded-full font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg`}
            
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToElement("#contacto", 100)}
            >
              
              <span className={`top-key ${isTop ? '' : 'bg-secondary'}`}></span>
              <span className="text group-hover:!ps-2 text-white !ps-2 Poppins-Font flex items-center gap-2 justify-center">
                Cotizar Proyecto
              </span>
              <span className={`bottom-key-1 ${isTop ? '' : 'bg-secondary'}`}></span>
              <span className={`bottom-key-2 ${isTop ? '' : 'bg-secondary'}`}></span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 rounded-lg hover:bg-black/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle mobile menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <BiX size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <BiMenu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </Container>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
            >
              <div className="p-6">
                {/* Mobile Menu Header */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-3">
                    <img src={Logo || "/placeholder.svg"} alt="logo" className="w-16" />
                    <div>
                      <div className="font-bold text-gray-800">Arquitecture</div>
                      <div className="text-xs text-gray-500">Soluciones Profesionales</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <BsX size={24} className="text-gray-600" />
                  </button>
                </div>

                {/* Contact Info Cards */}
                <div className="space-y-3 mb-6">
                  <motion.div
                    className="bg-blue-50 p-3 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <div className="flex items-center gap-2 text-blue-700">
                      <BiPhone size={16} />
                      <span className="font-medium text-sm">{contactInfo.phone}</span>
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-green-50 p-3 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <div className="flex items-center gap-2 text-green-700">
                      <BiTime size={16} />
                      <span className="font-medium text-sm">{contactInfo.hours}</span>
                      <span
                        className={`ml-auto text-xs px-2 py-1 rounded-full ${isBusinessHours() ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
                          }`}
                      >
                        {isBusinessHours() ? "Abierto" : "Cerrado"}
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Mobile Navigation */}
                <nav className="space-y-2 mb-6">
                  {menuItems.map((item, index) => (
                    <motion.button
                      key={item.href}

                      onClick={(e) => {
                        e.preventDefault()
                        handleMenuClick(item.href)
                        scrollToElement(item.href, 100)
                      }}
                      className="flex items-center w-full gap-3 py-3 px-4 text-gray-800 font-medium rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <BiUser size={18} />
                      {item.label}
                    </motion.button>
                  ))}
                </nav>

                {/* CTA Buttons */}
                <motion.div
                  className="space-y-3 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <motion.a
                    href="tel:+15551234567"
                    className="flex items-center justify-center gap-2 w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <BsTelephone size={18} />
                    Llamar Ahora
                  </motion.a>

                  <motion.button
                    className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleMenuClick("#contacto")}
                  >
                    <BiChat size={18} />
                    Cotizar Proyecto
                  </motion.button>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  className="pt-6 border-t border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <p className="text-sm text-gray-500 text-center mb-4">Síguenos en redes sociales</p>
                  <div className="flex justify-center gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        className={`p-3 rounded-full bg-gray-100 transition-colors duration-200 ${social.color}`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                        aria-label={social.label}
                      >
                        <social.icon size={20} />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>

                {/* Footer Info */}
                <motion.div
                  className="mt-6 pt-4 border-t border-gray-200 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                >
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-2">
                    <BiMapPin size={16} />
                    <span>{contactInfo.address}</span>
                  </div>
                  <div className="text-xs text-gray-400">© 2025 Arquitecture. Todos los derechos reservados.</div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
