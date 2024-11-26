import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/NavBar"
import { HomePage } from "./Pages/HomePage/HomePage"
import { AgendaProPage } from "./Pages/AgendaPro/AgendaProPage"
import { AboutPage } from "./Pages/About/AboutPage"
import { CatalogoPage } from "./Pages/Catalogo/CatalogoPage"

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
    </>
  )
}

export default App
