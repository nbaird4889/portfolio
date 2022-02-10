import { useState } from "react";

function Contact(props) {
    const [ newForm, setNewForm ] = useState({
        name: "",
        contact_method: "",
        reason: "",
    });

     // handleChange function for form
    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value });
    }


    // handle submit function for form
    const handleSubmit = (event) => {
        event.preventDefault();
        props.createPeople(newForm);
        setNewForm({
            name: "",
            contact_method: "",
            reason: "",
        });
    };


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
                    type="text"
                    value={newForm.name}
                    name="name"
                    placeholder="Stevie Nicks"
                    onChange={handleChange}
                    />
                    <label htmlFor="contact_method">How would you like me to reach you?</label>
                    <input
                    type="text"
                    value={newForm.contact_method}
                    name="contact_method"
                    placeholder="stevie.nicks@gmail.com"
                    onChange={handleChange}
                    />
                    <label htmlFor="reason">What would you like to talk about?</label>
                    <input
                    type="text"
                    value={newForm.reason}
                    name="reason"
                    placeholder="Looking for developer for my new website"
                    onChange={handleChange}
                    />
                    <div className="btn-div"><input className="contact-btn" type="submit" value="Let's Chat!" /></div>
                    </fieldset>
                </form>
            </section>
            </div>
            <div className="contact-icons">
                <a href="https://www.linkedin.com/in/nicole-k-baird/" target="_blank"><img className="contact-icon" src="https://res.cloudinary.com/dhbumhhh1/image/upload/v1643147894/Portfolio/linkedin_ag13wb.png" alt="linkedin" /></a>
                <a href="https://github.com/nbaird4889" target="_blank"><img className="contact-icon" src="https://res.cloudinary.com/dhbumhhh1/image/upload/v1643845017/Portfolio/github-port_xkduvy.png" alt="linkedin" /></a>
            </div>
            </div>
        </div>
    )
}

export default Contact