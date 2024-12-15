import { Route, Routes } from "react-router-dom"
import { Navbar } from "./shared/NavBar"
import { HomePage } from "./Pages/HomePage/HomePage"
import { AgendaProPage } from "./Pages/AgendaPro/AgendaProPage"
import { AboutPage } from "./Pages/About/AboutPage"
import { CatalogoPage } from "./Pages/Catalogo/CatalogoPage"
import { Footer } from "./shared/Footer"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="agenda" element={<AgendaProPage />} />
        <Route path="catalogo" element={<CatalogoPage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
