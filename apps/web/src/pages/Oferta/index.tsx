import React from "react"
import { Header } from "@/components/Header"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"

export const Oferta: React.FC = () => {
  // Arreglo con la información del plan de estudios estructurada
  const planDeEstudios = [
    {
      id: "item-1",
      semestre: "Semestre 1",
      materias: [
        "Taller de Lectura y Redacción 1",
        "Matemáticas 1",
        "Introducción a las Ciencias Histórico Sociales",
        "Actividades Paraescolares 1",
        "Formación Integral 1",
        "Química 1",
        "Inglés 1",
        "Introducción al Conocimiento Científico",
        "Computación 1",
      ],
    },
    {
      id: "item-2",
      semestre: "Semestre 2",
      materias: [
        "Computación 2",
        "Historia Universal",
        "Matemáticas 2",
        "Actividades Paraescolares 2",
        "Formación Integral 2",
        "Química 2",
        "Taller de Lectura y Redacción 2",
        "Metodología de la Investigación",
        "Inglés 2",
      ],
    },
    {
      id: "item-3",
      semestre: "Semestre 3",
      materias: [
        "Física 1",
        "Formación Integral 3",
        "Química 3",
        "Inglés 3",
        "Matemáticas 3",
        "Biología 1",
        "Historia de México",
        "Computación 3",
        "Literatura 1",
      ],
    },
    {
      id: "item-4",
      semestre: "Semestre 4",
      materias: [
        "Matemáticas 4",
        "Inglés 4",
        "Ecología y Medio Ambiente",
        "Biología 2",
        "Formación Integral 4",
        "Computación 4",
        "Física 2",
        "Estructuras Socioeconómicas y Políticas de México",
        "Literatura 2",
      ],
    },
    {
      id: "item-5",
      semestre: "Semestre 5",
      materias: [
        "Psicología 1",
        "Física 3",
        "Contabilidad 1",
        "Matemáticas 5",
        "Ciencias de la Salud 1",
        "Fisicoquímica 1",
        "Biología 3",
        "Estadística 1",
        "Comunicación 1",
        "Mundo Contemporáneo 1",
        "Introducción al Estudio del Derecho 1",
        "Administración 1",
        "Filosofía 1",
        "Etimologías Grecolatinas 1",
      ],
    },
    {
      id: "item-6",
      semestre: "Semestre 6",
      materias: [
        "Psicología 2",
        "Contabilidad 2",
        "Matemáticas 6",
        "Ciencias de la Salud 2",
        "Filosofía 2",
        "Fisicoquímica 2",
        "Física 4",
        "Comunicación 2",
        "Mundo Contemporáneo 2",
        "Etimologías Grecolatinas 2",
        "Biología 4",
        "Estadística 2",
        "Introducción al Estudio del Derecho 2",
        "Administración 2",
      ],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Header />

      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          {/* Encabezado de la sección */}
          <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter text-blue-950 sm:text-4xl md:text-5xl">
              Oferta Académica
            </h1>
            <div className="h-1 w-20 rounded bg-blue-600"></div>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              Conoce nuestro plan de estudios estructurado para brindarte la
              mejor preparación académica durante tu bachillerato.
            </p>
          </div>

          {/* Contenedor del Acordeón con estilo de tarjeta */}
          <div className="rounded-xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-6 text-2xl font-semibold text-blue-900">
              Plan de Estudios
            </h2>

            <Accordion type="single" collapsible className="w-full">
              {planDeEstudios.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-b-blue-100"
                >
                  <AccordionTrigger className="text-lg font-medium text-gray-800 hover:text-blue-700 hover:no-underline">
                    {item.semestre}
                  </AccordionTrigger>
                  <AccordionContent>
                    {/* Grid para acomodar las materias en varias columnas si hay espacio */}
                    <ul className="grid gap-2 pt-2 sm:grid-cols-2 md:grid-cols-3">
                      {item.materias.map((materia, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-gray-600"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                          <span className="text-sm leading-tight md:text-base">
                            {materia}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </main>
    </div>
  )
}
