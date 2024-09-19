import React from 'react'
import Services from '../../api/service';
import Link from 'next/link'
import ins1 from '/public/images/instragram/7.jpg'
import ins2 from '/public/images/instragram/8.jpg'
import ins3 from '/public/images/instragram/9.jpg'
import ins4 from '/public/images/instragram/10.jpg'
import ins5 from '/public/images/instragram/11.jpg'
import ins6 from '/public/images/instragram/12.jpg'
import Image from 'next/image';

const ServiceSidebar = (props) => {

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className="col-lg-4 col-md-8">
            <div className="wpo-single-sidebar">
                <div className="widget case-info-widget">
                    <h2>Case Information</h2>
                    <ul>
                        <li><span>Case Title: </span> Family Issue</li>
                        <li><span>Client: </span> Robert Symon</li>
                        <li><span>Date: </span> 20 January 2021</li>
                        <li><span>Service Value:</span> $5500</li>
                        <li><span>Category: </span>Family Law </li>
                        <li><span>Status : </span> Completed </li>
                        <li><span>live link : </span> <Link onClick={ClickHandler} href="/">http://demo.com</Link> </li>
                    </ul>
                </div>
                <div className="wpo-newsletter-widget widget">
                    <h2>Newsletter</h2>
                    <p>Join 20,000 Sabscribers!</p>
                    <form className="form" onSubmit={SubmitHandler}>
                        <input type="email" placeholder="Email Address" required />
                        <button type="submit">Sign Up</button>
                    </form>
                    <span>By signing up you agree to our <Link href="/">Privecy Policy</Link></span>
                </div>
                <div className="wpo-instagram-widget widget">
                    <h2>Instagram Shot</h2>
                    <ul>
                        <li><Image src={ins1} alt="" /></li>
                        <li><Image src={ins2} alt="" /></li>
                        <li><Image src={ins3} alt="" /></li>
                        <li><Image src={ins4} alt="" /></li>
                        <li><Image src={ins5} alt="" /></li>
                        <li><Image src={ins6} alt="" /></li>
                    </ul>
                </div>
                <div className="wpo-contact-widget widget">
                    <h2>How We Can <br /> Help You!</h2>
                    <p>labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                    <Link href="/contact">Contact Us</Link>
                </div>
            </div>
        </div>

    )
}

export default ServiceSidebar;