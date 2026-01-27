import { Link } from 'react-router-dom'

const Cursos = () => {
  return (
    <section id="cursos" className="py-24 bg-linear-to-b from-white to-orange-50">
      <div className="container mx-auto px-4">

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Nuestros Cursos
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Cursos diseñados para aprender desde cero y llevar tus habilidades
            al siguiente nivel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
            <h3 className="text-xl font-bold mb-3 text-primary">
              React desde Cero
            </h3>
            <p className="text-gray-600 mb-6">
              Aprende a crear interfaces modernas con componentes, hooks y buenas prácticas.
            </p>
            <Link to="/cursos/react">
              <button className="text-primary font-semibold hover:underline">
                Ver curso →
              </button>
            </Link>
          </div>

          <div className="p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
            <h3 className="text-xl font-bold mb-3 text-primary">
              Tailwind CSS
            </h3>
            <p className="text-gray-600 mb-6">
              Diseña interfaces rápidas, limpias y responsivas sin escribir CSS tradicional.
            </p>
            <Link to="/cursos/tailwind">
              <button className="text-primary font-semibold hover:underline">
                Ver curso →
              </button>
            </Link>
          </div>

          <div className="p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
            <h3 className="text-xl font-bold mb-3 text-primary">
              Framer Motion
            </h3>
            <p className="text-gray-600 mb-6">
              Agrega animaciones fluidas y profesionales a tus proyectos en React.
            </p>
            <Link to="/cursos/framer">
              <button className="text-primary font-semibold hover:underline">
                Ver curso →
              </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Cursos