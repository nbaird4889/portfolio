function About() {
    return (
        <div id="about" className="About">
            <div className="summary">
                <h2 className="about-headline">A little about me</h2>
                <p className="about-details">
                    If you would have told me a few years ago that I'd be pressing restart on my career and becoming a software engineer, I would have thought you were crazy.
                    But after more than 5 years in client services at an integrated marketing agency working on digital projects and campaigns with a variety of clients in different industries, 
                    I knew this was the path I wanted to take.  
                </p>
                <p className="about-details">
                    Software engineering brings constant challenges and an ever-evolving landscape, which is why it was the perfect fit for me. 
                    And with my years in marketing providing me with a keen eye for inventive, audience-appropriate design, I try and bring a unique perspective to my projects - ensuring a user-first approach. 

                </p>
                <p className="about-details">
                    While not working, I enjoy exploring Atlanta, and its great restaurants and breweries, with my husband and rescue dog. 
                </p>
                <button className="about-btn">DOWNLOAD RESUME</button>
            </div>
            <div className="skills">
                <h2 className="about-headline">A few of my skills</h2>
                <img className="skill-image" src="https://res.cloudinary.com/dhbumhhh1/image/upload/v1643844792/Portfolio/skills-port_ftvhu7.png" alt="skills"/>
            </div>
        </div>
    )
}

export default About