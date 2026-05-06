import React from "react"
import { Header } from "@/components/Header"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

export const Institucion: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      {/* El Header que ya creamos */}
      <Header />

      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Título y descripción de la sección */}
          <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter text-blue-950 sm:text-4xl md:text-5xl">
              Nuestra Institución
            </h1>
            <div className="h-1 w-20 rounded bg-blue-600"></div>
            <p className="max-w-225 text-muted-foreground md:text-lg">
              Conoce los principios y metas que nos impulsan a formar a la
              juventud duranguense con excelencia académica y humana.
            </p>
          </div>

          {/* Cuadrícula de Tarjetas (1 columna en móvil, 3 en pantallas grandes) */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* TARJETA 1: MISIÓN */}
            <Card className="flex flex-col shadow-md transition-shadow hover:shadow-lg">
              <CardHeader className="bg-blue-900/5 pb-4">
                <CardTitle className="text-2xl text-blue-900">Misión</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 space-y-4 pt-4 text-sm leading-relaxed text-gray-700 md:text-base">
                <p>
                  El Colegio de Ciencias y Humanidades de la Universidad Juárez
                  del Estado de Durango, consolida un proyecto universitario
                  incluyente en la formación de Recursos Humanos y Capital
                  Intelectual en Educación Media Superior.
                </p>
                <p>
                  “Libertad, Participación y Critica”, lema de nuestro CCH y
                  herencia de las cátedras con alumnos formados en contextos de
                  respeto, tolerancia y diversidad global; es por ello que
                  tenemos presente en nuestro modelo educativo, planes y
                  programas de estudios; el modelo educativo de la UJED, la
                  Reforma Integral de la Educación Media Superior y las
                  actualizaciones del Nuevo Modelo Educativo. Todo esto para
                  mantenerse actualizado y ofrecer la mejor calidad educativa
                  pertinente a nuestra región y a la sociedad duranguense.
                </p>
              </CardContent>
            </Card>

            {/* TARJETA 2: VISIÓN */}
            <Card className="flex flex-col shadow-md transition-shadow hover:shadow-lg">
              <CardHeader className="bg-blue-900/5 pb-4">
                <CardTitle className="text-2xl text-blue-900">Visión</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 space-y-4 pt-4 text-sm leading-relaxed text-gray-700 md:text-base">
                <p>
                  El Colegio de Ciencias y Humanidades en equilibrio con la
                  Universidad Juárez del Estado de Durango participará
                  activamente en la creación y actualización de los Modelos
                  Educativos, Planes y Programas de Estudio, Proyectos
                  educativos académicos y de infraestructura que permitan
                  consolidar la meta de ofrecer a la sociedad los egresados
                  responsables y preparados integralmente para fortalecer a la
                  sociedad duranguense.
                </p>
                <p>
                  Esta visión contempla las demandas de la sociedad que fueron
                  plasmadas en el nuevo modelo educativo y que reflejan un
                  desarrollo global de México al año 2030.
                </p>
              </CardContent>
            </Card>

            {/* TARJETA 3: OBJETIVOS */}
            <Card className="flex flex-col shadow-md transition-shadow hover:shadow-lg md:col-span-2 lg:col-span-1">
              <CardHeader className="bg-blue-900/5 pb-4">
                <CardTitle className="text-2xl text-blue-900">
                  Objetivos
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 space-y-4 pt-4 text-sm leading-relaxed text-gray-700 md:text-base">
                <p>
                  La educación media superior es hoy en día considerada como
                  educación obligatoria para todos los mexicanos, además tiene
                  una función formativa y propedéutica, coincide con el promedio
                  de edad media en que los alumnos viven su adolescencia con
                  todo lo que esto implica para ellos, sus familias y la
                  sociedad.
                </p>
                <p>
                  Es por ello que este proceso educativo considera procesos de
                  calidad en un contexto de docentes profesionales capacitados y
                  especializados en un modelo educativo universitario que
                  contempla el óptimo desarrollo de la juventud duranguense.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
