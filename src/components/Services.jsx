import React, { Component } from "react"
import { FaWifi, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa"
import Title from "./Title"
import {GiCapybara} from 'react-icons/gi'

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <GiCapybara />,
        title: "Friendly Capybaras",
        info: "The funniest annimal in the world is present on our resort",
      },
      {
        icon: <FaWifi />,
        title: "WiFi",
        info: "Outstanding connection, even underwater!",
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info: "Don't worry about this, we take care of you.",
      },
      {
        icon: <FaBeer />,
        title: "nice beer",
        info: "Always a cold beer awaiting for you.",
      },
    ],
  }
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            )
          })}
        </div>
      </section>
    )
  }
}
