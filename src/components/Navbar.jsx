import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { navbarLinks } from '../data/data'
import { ImBooks } from 'react-icons/im'
import { MdMenu } from 'react-icons/md'
import MenuResponsivo from './MenuResponsivo'

const Navbar = () => {
  const [abierto, setAbierto] = useState(false)
  return (
    <>
      <nav className="border-b border-gray-200">
        <div className="container flex justify-between font-bold items-center py-6">
          {/* Logo con animación */}
          <div className="text-2xl flex items-center gap-2">
            <div style={{ animation: 'float 3s ease-in-out infinite' }}>
              <ImBooks className="text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-normal text-gray-500">El sitio de</span>
              <span className="text-xl font-bold text-secondary leading-tight">
                MLD Cursos
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-8 text-gray-700">
              {navbarLinks.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.url}
                    className="inline-block py-2 px-1 text-gray-600 hover:text-primary font-medium transition-colors border-b-2 border-transparent hover:border-primary"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Botón Ingresar formal (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/login">
              <button className="bg-linear-to-r from-gray-800 to-gray-900 text-white font-semibold py-3 px-8 rounded-lg hover:from-gray-900 hover:to-gray-800 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                </svg>
                Login
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <Link to="/login" className="md:hidden">
              <button className="bg-gray-800 text-white font-semibold py-2 px-4 rounded-md text-sm">
                Ingresar
              </button>
            </Link>
            <button
              onClick={() => setAbierto(!abierto)}
              className="text-3xl p-2 text-gray-700"
              aria-label="Menú móvil"
              aria-expanded={abierto}
            >
              <MdMenu />
            </button>
          </div>
        </div>

        {/* Mobile Menu Content */}
        <MenuResponsivo open={abierto} navbarLinks={navbarLinks} />

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
          
          @keyframes colorChange {
            0% { color: #4F46E5; }
            100% { color: #EC4899; }
          }
        `}</style>
      </nav>
    </>
  )
}

export default Navbar