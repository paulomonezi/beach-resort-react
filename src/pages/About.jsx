import React from "react"
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import { Link } from "react-router-dom"
import { Footer } from "../components/Footer"
import StyledAbout from "../components/StyledAbout"

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
      <StyledAbout>
        <div>
          Developed using React, Context API and Contentful CMS - See further
          information on{" "}
          <a href="https://github.com/paulomonezi/beach-resort-react" target="">
            readme
          </a>
        </div>
      </StyledAbout>
      <Footer />
    </>
  )
}
