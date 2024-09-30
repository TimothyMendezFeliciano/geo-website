import React from 'react'

const Features2 = () => {


     const featres = [
         {
            fIcon:'fi flaticon-badge',
            title:'Incentives Law',
            des:'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis.',      
         },
         {
            fIcon:'fi flaticon-diary',
            title:'Corportate Law',
            des:'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis.',      
         },
         {
            fIcon:'fi flaticon-support',
            title:'Notary Services',
            des:'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis.',      
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