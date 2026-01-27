import React from 'react'
import { Link } from 'react-router-dom'

const MenuResponsivo = ({ open, navbarLinks }) => {
  return (
    open && (
      <div
        className="absolute top-full left-0 w-full z-50 bg-white shadow-xl"
        style={{
          animation: 'slideDown 0.3s ease-out',
        }}
      >
        <div className="py-6 px-4 border-t border-gray-100">
          <ul className="flex flex-col gap-2">
            {navbarLinks.map((item, index) => (
              <li
                key={item.id}
                style={{
                  animation: `fadeIn 0.4s ease-out ${index * 0.1}s both`,
                }}
              >
                <Link
                  to={item.url}
                  className="flex items-center py-4 px-4 text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg transition-colors font-medium"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Botón Ingresar formal (Móvil) */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <Link to="/login">
              <button className="w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold py-4 px-4 rounded-lg hover:from-gray-900 hover:to-gray-800 transition-all duration-300 shadow-md flex items-center justify-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                </svg>
                Ingresar a la Plataforma
              </button>
            </Link>
            <p className="text-center text-gray-500 text-sm mt-4">
              ¿No tienes cuenta?{' '}
              <Link to="/register" className="text-primary font-semibold hover:underline">
                Regístrate aquí
              </Link>
            </p>
          </div>
        </div>

        {/* Estilos CSS */}
        <style>{`
          @keyframes slideDown {
            from { 
              opacity: 0;
              transform: translateY(-10px);
            }
            to { 
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeIn {
            from { 
              opacity: 0;
              transform: translateX(-10px);
            }
            to { 
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}</style>
      </div>
    )
  )
}

export default MenuResponsivo