import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/sections/Home'
import Cursos from './components/sections/Courses'
import About from './components/sections/About'
import Navbar from './components/Navbar'

const App = () => {
    return (
        <div className='overflow-x-hidden'>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cursos" element={<Cursos />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App
