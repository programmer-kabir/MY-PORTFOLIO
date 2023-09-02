import React, { useEffect } from 'react';
import Banner from '../../Components/Home/Banner/Banner';
import About from '../../Components/Home/About/About';
import Skills from '../../Components/Home/Skills/Skills';
import Project from '../../Components/Home/Project/Project';
import Contact from '../../Components/Home/Contact/Contact';
import Aos from "aos";
import "aos/dist/aos.css";
const Home = () => {
    useEffect(() => {
        Aos.init();
      }, []);
    return (
        <div>
            <Banner />
            <About />
            <Skills />
            <Project />
            <Contact />
        </div>
    );
};

export default Home;