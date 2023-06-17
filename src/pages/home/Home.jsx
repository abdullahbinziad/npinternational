import React from 'react';
import Carosal from '../../components/slider/Carosal';
import UnderCarosal from '../../components/underCarosal/UnderCarosal';

const Home = () => {
    return (
        <div className='z-0'>
            <Carosal></Carosal>
            <UnderCarosal></UnderCarosal>
        </div>
    );
};

export default Home;