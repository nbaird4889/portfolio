import {useState} from "react"

function Portfolio(props) {
    const [isShown, setIsShown] = useState({display: "none"})

    function changeBackground(e) {
        if (e.target.className === "record") {
            e.target.remove();
            e.target.style.background = "pink"
        }
    }

    return (
        <div className="portfolio">
            <h2 className="portfolio-headline">Portfolio</h2>
        <div className="record-container">
            <img className="record" src="https://res.cloudinary.com/dhbumhhh1/image/upload/v1643145893/Portfolio/project-one_agzw2w.png" alt="project-one" />
            <img className="record" src="https://res.cloudinary.com/dhbumhhh1/image/upload/v1643145893/Portfolio/project-one_agzw2w.png" alt="project-one" />
            <img className="record" src="https://res.cloudinary.com/dhbumhhh1/image/upload/v1643145893/Portfolio/project-one_agzw2w.png" alt="project-one" />
            <img className="record" src="https://res.cloudinary.com/dhbumhhh1/image/upload/v1643145893/Portfolio/project-one_agzw2w.png" alt="project-one" />
            <img className="record" src="https://res.cloudinary.com/dhbumhhh1/image/upload/v1643145893/Portfolio/project-one_agzw2w.png" alt="project-one" />
        </div>
        </div>
    )
}

export default Portfolio;