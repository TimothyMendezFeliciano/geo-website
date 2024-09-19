import React from "react";
import Link from 'next/link';
import VideoModal from '../ModalVideo'
import himg from '/public/images/slider/1.png'

import simg1 from '/public/images/slider/shape-1.png'
import simg2 from '/public/images/slider/shape-2.png'
import Image from "next/image";




const Hero2 =() => {
    return (
        <section className="static-hero">
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container">
                        <div data-swiper-parallax="300" className="slide-title">
                            <h2>We Fight For Your Justice As Like A Friend.</h2>
                        </div>
                        <div data-swiper-parallax="400" className="slide-text">
                            <p>Law is commonly understood as a system of rules that are created and enforced
                                through social or government.</p>
                        </div>
                        <div className="clearfix"></div>
                        <div data-swiper-parallax="500" className="slide-btns">
                            <Link href="/about" className="theme-btn">Explore more</Link>
                            <VideoModal/>
                        </div>
                        <div className="lawyer-pic">
                            <Image src={himg} alt=""/>
                            <div className="lawyer-shape">
                                <div className="shape-1"><Image src={simg1} alt=""/></div>
                                <div className="shape-2"><Image src={simg2} alt=""/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}



export default Hero2;