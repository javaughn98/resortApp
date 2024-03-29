import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Free Cocktails",
                info: 'He said he was not there yesterday; however, many people saw him there.'
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info: 'He said he was not there yesterday; however, many people saw him there.'
            },
            {
                icon: <FaShuttleVan />,
                title: "Free Shuttle",
                info: 'He said he was not there yesterday; however, many people saw him there.'
            },
            {
                icon: <FaBeer />,
                title: "Exqisite Beer",
                info: 'He said he was not there yesterday; however, many people saw him there.'
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services"></Title>
                <div className="services-center">
                    {this.state.services.map((item,index) => {
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
