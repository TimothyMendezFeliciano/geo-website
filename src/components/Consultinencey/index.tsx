import Image from 'next/image';
import React, {useCallback, useState} from 'react'
import SimpleReactValidator from 'simple-react-validator';
import cimg from '/public/images/1064 Picture.png'
import emailjs from '@emailjs/browser'
import Services from "@/pages/api/service";


const Consultinencey = () => {

    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });

    const [showForm, setShowForm] = useState(true);
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const changeHandler = (e: any) => {
        setForms({ ...forms, [e.target.name]: e.target.value })
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = useCallback(async e => {
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

            const {status, text} = await emailjs.send(process.env.NEXT_PUBLIC_SERVICE_ID as string, process.env.NEXT_PUBLIC_TEMPLATE_ID as string, {
                from_name: forms.name,
                to_name: "GEO Tax",
                subject: forms.subject,
                message: forms.message,
                phone_number: forms.phone,
                contact_email: forms.email,
            }, process.env.NET_PUBLIC_PUBLIC_ID);

            if(status === 200) {
                setShowForm(false);
            } else {
                console.log(text)
            }
        } else {
            validator.showMessages();
        }
    }, [forms, validator])

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
                                    {showForm ? (
                                        <> <h2>Have a Question?</h2>
                                            <p>Sign the Form to Contact Us. Our team at GEO Tax will reach
                                                out as soon as possible.
                                            </p></>
                                    ) : (<>
                                        <h2>Your message has been sent. GEO Tax will contact you soon.</h2>
                                    </>)}
                                </div>
                                {showForm ? (<>
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
                                                        placeholder="Your Name"/>
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
                                                        placeholder="Your Email"/>
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
                                                        placeholder="Your phone"/>
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
                                                        name="subject">
                                                        <option defaultValue={''}>Select a Category</option>
                                                        {Services.map(({sTitle}) => (
                                                            <option value={sTitle}>{sTitle}</option>
                                                        ))}
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
                                </>) : (<></>)}
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
