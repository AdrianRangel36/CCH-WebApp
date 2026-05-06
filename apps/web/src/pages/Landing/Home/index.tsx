import React from "react"
import { Header } from "../../../components/Header"
import { Hero } from "./Components/Hero"
import { Footer } from "./Components/Footer"

const Home: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <Footer />
    </div>
  )
}

export default Home
