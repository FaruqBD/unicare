import React from 'react';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import OurTeam from '../OurTeam/OurTeam';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services limit="6"></Services>
            <OurTeam></OurTeam>
            <Contact></Contact>
        </div>
    );
};

export default Home;