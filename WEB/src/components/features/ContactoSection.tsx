import React, { useState } from 'react'
import { BiMapPin, BiPhone } from 'react-icons/bi';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { LiaLinkedin } from 'react-icons/lia';
import { RiMvAiLine } from 'react-icons/ri';
import { SiEndeavouros } from 'react-icons/si';

export default function ContactoSection() {

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Datos del formulario:', formData);
    alert('¡Mensaje enviado! Te contactaremos pronto.');

    // Limpiar formulario
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      mensaje: ''
    });
  };
  console.log(handleSubmit)

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ponte en Contacto
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ¿Tienes alguna pregunta o proyecto en mente? Nos encantaría escucharte.
            Completa el formulario o contáctanos directamente.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Información de contacto y redes sociales */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Información de Contacto
              </h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-200 p-3 rounded-full">
                    <RiMvAiLine className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">contacto@empresa.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-200 p-3 rounded-full">
                    <BiPhone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Teléfono</p>
                    <p className="text-gray-600">+51 999 999 999</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-200 p-3 rounded-full">
                    <BiMapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Ubicación</p>
                    <p className="text-gray-600">Lima, Perú</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Redes sociales */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Síguenos
              </h3>

              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors duration-200"
                >
                  <FaFacebook className="w-6 h-6" />
                </a>

                <a
                  href="#"
                  className="bg-sky-500 hover:bg-sky-600 text-white p-3 rounded-full transition-colors duration-200"
                >
                  <BsTwitter className="w-6 h-6" />
                </a>

                <a
                  href="#"
                  className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full transition-colors duration-200"
                >
                  <BsInstagram className="w-6 h-6" />
                </a>

                <a
                  href="#"
                  className="bg-blue-800 hover:bg-blue-900 text-white p-3 rounded-full transition-colors duration-200"
                >
                  <LiaLinkedin className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Mensaje adicional */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h4 className="font-semibold text-gray-900 mb-2">
                ¿Prefieres llamarnos?
              </h4>
              <p className="text-gray-600 text-sm">
                Estamos disponibles de lunes a viernes de 9:00 AM a 6:00 PM.
                No dudes en contactarnos para cualquier consulta.
              </p>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Envíanos un Mensaje
            </h3>

            <div className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  value={formData.nombre}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="+51 999 999 999"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  rows={5}
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Cuéntanos sobre tu proyecto o consulta..."
                />
              </div>

              <button
                type="submit"
                className="w-full fancy border-secondary border-2 hover:bg-secondary text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <span className="top-key bg-white"></span>
                <span className="text group-hover:!ps-2 text-secondary ps-2 Poppins-Font flex items-center gap-2 justify-center">
                  <SiEndeavouros className="w-5 h-5" />
                  Enviar Mensaje
                </span>
                <span className="bottom-key-1 bg-white"></span>
                <span className="bottom-key-2 bg-white"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
