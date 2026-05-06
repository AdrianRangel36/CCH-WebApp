import React from "react"
import { Header } from "./Components/Header"

const Home: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-10">
          <h1 className="text-4xl font-bold tracking-tight">
            Bienvenido a nuestra escuela
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            El siguiente componente será el Hero. ¡Vamos muy bien!
          </p>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default Home
