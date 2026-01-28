import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const MenuResponsivo = ({ open, setOpen, navbarLinks }) => {
  const menuRef = useRef(null)

  // Cerrar al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'auto'
    }
  }, [open, setOpen])

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <div
      className={`fixed md:hidden top-0 left-0 w-full h-screen z-50 transition-all duration-300 ${
        open ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={() => setOpen(false)}
      />

      {/* Panel */}
      <div
        ref={menuRef}
        className={`absolute top-0 right-0 w-4/5 max-w-sm h-full bg-gray-900 border-l border-gray-800 shadow-2xl transform transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-800 flex justify-between items-center">
          <span className="text-lg font-bold text-white">SONIC.WAVES</span>
          <button
            onClick={() => setOpen(false)}
            className="text-gray-400 text-2xl"
          >
            ✕
          </button>
        </div>

        {/* Links */}
        <ul className="p-4 space-y-2">
          {navbarLinks.map((item) => (
            <li key={item.id}>
              <Link
                to={item.url}
                onClick={handleLinkClick}
                className="block py-3 px-4 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Botón login */}
        <div className="p-4 mt-auto">
          <Link to="/login" onClick={handleLinkClick}>
            <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition">
              Acceso Artistas
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MenuResponsivo
