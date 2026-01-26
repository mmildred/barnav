//Navbar.jsx
import React, { useState } from 'react';
import { navbarLinks } from '../data/data';
import { CiSearch } from "react-icons/ci";
import { ImBooks } from "react-icons/im";
import { MdMenu } from "react-icons/md";
import { PiShoppingCartLight } from "react-icons/pi";
import MenuResponsivo from './MenuResponsivo';

const Navbar = () => {
  const [abierto, setAbierto] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  return (
    <>
      {/* BANNER */}
{showBanner && (
  <div style={{
    background: 'linear-gradient(to right, var(--color-primary), var(--color-secondary))',
    color: 'white',
    padding: '10px',
    textAlign: 'center',
    position: 'relative'
  }}>
    <span style={{ fontWeight: 'bold' }}>
      ¡OFERTA ESPECIAL! 20% descuento en todos los cursos
    </span>
    <button 
      onClick={() => setShowBanner(false)}
      style={{
        position: 'absolute',
        right: '20px',
        top: '50%',
        transform: 'translateY(-50%)',
        background: 'transparent',
        border: 'none',
        color: 'white',
        fontSize: '20px',
        cursor: 'pointer'
      }}
    >
      ×
    </button>
  </div>
)}

      <nav>
        <div className="container flex justify-between font-bold items-center py-8">
          
          {/* Logo con animación */}
          <div className="text-2xl flex items-center gap-2 uppercase">
            <div style={{
              animation: 'float 3s ease-in-out infinite'
            }}>
              <ImBooks /> 
            </div>
            <p>El sitio de</p>
            <p 
              className='text-secondary'
              style={{
                animation: 'colorChange 4s infinite alternate'
              }}
            >
              Mld
            </p>
            <p>Cursos</p>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-7 text-gray-600">
              {navbarLinks.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.url}
                    className="inline-block py-1 px-3 hover:text-primary"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Action Icons con animaciones */}
          <div className="flex items-center gap-4">
            
            {/* Search Button con animación */}
            <button 
              className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-300"
              aria-label="Buscar"
              style={{
                transition: 'all 0.3s ease',
                transform: 'scale(1)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) rotate(0deg)'}
            >
              <CiSearch />
            </button>
            
            {/* Cart Button con animación */}
            <button 
              className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-300"
              aria-label="Carrito de compras"
              style={{
                transition: 'all 0.3s ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <PiShoppingCartLight />
              {/* Badge animado */}
              <span style={{
                position: 'absolute',
                top: '-5px',
                right: '-5px',
                background: '#EF4444',
                color: 'white',
                fontSize: '12px',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: 'pulse 2s infinite'
              }}>
                3
              </span>
            </button>
            
            {/* Login Button (Desktop only) */}
            <button 
              className="hover:bg-primary font-semibold rounded-md text-white bg-secondary px-4 py-2 duration-300 border-primary hidden md:block"
            >
              Ingresar
            </button>
          </div>
          
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setAbierto(!abierto)}
              className="text-4xl p-2"
              aria-label="Menú móvil"
              aria-expanded={abierto}
            >
              <MdMenu />
            </button>
          </div>
          
        </div>
        
        {/* Mobile Menu Content */}
        <MenuResponsivo open={abierto} navbarLinks={navbarLinks} />
        
        {/* Estilos CSS para animaciones */}
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
          
          @keyframes colorChange {
            0% { color: #4F46E5; }
            100% { color: #EC4899; }
          }
          
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
        `}</style>
      </nav>
    </>
  );
};

export default Navbar;