import {HashLink as Link} from "react-router-hash-link"

function Nav(props) {
    return (
        <div className="nav">
            <img className="logo" src="https://res.cloudinary.com/dhbumhhh1/image/upload/v1642992558/Portfolio/NB_fv0v0l.png" />
            <div>
                <ul className="nav-links">
                    <Link to="/nicole-baird#portfolio"><li>PORTFOLIO</li></Link>
                    <Link to="/nicole-baird#about"><li>ABOUT</li></Link>
                    <Link to="/nicole-baird#contact"><li>CONTACT</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Nav