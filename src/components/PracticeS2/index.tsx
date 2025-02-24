import React from 'react';
import Link from 'next/link';
import Services from '../../pages/api/service';


const PracticeS2 = () => {

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }


    return (
        <section className="wpo-service-section-s2 section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="wpo-section-title">
                            <h2>Our Practice Areas</h2>
                        </div>
                    </div>
                    <div className="col-lg-5 offset-lg-2">
                        <div className="wpo-section-title">
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {Services.map((service, Sitem) => (
                        <div className="col-lg-4 col-md-6 col-12" key={Sitem}>
                            <div className="wpo-service-item">
                                <div className="wpo-service-icon">
                                    <div className="icon">
                                        <i className={service.icon}></i>
                                    </div>
                                </div>
                                <div className="wpo-service-text">
                                    <h2><Link onClick={ClickHandler} href="/practice/[slug]" as={`/practice/${service.slug}`}>{service.sTitle}</Link></h2>
                                    <p>{service.des3}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}


export default PracticeS2;