import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'El auge del indie en Latinoamérica 2024',
      excerpt:
        'Descubre cómo la escena indie latinoamericana está conquistando el mundo con sonidos frescos y auténticos.',
      date: '15 Ene 2024',
      category: 'Tendencias',
      readTime: '6 min',
      linear: 'from-purple-600 to-pink-500'
    },
    {
      id: 2,
      title: 'Home Studio: Guía para grabaciones profesionales',
      excerpt:
        'Todo lo que necesitas para montar tu estudio casero sin gastar una fortuna.',
      date: '12 Ene 2024',
      category: 'Producción',
      readTime: '8 min',
      linear: 'from-blue-500 to-cyan-400'
    },
    {
      id: 3,
      title: 'De bandas de garaje a streams virales',
      excerpt:
        'Historias de éxito de artistas que empezaron desde cero y hoy suenan en todo el mundo.',
      date: '8 Ene 2024',
      category: 'Historias',
      readTime: '7 min',
      linear: 'from-orange-500 to-yellow-400'
    },
    {
      id: 4,
      title: 'Mix y mastering para principiantes',
      excerpt:
        'Conceptos básicos que todo artista indie debe conocer sobre post-producción.',
      date: '5 Ene 2024',
      category: 'Tutorial',
      readTime: '9 min',
      linear: 'from-green-500 to-emerald-400'
    },
    {
      id: 5,
      title: 'Marketing musical en la era digital',
      excerpt:
        'Estrategias efectivas para promover tu música sin presupuesto millonario.',
      date: '3 Ene 2024',
      category: 'Marketing',
      readTime: '5 min',
      linear: 'from-red-500 to-pink-400'
    },
    {
      id: 6,
      title: 'Vinilos vs Streaming: La nueva coexistencia',
      excerpt:
        'Cómo el formato físico regresa con fuerza en la era digital.',
      date: '1 Ene 2024',
      category: 'Cultura',
      readTime: '7 min',
      linear: 'from-indigo-500 to-purple-400'
    }
  ];

  return (
    <section id="blog" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Blog Musical
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Artículos, guías y tendencias para artistas indie.
          </p>
        </div>

        {/* Posts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-purple-500 transition"
            >
              <div className={`h-2 bg-linear-to-r ${post.linear}`} />

              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-300 bg-gray-800 px-3 py-1 rounded-full">
                    {post.category}
                  </span>

                  <span className="text-sm text-gray-400">
                    {post.date} · {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {post.title}
                </h3>

                <p className="text-gray-400 mb-6">
                  {post.excerpt}
                </p>

                <button className="text-purple-400 hover:text-white transition">
                  Leer artículo →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
