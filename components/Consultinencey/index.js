import Image from 'next/image';
import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import cimg from '/public/images/consult.png'


const Consultinencey = () => {

    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = e => {
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();
            setForms({
                name: '',
                email: '',
                subject: '',
                phone: '',
                message: ''
            })
        } else {
            validator.showMessages();
        }
    };

    return (
        <section className="wpo-consultancy-section section-padding">
            <div className="container">
                <div className="wpo-consultancy-section-wrapper">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="consult-img">
                                <Image src={cimg} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-12">
                            <div className="wpo-consultancy-form-area">
                                <div className="wpo-section-title">
                                    <h2>Need Consultancy,
                                        Request A Free Quote</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                                    </p>
                                </div>
                                <form onSubmit={(e) => submitHandler(e)} className="form">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-6 col-12">
                                            <div className="form-field">
                                                <input
                                                    value={forms.name}
                                                    className="form-control"
                                                    type="text"
                                                    name="name"
                                                    onBlur={(e) => changeHandler(e)}
                                                    onChange={(e) => changeHandler(e)}
                                                    placeholder="Your Name" />
                                                {validator.message('name', forms.name, 'required|alpha_space')}
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <div className="form-field">
                                                <input
                                                    value={forms.email}
                                                    className="form-control"
                                                    type="email"
                                                    name="email"
                                                    onBlur={(e) => changeHandler(e)}
                                                    onChange={(e) => changeHandler(e)}
                                                    placeholder="Your Email" />
                                                {validator.message('email', forms.email, 'required|email')}
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <div className="form-field">
                                                <input
                                                    value={forms.phone}
                                                    className="form-control"
                                                    type="phone"
                                                    name="phone"
                                                    onBlur={(e) => changeHandler(e)}
                                                    onChange={(e) => changeHandler(e)}
                                                    placeholder="Your phone" />
                                                {validator.message('phone', forms.phone, 'required|phone')}
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <div className="form-field">
                                                <select
                                                    onBlur={(e) => changeHandler(e)}
                                                    onChange={(e) => changeHandler(e)}
                                                    value={forms.subject}
                                                    className="form-control"
                                                    type="text"
                                                    name="subject">
                                                    <option>Family Law</option>
                                                    <option>Personal Injury</option>
                                                    <option>Criminal Law</option>
                                                    <option>Education Law</option>
                                                    <option>Business Law</option>
                                                </select>
                                                {validator.message('subject', forms.subject, 'required')}
                                            </div>
                                        </div>
                                        <div className="fullwidth">
                                            <div className="form-field">
                                                <textarea
                                                    onBlur={(e) => changeHandler(e)}
                                                    onChange={(e) => changeHandler(e)}
                                                    className="form-control"
                                                    value={forms.message}
                                                    type="text"
                                                    name="message"
                                                    placeholder="Message">
                                                </textarea>
                                                {validator.message('message', forms.message, 'required')}
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-submit">
                                                <button type="submit" className="theme-btn">Submit Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="border-style"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Consultinencey;
