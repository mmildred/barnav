import React from 'react'

const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-linear-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden"
    >
      {/* Fondos decorativos suaves */}
      <div className="absolute top-24 left-10 w-32 h-32 rounded-full bg-purple-600/10 blur-2xl"></div>
      <div className="absolute bottom-24 right-10 w-40 h-40 rounded-full bg-blue-600/10 blur-2xl"></div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Título */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Sobre <span className="text-purple-400">Sonic.Waves</span>
          </h2>

          <div className="w-32 h-1 bg-linear-to-r from-purple-500 to-blue-500 mx-auto mb-6 rounded-full"></div>

          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Donde la música indie encuentra su espacio,  
            sin algoritmos, sin filtros, solo creatividad auténtica.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Filosofía */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              🎶 Música hecha con intención
            </h3>

            <p className="text-gray-300 mb-6 leading-relaxed">
              En <span className="text-purple-400 font-semibold">Sonic.Waves</span> creemos que la música
              independiente merece un espacio libre, donde los artistas
              puedan expresarse sin presiones comerciales.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Somos una comunidad donde creadores y oyentes se encuentran
              por afinidad real, no por tendencias artificiales.
            </p>

            {/* Estadísticas simples */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              {[
                { number: "500+", label: "Artistas independientes" },
                { number: "10K+", label: "Canciones originales" },
                { number: "100K+", label: "Reproducciones mensuales" },
                { number: "50+", label: "Países conectados" }
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-gray-800/50 border border-gray-700 text-center"
                >
                  <p className="text-2xl font-bold text-white">{item.number}</p>
                  <p className="text-gray-400 text-sm mt-1">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Valores */}
            <div className="mt-12">
              <h4 className="text-xl font-semibold text-white mb-6">
                Lo que nos define
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { emoji: "🎸", title: "Autenticidad", desc: "Música sin máscaras" },
                  { emoji: "🌍", title: "Diversidad", desc: "Todos los sonidos cuentan" },
                  { emoji: "🤝", title: "Comunidad", desc: "Conexiones reales" },
                  { emoji: "💎", title: "Calidad", desc: "Audio con intención" }
                ].map((value, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-4 rounded-xl bg-gray-800/40"
                  >
                    <span className="text-2xl">{value.emoji}</span>
                    <div>
                      <h5 className="text-white font-semibold">{value.title}</h5>
                      <p className="text-gray-400 text-sm">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Misión y visión */}
          <div className="p-10 rounded-3xl bg-linear-to-br from-gray-900 to-black border border-gray-800">
            <div className="mb-10">
              <h4 className="text-2xl font-bold text-purple-400 mb-4">
                Nuestra misión
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Crear un espacio digital donde los artistas independientes
                puedan crecer, compartir su música y conectar con personas
                que valoran la creatividad auténtica.
              </p>
            </div>

            <div className="h-px bg-gray-700 my-8"></div>

            <div>
              <h4 className="text-2xl font-bold text-blue-400 mb-4">
                Nuestra visión
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Ser una plataforma referente en la música indie,
                impulsando talento real y construyendo una
                comunidad sostenible para creadores.
              </p>
            </div>

            {/* Testimonio */}
            <div className="mt-10 p-6 rounded-2xl bg-gray-800/50 border border-gray-700">
              <p className="text-gray-300 italic mb-4">
                “Aquí mi música encontró personas reales,
                no solo números.”
              </p>
              <p className="text-sm text-gray-400">
                — Luna Rodríguez, artista independiente
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <button className="px-10 py-4 rounded-2xl bg-linear-to-r from-purple-600 to-blue-600 text-white font-semibold hover:opacity-90 transition">
            Únete a la comunidad indie
          </button>

          <p className="mt-6 text-gray-400 text-sm">
            Sin contratos. Sin intermediarios. Solo música.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
