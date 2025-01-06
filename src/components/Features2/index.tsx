import React from 'react'

const Features2 = () => {


     const featres = [
         {
            fIcon:'fi flaticon-badge',
            title:'Incentives Law',
            des:'Our incentives law services in Puerto Rico focus on helping businesses and individuals navigate and secure tax benefits, credits, and exemptions offered under the island’s diverse economic programs. From eligibility assessment to application and compliance, we provide expert legal guidance to ensure clients maximize available incentives tailored to their industry and business goals.',
         },
         {
            fIcon:'fi flaticon-diary',
            title:'Corportate Law',
            des:'Our corporate law services cover all aspects of business formation, governance, mergers, acquisitions, and compliance. We provide expert legal advice to help businesses establish a strong legal foundation, ensure regulatory compliance, and navigate complex transactions tailored to their specific needs.',
         },
         {
            fIcon:'fi flaticon-support',
            title:'Notary Services',
            des:'We offer certified assistance for legalizing documents, including contracts, property transfers, wills, and affidavits. We ensure all notarial acts are performed with precision and in compliance with Puerto Rican law, providing clients with reliable and secure documentation for personal and business needs.',
         },
         
     ]


    return(
        <section className="wpo-features-section-s2 section-padding">
            <div className="container">
                <div className="wpo-features-wrapper">
                    <div className="row">
                        {featres.map((featres, fitem) => (
                            <div className="col-lg-4 col-md-6 col-12" key={fitem}>
                                <div className="wpo-features-item">
                                    <div className="wpo-features-icon">
                                        <div className="icon">
                                            <i className={featres.fIcon}></i>
                                        </div>
                                    </div>
                                    <div className="wpo-features-text">
                                        <h2>{featres.title}</h2>
                                        <p>{featres.des}</p>
                                    </div>
                                    <div className="visible-icon">
                                        <i className={featres.fIcon}></i>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features2;