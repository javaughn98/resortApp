import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

const Home = () => {
    return(
        <>
        <Hero>
            <Banner title="extravagant rooms" subtitle="deluxe rooms starting at $399">
                <Link to='/rooms' className="btn-primary">Our Rooms</Link>
            </Banner>
        </Hero>

        <Services></Services>
        <FeaturedRooms></FeaturedRooms>
        </>
    );
}



export default Home;
