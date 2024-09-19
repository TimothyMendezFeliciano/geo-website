import React from 'react'
import Link from 'next/link';
// import Logo from '/public/images/logo-2.svg'
import Services from '../../api/service';

import ins1 from '/public/images/ft-icon/1.png'
import ins2 from '/public/images/ft-icon/2.png'
import ins3 from '/public/images/ft-icon/3.png'
import ins4 from '/public/images/ft-icon/4.png'
import Image from 'next/image';


const Footer = (props) =>{

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

  return(
    <footer className="wpo-site-footer">
        <div className="wpo-upper-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget about-widget">
                            <div className="logo widget-title">
                                {/*<Image src={Logo} alt="logo"/>*/}
                            </div>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>

                        </div>
                    </div>
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget link-widget">
                            <div className="widget-title">
                                <h3>Our Services </h3>
                            </div>
                            <ul>
                                {Services.slice(1, 5).map((service, Sitem) => (
                                    <li key={Sitem}><Link onClick={ClickHandler} href="/practice/[slug]" as={`/practice/${service.slug}`}>{service.sTitle}</Link></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="widget tag-widget">
                            <div className="widget-title">
                                <h3>Browse by Tag </h3>
                            </div>
                            <ul>
                                <li><Link onClick={ClickHandler} href="/practice/Personal-Injury">Lawyer</Link></li>
                                <li><Link onClick={ClickHandler} href="/practice/Family-Law">Business</Link></li>
                                <li><Link onClick={ClickHandler} href="/practice/Personal-Injury">Injury</Link></li>
                                <li><Link onClick={ClickHandler} href="/practice/Family-Law">Real Estate</Link></li>
                                <li><Link onClick={ClickHandler} href="/practice/Personal-Injury">Medical</Link></li>
                                <li><Link onClick={ClickHandler} href="/practice/Real-Estate-Law">Criminal</Link></li>
                                <li><Link onClick={ClickHandler} href="/practice/Personal-Injury">Politics</Link></li>
                                <li><Link onClick={ClickHandler} href="/practice/Family-Law">Law</Link></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="col col-lg-2 col-md-6 col-sm-12 col-12">
                        <div className="widget social-widget">
                            <div className="widget-title">
                                <h3>Social Media</h3>
                            </div>
                            <ul>
                                <li><Link onClick={ClickHandler} href="/"><i><Image src={ins1} alt=""/></i> Facebook</Link></li>
                                <li><Link onClick={ClickHandler} href="/"><i><Image src={ins2} alt=""/></i> Twitter</Link></li>
                                <li><Link onClick={ClickHandler} href="/"><i><Image src={ins3} alt=""/></i> Instagram</Link></li>
                                <li><Link onClick={ClickHandler} href="/"><i><Image src={ins4} alt=""/></i> Youtube</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="wpo-lower-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <p className="copyright"> Copyright &copy; 2023 Canun by <Link onClick={ClickHandler} href="/">wpOceans</Link>. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
} 

export default Footer;