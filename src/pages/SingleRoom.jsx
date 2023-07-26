import React from "react"
import defaultBcg from "../images/room-1.jpeg"
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import { Link, useParams } from "react-router-dom"
import { RoomContext } from "../context"
import StyledHero from "../components/StyledHero"
import { Footer } from "../components/Footer"

export default function SingleRoom() {
  const { slug } = useParams()
  const { getRoom } = React.useContext(RoomContext)
  const room = getRoom(slug)

  if (!room) {
    return (
      <>
        {window.scrollTo(0, 0)}
        <div className="error">
          <h3>no such room could be found</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      </>
    )
  }

  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = room

  // array destructuring for rendering all images but the main/cover image
  const [mainImg, ...defaultImg] = images
  return (
    <>
      {window.scrollTo(0, 0)}
      <StyledHero img={mainImg}>
        {/* <Hero hero="roomsHero"> */}
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </Banner>
        {/* </Hero> */}
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          {defaultImg.map((item, index) => {
            return <img key={index} src={item} alt={name} />
          })}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price: R${price}</h6>
            <h6>size: {size} m²</h6>
            <h6>
              max capacity :{" "}
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
            <h6>{breakfast && "free breakfast included"}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>extras</h6>
        <ul className="extras">
          {extras.map((item, index) => {
            return <li key={index}>- {item}</li>
          })}
        </ul>
      </section>
      <Footer />
    </>
  )
}
