//MenuResponsivo.jsx
import React from 'react';

const MenuResponsivo = ({ open, navbarLinks }) => {
  return (
    open && (
      <div 
        className="absolute top-20 left-0 w-full h-screen z-20"
        style={{
          animation: 'slideDown 0.3s ease-out'
        }}
      >
        <div className="text-xl font-semibold uppercase bg-primary text-white rounded-b-md py-7 m-6">
          <ul className="flex flex-col justify-center items-center gap-10">
            {navbarLinks.map((item, index) => (
              <li 
                key={item.id}
                style={{
                  animation: `fadeIn 0.4s ease-out ${index * 0.1}s both`,
                  transition: 'transform 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(10px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
              >
                <a 
                  href={item.url} 
                  className="hover:text-gray-200"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Botón Ingresar en móvil */}
          <div className="mt-10 flex justify-center">
            <button 
              className="hover:bg-white hover:text-primary font-semibold rounded-md text-white border-2 border-white px-8 py-3 duration-300"
              style={{
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Ingresar
            </button>
          </div>
        </div>
        
        {/* Estilos CSS */}
        <style>{`
          @keyframes slideDown {
            from { 
              opacity: 0;
              transform: translateY(-20px);
            }
            to { 
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeIn {
            from { 
              opacity: 0;
              transform: translateX(-20px);
            }
            to { 
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}</style>
      </div>
    )
  );
};

export default MenuResponsivo;