import React from 'react';
import Cards from '../Cards/Cards';
import Dropdowns from '../Dropdowns/Dropdowns';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Cards></Cards>
            <Dropdowns></Dropdowns>
        </div>
    );
};

export default Home;