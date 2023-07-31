import React from "react"
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import { Link } from "react-router-dom"
import { Footer } from "../components/Footer"

export const About = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="about">
          <Link to="/" className="btn-primary">
            Return home
          </Link>
        </Banner>
      </Hero>
      <Footer/>
    </>
  )
}
