import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/sections/Home'
import Cursos from './components/sections/Courses'
import About from './components/sections/About'
import Navbar from './components/Navbar'
import Contacto from './components/sections/Contacto'  
import Blog from './components/sections/Blog'       
import Login from './components/sections/Login'   

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<Home />} />
        
        {/* Rutas existentes */}
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/about" element={<About />} />
        
        {/* NUEVAS RUTAS */}
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />

        {/* Redirección por defecto */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App