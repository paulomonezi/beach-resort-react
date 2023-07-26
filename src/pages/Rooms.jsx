import React from "react"
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import { Link } from "react-router-dom"
import RoomContainer from "../components/RoomContainer"
import { Footer } from "../components/Footer"

export const Rooms = () => {
  return (
    <>
    {window.scrollTo(0, 0)}
      <Hero hero="roomsHero">
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
            Return home
          </Link>
        </Banner>
      </Hero>
    <RoomContainer/>
    <Footer/>
    </>
  )
}
