import React, { Component } from 'react'
import { Collapse, CardBody, Card } from 'reactstrap';
import Link from 'next/link';
const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/home',
        submenu: [
            {
                id: 11,
                title: 'Home style 1',
                link: '/home'
            },
            {
                id: 12,
                title: 'Home style 2',
                link: '/home2'
            },
            {
                id: 13,
                title: 'Home style 3',
                link: '/home3'
            },
        ]
    },

    {
        id: 2,
        title: 'About',
        link: '/about',
    },

{
    id: 3,
        title: 'Pages',
        link: '/',
        submenu: [
            {
                id: 31,
                title: 'Attorneys',
                link: '/attorneys'
            },
            {
                id: 32,
                title: 'Attorneys single',
                link: '/attorneys-single/David-Harry'
            },
            {
                id: 33,
                title: 'Pricing',
                link: '/pricing'
            },
            {
                id: 34,
                title: '404 Error',
                link: '/404'
            },
            {
                id: 35,
                title: 'Login',
                link: '/login'
            },
            {
                id: 36,
                title: 'Register',
                link: '/register'
            },
        ]
    },
{
    id: 4,
        title: 'Practice Area',
        link: '/practice',
        submenu: [
            {
                id: 41,
                title: 'Practice Area',
                link: '/practice'
            },
            {
                id: 42,
                title: 'Practice Style 2',
                link: '/practice-s2'
            },
            {
                id: 43,
                title: 'Practice Single',
                link: '/practice/Personal-Injury'
            }
        ]
    },

    {
        id: 7,
        title: 'Cases',
        link: '/',
        submenu: [
            {
                id: 71,
                title: 'Cases',
                link: '/case'
            },
            {
                id: 75,
                title: 'Cases Single',
                link: '/case/Criminal-Law'
            }
            
        ]
    },
    {
        id: 6,
            title: 'Shop',
            link: '/shop',
            submenu: [
                {
                    id: 61,
                    title: 'Shop',
                    link: '/shop'
                },
                {
                    id: 62,
                    title: 'Shop Single',
                    link: '/product-single/Principles-and-Policies'
                },
                {
                    id: 63,
                    title: 'Cart',
                    link: '/cart'
                },
                {
                    id: 64,
                    title: 'Checkout',
                    link: '/checkout'
                }
            ]
        },

    {
        id: 5,
        title: 'Blog',
        link: '/blog',
        submenu: [
            {
                id: 51,
                title: 'Blog',
                link: '/blog'
            },
            {
                id: 52,
                title: 'Blog Left sidebar',
                link: '/blog-left'
            },
            {
                id: 53,
                title: 'Blog full width',
                link: '/blog-fullwidth'
            },
            {
                id: 54,
                title: 'Blog single',
                link: '/blog-single/Can-Do-About-Law'
            },
            {
                id: 55,
                title: 'Blog single Left sidebar',
                link: '/blog-single-left-sidebar/Can-Do-About-Law'
            },
            {
                id: 56,
                title: 'Blog single Left sidebar',
                link: '/blog-single-fullwidth/Can-Do-About-Law'
            },
        ]
    },
    {
        id: 88,
        title: 'Contact',
        link: '/contact',
    }
    
    
]


export default class MobileMenu extends Component {

    state = {
        isMenuShow: false,
        isOpen: 0,
    }

    menuHandler = () => {
        this.setState({
            isMenuShow: !this.state.isMenuShow
        })
    }

    setIsOpen = id => () => {
        this.setState({
            isOpen: id === this.state.isOpen ? 0 : id
        })
    }

    render() {

        const { isMenuShow, isOpen } = this.state;

        const ClickHandler = () =>{
            window.scrollTo(10, 0);
         }

        return (
            <div>
                <div className={`mobileMenu ${isMenuShow ? 'show' : ''}`}>
                    <div className="menu-close">
                         <div className="clox" onClick={this.menuHandler}><i className="ti-close"></i></div>
                    </div>

                    <ul className="responsivemenu">
                        {menus.map(item => {
                            return (
                                <li key={item.id}>
                                    {item.submenu ? <p onClick={this.setIsOpen(item.id)}>
                                        {item.title}
                                        {item.submenu ? <i className="fa fa-angle-right" aria-hidden="true"></i> : ''}
                                    </p> : <Link onClick={ClickHandler} href={item.link}>{item.title}</Link>}
                                    {item.submenu ?
                                    <Collapse isOpen={item.id === isOpen}>
                                        <Card>
                                            <CardBody>
                                                <ul>
                                                    {item.submenu.map(submenu => (
                                                        <li key={submenu.id}><Link onClick={ClickHandler} className="active" href={submenu.link}>{submenu.title}</Link></li>
                                                    ))}
                                                </ul>
                                            </CardBody>
                                        </Card>
                                    </Collapse>
                                    : ''}
                                </li>
                            )
                        })}
                    </ul>

                </div>

                <div className="showmenu" onClick={this.menuHandler}>
                    <button type="button" className="navbar-toggler open-btn">
                            <span className="icon-bar first-angle"></span>
                            <span className="icon-bar middle-angle"></span>
                            <span className="icon-bar last-angle"></span>
                    </button>
                </div>
            </div>
        )
    }
}
