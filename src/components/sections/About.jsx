const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-linear-to-b from-orange-50 to-white"
    >
      <div className="container mx-auto px-4">

        {/* Título */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Sobre Nosotros
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conoce quiénes somos y por qué en MLD Cursos creemos en una forma
            diferente de aprender tecnología.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Aprender tecnología puede ser simple
            </h3>
            <p className="text-gray-700 mb-4">
              En <span className="font-semibold">MLD Cursos</span> nos enfocamos
              en enseñar programación y herramientas digitales de manera clara,
              práctica y accesible para todos.
            </p>
            <p className="text-gray-700 mb-6">
              Nuestros cursos están pensados para estudiantes y personas que
              desean iniciar o reforzar sus conocimientos, con ejemplos reales
              y acompañamiento paso a paso.
            </p>

            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Aprendizaje práctico y aplicado
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Contenido claro y actualizado
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Comunidad y acompañamiento
              </li>
            </ul>
          </div>

          <div className="p-10 rounded-3xl bg-white shadow-xl">
            <h4 className="text-xl font-bold mb-4">
              Nuestra misión
            </h4>
            <p className="text-gray-600 mb-6">
              Ayudar a más personas a aprender tecnología sin miedo, paso a
              paso y con confianza.
            </p>

            <h4 className="text-xl font-bold mb-4">
              Nuestra visión
            </h4>
            <p className="text-gray-600">
              Ser una plataforma educativa accesible que impulse el talento
              digital en estudiantes y futuros desarrolladores.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
