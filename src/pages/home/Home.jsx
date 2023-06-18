import React from 'react';
import Carosal from '../../components/slider/Carosal';
import UnderCarosal from '../../components/underCarosal/UnderCarosal';
import Services from '../../components/services/Services';

const Home = () => {
    return (
        <div className='z-0 bg-[#FFFFFF]'>
            <Carosal></Carosal>
            <UnderCarosal></UnderCarosal>
            <Services></Services>
        </div>
    );
};

export default Home;