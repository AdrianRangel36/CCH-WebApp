import React from "react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@workspace/ui/components/navigation-menu"
import { cn } from "@workspace/ui/lib/utils"
import { Link } from "react-router-dom"

export const Header: React.FC = () => {
  const menuItems = [
    { title: "Inicio", link: "/", trigger: false },
    {
      title: "Institución",
      link: "/Institucion",
      trigger: true,
      items: ["Identidad Institucional"],
    },
    {
      title: "Oferta Académica",
      link: "/Oferta-Educativa",
      trigger: true,
      items: ["Carreras Técnicas"],
    },
    {
      title: "Aspirantes",
      link: "/aspirantes",
      trigger: true,
      items: ["Proceso", "Requisitos"],
    },
    {
      title: "Alumnos",
      link: "/alumnos",
      trigger: true,
      items: ["Servicios", "Reglamento"],
    },
    {
      title: "Convocatorias",
      link: "/convocatorias",
      trigger: true,
      items: ["Actuales", "Archivo"],
    },
    { title: "Contacto", link: "/contacto", trigger: false },
  ]

  return (
    <header className="sticky  top-0 z-50 w-full border-b backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container flex h-24 items-center">
        {/* Sección de Logos (A la izquierda) */}
        <div className="mr-4 flex items-center gap-x-3">
          {/* MARCADOR DE POSICIÓN LOGO 2: SELLO 130 */}
          <div className="flex  items-center ml-2 justify-center rounded-full border-2 border-blue-900 ">
            <img className="rounded-full h-20 w-20"  src="./logo.jpeg" />
          </div>
        </div>

        {/* Menú de Navegación (A la derecha) */}
        <NavigationMenu className="ml-auto hidden md:flex">
          {" "}
          {/* Oculto en móvil (md:flex), shadcn recomienda esto */}
          <NavigationMenuList>
            {menuItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                {item.trigger ? (
                  <>
                    {/* Elemento con submenú (con flecha) */}
                    <NavigationMenuTrigger className="text-md hover:bg-accent hover:text-accent-foreground">
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-50 gap-3 p-4 md:w-75 md:grid-cols-1">
                        {item.items?.map((subItem) => (
                          <li key={subItem}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={item.link}
                                className={cn(
                                  "block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:focus:text-accent-foreground"
                                )}
                              >
                                <div className="text-sm leading-none font-medium">
                                  {subItem}
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  // Elemento simple (sin flecha)
                  <NavigationMenuLink asChild className="text-md">
                    <Link
                      to={item.link}
                      className={cn(item.title === "Inicio" && "text-blue-600")}
                    >
                      {item.title}
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Espacio para un botón de menú móvil (opcional) */}
        {/* <div className="ml-auto md:hidden">Mobile Menu Trigger</div> */}
      </div>
    </header>
  )
}
