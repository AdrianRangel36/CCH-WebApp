import React from "react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@workspace/ui/components/navigation-menu"
import { cn } from "@workspace/ui/lib/utils"

export function Header() {
  // Definimos la estructura del menú. Algunos tienen 'items' (submenús).
  const menuItems = [
    { title: "Inicio", href: "/", trigger: false },
    { title: "Institución", href: "#", trigger: true, items: ["Misión", "Visión", "Historia"] },
    { title: "Oferta Académica", href: "#", trigger: true, items: ["Carreras Técnicas", "Cursos"] },
    { title: "Aspirantes", href: "#", trigger: true, items: ["Proceso", "Requisitos"] },
    { title: "Alumnos", href: "#", trigger: true, items: ["Servicios", "Reglamento"] },
    { title: "Convocatorias", href: "#", trigger: true, items: ["Actuales", "Archivo"] },
    { title: "Contacto", href: "#", trigger: false },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Sección de Logos (A la izquierda) */}
        <div className="mr-4 flex items-center gap-x-3">
          {/* MARCADOR DE POSICIÓN LOGO 1: DGT */}
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
            <span className="leading-tight text-center">DGT<br/>ETI</span>
          </div>
          {/* MARCADOR DE POSICIÓN LOGO 2: SELLO 130 */}
          <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-blue-900 bg-blue-50 text-[10px] font-semibold text-blue-900">
            <span className="leading-tight text-center">SELLO<br/>130</span>
          </div>
        </div>
        
        {/* Menú de Navegación (A la derecha) */}
        <NavigationMenu className="ml-auto hidden md:flex"> {/* Oculto en móvil (md:flex), shadcn recomienda esto */}
          <NavigationMenuList>
            {menuItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                {item.trigger ? (
                  <>
                    {/* Elemento con submenú (con flecha) */}
                    <NavigationMenuTrigger className="bg-transparent hover:bg-accent hover:text-accent-foreground">{item.title}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-3 p-4 md:w-[300px] md:grid-cols-1">
                        {item.items?.map((subItem) => (
                          <li key={subItem}>
                            <NavigationMenuLink asChild>
                              <a
                                href={item.href}
                                className={cn(
                                  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:focus:text-accent-foreground"
                                )}
                              >
                                <div className="text-sm font-medium leading-none">{subItem}</div>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  // Elemento simple (sin flecha)
                  <NavigationMenuLink href={item.href} className={cn(navigationMenuTriggerStyle(), item.title === "Inicio" ? "text-blue-600" : "")}>
                    {item.title}
                  </NavigationMenuLink>
                )
                }
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