


import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import cimg from '/public/images/signeture.png'


const ContactForm = () => {

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
        <section className="wpo-contact-section section-padding">
            <div className="container">
                <div className="wpo-contact-section-wrapper">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="wpo-contact-form-area">
                                <h2>Free Consulting</h2>
                                <form onSubmit={(e) => submitHandler(e)} className="contact-validation-active" >
                                    <div className="row">
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
                                    <div className="submit-area">
                                        <button type="submit" className="theme-btn"> Submit Now</button>
                                    </div>
                                </form >
                                <div className="border-style"></div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="wpo-contact-content">
                                <h2>We are here to fight against any violance with experience</h2>
                                <div className="wpo-contact-content-inner">
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                                        in a piece of classNameical Latin literature from 45 BC, making it over 2000 years
                                        old.</p>
                                    <p>and going through the cites of the word in classNameical literature, discovered the
                                        undoubtable source. Lorem Ipsum comes from sections.</p>
                                    <div className="signeture">
                                        <h4>Mertie Warrior</h4>
                                        <p>Vertex Chambers, CEO</p>
                                        <span><img src={cimg} alt="" /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="visible-text">
                        <span>C</span>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ContactForm;