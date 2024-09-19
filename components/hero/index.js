import React from "react";
import Slider from "react-slick";
import Link from 'next/link';


const Hero = (props) => {
    var settings = {
        dots: false,
        arrows: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        fade: true
    };

    return (
        <section className={`wpo-hero-slider ${props.heroClass}`}>
            <div className="hero-container">
                <div className="hero-wrapper">
                    <Slider {...settings}>
                        <div className="hero-slide">
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/slide-1.jpg'})` }}>
                                <div className="container-fluid">
                                    <div className="slide-content">
                                        <div className="slide-title">
                                            <h2>We Fight For Your Justice As Like A Friend.</h2>
                                        </div>
                                        <div className="slide-text">
                                            <p>Law is commonly understood as a system of rules that are created and enforced
                                                through social or government.</p>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="slide-btns">
                                            <Link href="/about" className="theme-btn">Get Started</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="hero-slide">
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/slide-2.jpg'})` }}>
                                <div className="container-fluid">
                                    <div className="slide-content">
                                        <div className="slide-title">
                                            <h2>We Fight For Your Justice As Like A Friend.</h2>
                                        </div>
                                        <div className="slide-text">
                                            <p>Law is commonly understood as a system of rules that are created and enforced
                                                through social or government.</p>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="slide-btns">
                                            <Link href="/about" className="theme-btn">Get Started</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Hero;