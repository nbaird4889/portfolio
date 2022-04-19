import { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';


function Contact(props) {
    const [state, handleSubmit] = useForm("xpzbrljq");

    if (state.succeeded) {
        return (
            <div id="contact" className="contact">
            <h2 className="contact-headline">Thanks reaching out! I'll be back in touch ASAP.</h2>
            <div className="contact-information">
            <div className="contact-icons">
                <a href="https://www.linkedin.com/in/nicole-k-baird/" target="_blank"><img className="contact-icon" src="https://res.cloudinary.com/dhbumhhh1/image/upload/v1643147894/Portfolio/linkedin_ag13wb.png" alt="linkedin" /></a>
                <a href="https://github.com/nbaird4889" target="_blank"><img className="contact-icon" src="https://res.cloudinary.com/dhbumhhh1/image/upload/v1643845017/Portfolio/github-port_xkduvy.png" alt="linkedin" /></a>
            </div>
            </div>
        </div>
        );
    }

    return (
        <div id="contact" className="contact">
            <h2 className="contact-headline">Thanks for stopping by!</h2>
            <p className="contact-details">If you have any questions or would like to chat, feel free to reach out to me on LinkedIn! Or fill out the form and I'll get back to you ASAP.</p>
            <div className="contact-information">
            <div className="form">
            <section className="form-fields">
                <form onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor="name">What's your name?</label>
                    <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Stevie Nicks"
                    />
                    <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors}
                    />
                    <label htmlFor="contact_method">How would you like me to reach you?</label>
                    <input
                    id="contact_method"
                    type="text"
                    name="contact_method"
                    placeholder="stevie.nicks@gmail.com"
                    />
                    <ValidationError 
                    prefix="Contact Method" 
                    field="contact_method"
                    errors={state.errors}
                    />
                    <label htmlFor="reason">What would you like to talk about?</label>
                    <input
                    id="reason"
                    type="text"
                    name="reason"
                    placeholder="Looking for developer for my new website"
                    />
                    <ValidationError 
                    prefix="Reason" 
                    field="reason"
                    errors={state.errors}
                    />
                    <div className="btn-div"><input className="contact-btn" type="submit" disabled={state.submitting} value="Let's Chat!" /></div>
                    </fieldset>
                </form>
            </section>
            </div>
            <div className="contact-icons">
                <a href="https://www.linkedin.com/in/nicole-k-baird/" target="_blank"><img className="contact-icon" src="https://res.cloudinary.com/dhbumhhh1/image/upload/v1643147894/Portfolio/linkedin_ag13wb.png" alt="linkedin" /></a>
                <a href="https://github.com/nbaird4889" target="_blank"><img className="contact-icon" src="https://res.cloudinary.com/dhbumhhh1/image/upload/v1650375046/Portfolio/github-port_xkduvy_zcwaat.png" alt="github" /></a>
            </div>
            </div>
        </div>
    )
}

export default Contact