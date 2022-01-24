import {Link} from "react-router-dom"
function Video() {
    return (
        <div className="video">
            <video id="background-video" autoPlay loop muted>
                    <source src='https://res.cloudinary.com/dhbumhhh1/video/upload/v1642990188/Untitled_xcf05o.mp4' type="video/mp4" />
            </video>
            <div className="entry-details">
            <h1>Nicole Baird</h1>
            <p className="learn-more">Bringing creative solutions</p>
            <p className="learn-more">to software challenges.</p>
            <p className="learn-more" id="scroll">Click to see more</p>
            <Link to="/nicole-baird">
            <img className="arrow" src="https://res.cloudinary.com/dhbumhhh1/image/upload/v1642990637/SeekPng.com_white-arrow-png_87169_zllqgg.png" alt="arrow" />
            </Link>
            </div>
        </div>
    )
}

export default Video;