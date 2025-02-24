import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Attorneys from "@/pages/api/attorneys";


const Attorney = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const [isActive, setActive] = useState(false);

    const toggleClass = (Id: any) => {
        setActive(Id === isActive ? null : Id);
    };

    return (
        <section className="wpo-team-section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="wpo-section-title">
                            <h2>Meet The Team</h2>
                        </div>
                    </div>
                    <div className="col-lg-5 offset-lg-2">
                        <div className="wpo-section-title">
                            <p></p>
                        </div>
                    </div>
                </div>

                <div className="wpo-team-wrap">
                    <div className="row">
                        {Attorneys.map((attorney, aitem) => (
                            <div className="col col-lg-3 col-md-6 col-12" key={aitem}>
                                <div className="wpo-team-item">
                                    <div className="wpo-team-img">
                                        <Image className={"contain-size"} src={attorney.AtImg} alt=""/>
                                        {/*@ts-ignore*/}
                                        <div className={`social ${isActive === attorney.Id ? "active" : ""}`}>
                                            <ul>
                                                <li className="switch" onClick={() => toggleClass(attorney.Id)}><i
                                                    className="ti-plus"></i></li>
                                                <li className="on"><Link href="/"><i className="ti-facebook"></i></Link>
                                                </li>
                                                <li className="on"><Link href="/"><i
                                                    className="ti-twitter-alt"></i></Link></li>
                                                <li className="on"><Link href="/"><i
                                                    className="ti-instagram"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="wpo-team-text">
                                        <h2><Link onClick={ClickHandler} href="/attorneys-single/[slug]"
                                                  as={`/attorneys-single/${attorney.slug}`}>{attorney.name}</Link></h2>
                                        <span>{attorney.title}</span>
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

export default Attorney;