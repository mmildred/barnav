import React, { useState } from 'react';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      alert('Mensaje enviado. Pronto nos pondremos en contacto.');
      setFormData({ nombre: '', email: '', mensaje: '' });
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Conecta con la Comunidad
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            ¿Tienes preguntas, propuestas o quieres colaborar? Escríbenos.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-8">
              Información de Contacto
            </h3>

            <div className="space-y-6 text-gray-400">
              <div>
                <h4 className="font-semibold text-gray-200">Correo electrónico</h4>
                <p>artistas@sonicwaves.com</p>
                <p>soporte@sonicwaves.com</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-200">Teléfono</h4>
                <p>+1 (555) 123-4567</p>
                <p className="text-sm text-gray-500">Lunes a Viernes, 9:00 - 18:00</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-200">Dirección</h4>
                <p>
                  Av. Musical #456<br />
                  Brooklyn, NY 11201<br />
                  Estados Unidos
                </p>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Envíanos un mensaje
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm mb-2 text-gray-300">
                  Nombre
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-800 border border-gray-700 rounded-xl text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-800 border border-gray-700 rounded-xl text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-300">
                  Mensaje
                </label>
                <textarea
                  name="mensaje"
                  rows="5"
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-800 border border-gray-700 rounded-xl text-white resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-semibold text-white transition ${
                  isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-purple-600 hover:bg-purple-700'
                }`}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
              </button>
            </form>

            <p className="text-center text-gray-500 text-sm mt-6">
              Te responderemos en un máximo de 48 horas hábiles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
