import { Button } from "@workspace/ui/components/button"
import React from "react"

export const Hero: React.FC = () => {
  return (
    <section className="relative flex min-h-[85vh] w-full items-center justify-center overflow-hidden">
      {/* 1. IMAGEN DE FONDO */}
      {/* Asegúrate de poner una imagen llamada "fondo-cch.jpg" en tu carpeta public */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/cch.jpg')" }}
      />

      {/* 2. DEGRADADO DE FONDO (Overlay) */}
      {/* Va de un azul muy oscuro a la izquierda, desvaneciéndose hacia la derecha */}
      <div className="absolute inset-0 z-10 bg-linear-to-r from-blue-950/95 via-blue-900 to-transparent" />

      {/* 3. CONTENIDO (Texto y Botones) */}
      <div className="relative z-20 container mx-auto px-4 py-12 md:px-6">
        <div className="max-w-3xl text-white">
          <h1 className="mb-2 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Colegio de Ciencias y Humanidades
          </h1>

          <h2 className="mb-6 text-xl font-medium text-blue-200 italic md:text-3xl">
            “Libertad, Participación y Crítica”
          </h2>

          {/* TEXTO RESUMIDO */}
          <div className="mb-8 space-y-4 text-justify text-sm leading-relaxed text-gray-200 sm:text-base md:text-lg">
            <p>
              Con una sólida tradición universitaria, somos una institución
              dedicada a la formación integral de jóvenes en Educación Media
              Superior, preparándolos para el éxito en sus futuros estudios de
              nivel superior y posgrado.
            </p>
            <p>
              A través de estrategias didácticas innovadoras y avalados por el
              Sistema Nacional de Bachillerato, fomentamos la adquisición de
              aprendizajes significativos en un entorno de respeto,
              responsabilidad, inclusión y empatía.
            </p>
          </div>

          {/* Botones de acción (Usando el componente de shadcn) */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button className="h-16 bg-white px-10 text-lg font-semibold text-blue-950 hover:bg-gray-100">
              Oferta Académica
            </Button>
            <Button
              variant="outline"
              className="h-16 border-2 border-white px-10 text-lg font-semibold text-white hover:bg-white/20"
            >
              Ver Convocatorias
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
