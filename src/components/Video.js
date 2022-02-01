import {Link} from "react-router-dom"
function Video() {
    return (
        <div className="video">
            <video id="background-video" autoPlay loop muted poster="https://res.cloudinary.com/dhbumhhh1/image/upload/v1643739366/Portfolio/Screen_Shot_2022-02-01_at_1.15.52_PM_clj76n.png">
                    <source src='https://res.cloudinary.com/dhbumhhh1/video/upload/v1642990188/Portfolio/Untitled_xcf05o.mp4' type="video/mp4" />
            </video>
            <div className="entry-details">
                <div className="entry-headlines">
                    <h1>Nicole Baird</h1>
                    <h2 id="title">Software Engineer</h2>
                </div>
                <div className="other-details">
                    <p className="learn-more">Bringing creative solutions</p>
                    <p className="learn-more">to software challenges.</p>
                    <p className="learn-more" id="scroll">Click below </p>
                    <p className="learn-more">to see my solutions</p>
                    <Link to="/nicole-baird">
                    <img className="arrow" src="https://res.cloudinary.com/dhbumhhh1/image/upload/v1642990637/Portfolio/SeekPng.com_white-arrow-png_87169_zllqgg.png" alt="arrow" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Video;