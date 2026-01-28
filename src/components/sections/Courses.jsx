import React from 'react'
import { Link } from 'react-router-dom'

const Cursos = () => {
  const cursos = [
    {
      id: 1,
      nombre: 'Luna Rodríguez',
      genero: 'Indie Folk',
      ubicacion: 'Ciudad de México',
      seguidores: '15.2K',
      canciones: 24
    },
    {
      id: 2,
      nombre: 'The Midnight Waves',
      genero: 'Synthwave',
      ubicacion: 'Los Ángeles',
      seguidores: '32.7K',
      canciones: 18
    },
    {
      id: 3,
      nombre: 'Cielo Azul',
      genero: 'Dream Pop',
      ubicacion: 'Buenos Aires',
      seguidores: '28.4K',
      canciones: 31
    }
  ]

  return (
    <section id="cursos" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Artistas Destacados
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cursos.map((curso) => (
            <div
              key={curso.id}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-gray-300"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {curso.nombre}
              </h3>

              <p className="text-sm text-gray-400">{curso.genero}</p>
              <p className="text-sm text-gray-400">{curso.ubicacion}</p>

              <div className="mt-4 text-sm">
                <p>{curso.canciones} canciones</p>
                <p>{curso.seguidores} seguidores</p>
              </div>

              <Link
                to={`/cursos/${curso.id}`}
                className="inline-block mt-6 text-sm font-medium text-purple-400 hover:text-purple-300"
              >
                Ver perfil
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Cursos
