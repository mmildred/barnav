import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Cómo aprender React en 2024',
      excerpt: 'Guía completa para dominar React con las mejores prácticas actuales.',
      date: '15 Ene 2024',
      category: 'React',
      readTime: '5 min'
    },
    {
      id: 2,
      title: 'Tailwind CSS vs CSS tradicional',
      excerpt: 'Comparativa detallada de ambas metodologías y cuándo usar cada una.',
      date: '10 Ene 2024',
      category: 'CSS',
      readTime: '7 min'
    },
    {
      id: 3,
      title: 'Introducción a TypeScript',
      excerpt: 'Por qué TypeScript se ha vuelto esencial en el desarrollo web moderno.',
      date: '5 Ene 2024',
      category: 'TypeScript',
      readTime: '8 min'
    }
  ];

  return (
    <section id="blog" className="py-24 bg-linear-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Blog & Artículos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Aprende con nuestros artículos, tutoriales y noticias sobre desarrollo web
          </p>
        </div>

        {/* Grid de artículos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div 
              key={post.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              {/* Imagen del post (placeholder) */}
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              
              {/* Contenido */}
              <div className="p-6">
                {/* Categoría y fecha */}
                <div className="flex justify-between items-center mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.date}</span>
                </div>

                {/* Título */}
                <h3 className="text-xl font-bold mb-3 hover:text-primary transition">
                  {post.title}
                </h3>

                {/* Extracto */}
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>

                {/* Footer del post */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="text-gray-500 text-sm">
                    {post.readTime} de lectura
                  </span>
                  <button className="text-primary font-semibold hover:underline">
                    Leer más →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            ¿Quieres recibir nuestros artículos directamente en tu email?
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input 
              type="email" 
              placeholder="Tu email"
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
            />
            <button className="bg-primary text-white font-semibold px-6 rounded-lg hover:bg-opacity-90 transition">
              Suscribirse
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;