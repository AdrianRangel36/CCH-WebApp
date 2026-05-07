import React from "react"

export const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-950 py-12 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Columna 1: Logo e Identidad */}
          <div>
            <div className="mb-4 text-2xl font-bold">
              Colegio de Ciencias y Humanidades
            </div>
            {/* <p className="text-sm leading-relaxed text-blue-200">
            </p> */}
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          {/* <div>
            <h3 className="mb-4 text-lg font-semibold">[Enlaces Rápidos]</h3>
            <ul className="space-y-2 text-sm text-blue-200">
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  [Enlace Interno 1]
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  [Enlace Interno 2]
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  [Enlace Interno 3]
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  [Enlace Interno 4]
                </a>
              </li>
            </ul>
          </div> */}

          {/* Columna 3: Información de Contacto */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">[Contacto]</h3>
            <ul className="space-y-3 text-sm text-blue-200">
              <li className="flex items-start gap-3">
                <span className="text-xl">📍</span>
                <a href="">
                <span>
                  Coronel Enrique Carrola Antuna s/n. Colonia Hipódromo. C.P. 34270.Durango, Dgo. México.
                </span></a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">📞</span>
                <span> (618) 827 13 05.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">✉️</span>
                <span> cch@ujed.mx</span>
              </li>
            </ul>
          </div>

          {/* Columna 4: Redes Sociales */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">[Síguenos]</h3>
            <div className="flex gap-4">
              {/* Botones de Redes Sociales (Puedes poner iconos SVG reales dentro de estos div/a) */}
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 font-bold transition-colors hover:bg-blue-800"
                aria-label="Facebook"
              >
                [FB]
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 font-bold transition-colors hover:bg-blue-800"
                aria-label="Instagram"
              >
                [IG]
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 font-bold transition-colors hover:bg-blue-800"
                aria-label="Twitter / X"
              >
                [X]
              </a>
            </div>
          </div>
        </div>

        {/* Barra inferior: Derechos de Autor */}
        {/* <div className="mt-12 border-t border-blue-900 pt-8 text-center text-sm text-blue-300">
          <p>
            © {new Date().getFullYear()} [Nombre de la Institución]. Todos los
            derechos reservados.
          </p>
        </div> */}
      </div>
    </footer>
  )
}
