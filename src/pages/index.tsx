import React, {Fragment} from 'react';
import Navbar from '../components/Navbar'
import Hero from '../components/hero'
import Features2 from '../components/Features2'
import About from '../components/about'
import Practice2 from '../components/PracticeS2'
import CaseStudies from '../components/CaseStudies'
import Testimonial from '../components/Testimonial'
import Attorney from '../components/attorneys'
import Consultinencey from '../components/Consultinencey'
import BlogSection from '../components/BlogSection'
import Footer from '../components/footer'
import Scrollbar from '../components/scrollbar'
import Logo from '../../public/images/GEO-logo-1.png'


const Index =() => {
    return(
        <Fragment>
            <Navbar hclass={'wpo-header-style-2'} Logo={Logo} topbarNone={'header-without-topbar'}/>
            <Hero heroClass={'wpo-hero-slider-s2'}/>
            <Features2/>
            <About/>
            <Practice2/>
            {/*<Testimonial/>*/}
            <Attorney/>
            <Consultinencey/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default Index;