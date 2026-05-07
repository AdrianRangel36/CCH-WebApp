import React from "react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@workspace/ui/components/navigation-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@workspace/ui/components/sheet"
// import { Menu } from "lucide-react" 
import { cn } from "@workspace/ui/lib/utils"
import { Link } from "react-router-dom"

export const Header: React.FC = () => {
  const menuItems = [
    { title: "Inicio", link: "/", trigger: false },
    {
      title: "Institución",
      link: "/Institucion",
      trigger: false,
      items: ["Identidad Institucional"],
    },
    {
      title: "Oferta Académica",
      link: "/Oferta-Educativa",
      trigger: false,
      items: ["Plan de estudios"],
    },
    {
      title: "Aspirantes",
      link: "/aspirantes",
      trigger: false,
      items: ["Proceso", "Requisitos"],
    },
    {
      title: "Alumnos",
      link: "/alumnos",
      trigger: false,
      items: ["Servicios", "Reglamento"],
    },
    {
      title: "Convocatorias",
      link: "/convocatorias",
      trigger: false,
      items: ["Actuales", "Archivo"],
    },
    { title: "Contacto", link: "/contacto", trigger: false },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container flex h-24 items-center">
        {/* Sección de Logos (A la izquierda) */}
        <div className="mr-4 flex items-center gap-x-3">
          {/* MARCADOR DE POSICIÓN LOGO 2: SELLO 130 */}
          <div className="ml-2 flex items-center justify-center rounded-full border-2 border-blue-900">
            <img className="h-20 w-20 rounded-full" src="./logo.jpeg" />
          </div>
        </div>

        {/* Menú de Navegación (A la derecha) */}
        <NavigationMenu className="ml-auto hidden sm:flex">
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
        <div className="ml-auto md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 text-blue-950" aria-label="Abrir menú">
                {/* <Menu className="h-8 w-8" /> */}oki
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-75 bg-white">
              <SheetHeader>
                <SheetTitle className="text-left text-blue-950">
                  Menú
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-4">
                {menuItems.map((item) => (
                  <div key={item.title} className="flex flex-col gap-2">
                    <Link
                      to={item.link}
                      className={cn(
                        "text-lg font-medium",
                        item.title === "Inicio"
                          ? "text-blue-600"
                          : "text-blue-950"
                      )}
                    >
                      {item.title}
                    </Link>
                    {/* Si tiene sub-elementos, los mostramos indentados */}
                    {item.items && (
                      <div className="ml-4 flex flex-col gap-2 border-l pl-4">
                        {item.items.map((sub) => (
                          <a
                            key={sub}
                            href="#"
                            className="text-sm text-gray-500 hover:text-blue-600"
                          >
                            {sub}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
