import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { navbarLinks } from '../data/data'
import MenuResponsivo from './MenuResponsivo'

const Navbar = () => {
  const [abierto, setAbierto] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const togglePlay = () => setIsPlaying(prev => !prev)

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800 shadow-xl'
            : 'bg-linear-to-r from-gray-900 to-black border-b border-gray-800'
        }`}
      >
        <div className="container flex justify-between items-center py-4 px-4 md:px-6">

          {/* LOGO */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div
              onClick={togglePlay}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-white bg-linear-to-r from-purple-600 to-blue-500 ${
                isPlaying ? 'animate-pulse-slow' : ''
              }`}
            >
              ♪
            </div>
            <div>
              <span className="block text-xs text-gray-400 uppercase">indie</span>
              <span className="block text-xl font-bold bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                SONIC.WAVES
              </span>
            </div>
          </div>

          {/* DESKTOP LINKS */}
          <ul className="hidden md:flex items-center gap-6">
            {navbarLinks.map(item => (
              <li key={item.id}>
                <Link
                  to={item.url}
                  className="text-gray-300 hover:text-white transition relative group"
                >
                  {item.title}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-linear-to-r from-purple-500 to-blue-400 group-hover:w-full transition-all"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* DESKTOP ACTIONS */}
          <div className="hidden md:flex items-center gap-4">
            <span className="text-sm text-gray-400">
              {isPlaying ? 'Now Playing' : 'Paused'}
            </span>

            <button
              onClick={togglePlay}
              className="w-10 h-10 rounded-full bg-linear-to-r from-purple-600 to-blue-500 text-white hover:scale-105 transition"
            >
              {isPlaying ? '❚❚' : '▶'}
            </button>

            <Link to="/login">
              <button className="px-5 py-2 rounded-lg border border-gray-700 text-white hover:border-purple-500 transition">
                Artista
              </button>
            </Link>
          </div>

          {/* MOBILE */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={togglePlay}
              className="w-8 h-8 rounded-full bg-linear-to-r from-purple-600 to-blue-500 text-white"
            >
              {isPlaying ? '❚❚' : '▶'}
            </button>

            <button
              onClick={() => setAbierto(prev => !prev)}
              className="text-2xl text-gray-300"
              aria-expanded={abierto}
            >
              {abierto ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* MENÚ RESPONSIVO */}
        <MenuResponsivo
          open={abierto}
          setOpen={setAbierto}
          navbarLinks={navbarLinks}
        />

        {/* BARRA DE REPRODUCCIÓN */}
        {isPlaying && (
          <div className="h-1 bg-linear-to-r from-purple-600 via-blue-500 to-purple-600 animate-slide-right"></div>
        )}

        <style>{`
          @keyframes pulse-slow {
            0%,100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          .animate-pulse-slow {
            animation: pulse-slow 2s infinite;
          }

          @keyframes slide-right {
            from { background-position: 0% }
            to { background-position: 200% }
          }
          .animate-slide-right {
            background-size: 200% 100%;
            animation: slide-right 3s linear infinite;
          }
        `}</style>
      </nav>

      {/* Spacer */}
      <div className="h-20"></div>
    </>
  )
}

export default Navbar
