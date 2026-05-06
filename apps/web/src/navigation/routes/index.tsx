import { Institucion } from "@/pages/Institucion"
import Home from "@/pages/Landing/Home"
import { Oferta } from "@/pages/Oferta"
import { Routes, Route } from "react-router-dom"

export const AppRouter = (): React.ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Institucion" element={<Institucion />} />
      <Route path="/Oferta-Educativa" element={<Oferta />} />
      <Route
        path="*"
        element={
          <div className="flex min-h-screen items-center justify-center">
            <div className="text-center">
              <h1 className="mb-4 text-4xl font-bold text-gray-800">404</h1>
              <p className="text-xl text-gray-600">Página no encontrada</p>
            </div>
          </div>
        }
      />
    </Routes>
  )
}
