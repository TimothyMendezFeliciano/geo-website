import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Scrollbar from '../../components/scrollbar'
import { useRouter } from 'next/router'
import Cases from '../../api/case'
import Link from 'next/link'
import Benefits from './benefits'
import ServiceSidebar from './sidebar'
import Footer from '../../components/footer'
import Logo from '/public/images/logo.svg'
import Image from 'next/image';


const SeviceSinglePage = (props) => {
    const router = useRouter()

    const CaseDetails = Cases.find(item => item.slug === router.query.slug)

    return (
        <Fragment>
            <Navbar Logo={Logo} />
            <PageTitle pageTitle={CaseDetails?.cTitle} pagesub={'Case Single'} />
            <section className="service-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-8 col-12">
                            <div className="service-content">
                                <div className="img-holder">
                                    <Image src={CaseDetails?.cImg} alt="" />
                                </div>
                                <h2>{CaseDetails?.cTitle}</h2>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. </p>
                                <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour.</p>
                                <div className="wpo-case-single-sub-img">
                                    <ul>
                                        <li><Image src={CaseDetails?.ssImg1} alt="" /></li>
                                        <li><Image src={CaseDetails?.ssImg2} alt="" /></li>
                                    </ul>

                                </div>
                                <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise.</p>
                                <ul>
                                    <li>Randomised words which don't look even slightly believable.</li>
                                    <li>It uses a dictionary of over 200 Latin words</li>
                                    <li>All the Lorem Ipsum generators on the Internet tend to repeat predefined.</li>
                                    <li>You need to be sure there isn't anything embarrassing hidden.</li>
                                    <li>The generated Lorem Ipsum is therefore.</li>
                                </ul>
                                <Benefits />
                                <div className="pagi">
                                    <ul>
                                        <li><Link href="/case/Family-Law">Previous</Link></li>
                                        <li><Link href="/case/Criminal-Law">Next</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <ServiceSidebar />
                    </div>
                </div>
            </section>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default SeviceSinglePage;
