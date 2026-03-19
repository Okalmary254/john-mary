import { Routes, Route } from 'react-router-dom'
import RootLayout from './components/layout/RootLayout'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Certifications from './pages/Certifications'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="certifications" element={<Certifications />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
