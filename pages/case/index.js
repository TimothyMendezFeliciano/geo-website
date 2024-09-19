import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import CaseStudies from '../../components/CaseStudies'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '/public/images/logo.svg'

const CasePage =() => {
    return(
        <Fragment>
            <Navbar Logo={Logo}/>
            <PageTitle pageTitle={'Case Stadies'} pagesub={'Resent Case Studies'}/> 
            <CaseStudies/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default CasePage;

