import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar';
import PageTitle from "../../components/pagetitle";
import CheckoutSection from '../../components/CheckoutSection'
import Scrollbar from '../../components/scrollbar'
import {connect} from "react-redux";
import Footer from '../../components/footer';
import Logo from '/public/images/logo.svg'

const CheckoutPage =({cartList}) => {
    return (
        <Fragment>
            <Navbar topbarNone={'wpo-header-style-1'} hclass={'shop-header'} Logo={Logo}/>
            <PageTitle pageTitle={'Checkout'} pagesub={'Checkout'}/> 
            <CheckoutSection cartList={cartList}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};

const mapStateToProps = state => {
    return {
        cartList: state.cartList.cart,
        symbol: state.data.symbol
    }
};

export default connect(mapStateToProps)(CheckoutPage);

