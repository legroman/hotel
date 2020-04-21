import React, {Component} from "react";
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/all";
import Title from "./Title";

export default class Services extends Component{
    state = {
      services: [
          {
            icon: <FaCocktail/>,
              title: "Free Cocktails",
              info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur consequuntur cumque cupiditate dolor"
          },
          {
              icon: <FaHiking/>,
              title: "Endless Hiking",
              info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur consequuntur cumque cupiditate dolor"
          },
          {
              icon: <FaShuttleVan/>,
              title: "Free Shuttle",
              info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur consequuntur cumque cupiditate dolor"
          },
          {
              icon: <FaBeer/>,
              title: "Strongest Beer",
              info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur consequuntur cumque cupiditate dolor"
          },
      ]
    };

    render() {
        return (
            <section className="services">
                <Title title="services"/>
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
        );
    }
}