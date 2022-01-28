import {useState} from "react"

function Portfolio(props) {
    const [cardShown, setCardShown] = useState({display: "none"}) 
    const [recordShown, setRecordShown] = useState({display: "block"})

    function changeBackground(e) {
       return (
           setCardShown({display: "block"}),
           setRecordShown({display: "none"})
       )
    }

    function changeBackgroundBack(e) {
        return (
            setCardShown({display: "none"}),
            setRecordShown({display: "block"})
        )
        
    }

    return (
        <div className="portfolio">
            <h2 className="portfolio-headline">Portfolio</h2>
        <div className="record-container">
            <div className="record-card">
                <img style={recordShown} onMouseEnter={changeBackground} onMouseLeave={changeBackgroundBack} className="record" src="https://res.cloudinary.com/dhbumhhh1/image/upload/v1643145893/Portfolio/project-one_agzw2w.png" alt="project-one" />
                <div style={cardShown}><h2>Atlanta BucketList</h2></div>
            </div>
            <img className="record" src="https://res.cloudinary.com/dhbumhhh1/image/upload/v1643145893/Portfolio/project-one_agzw2w.png" alt="project-one" />
            <img className="record" src="https://res.cloudinary.com/dhbumhhh1/image/upload/v1643145893/Portfolio/project-one_agzw2w.png" alt="project-one" />
            <img className="record" src="https://res.cloudinary.com/dhbumhhh1/image/upload/v1643145893/Portfolio/project-one_agzw2w.png" alt="project-one" />
            <img className="record" src="https://res.cloudinary.com/dhbumhhh1/image/upload/v1643145893/Portfolio/project-one_agzw2w.png" alt="project-one" />
        </div>
        </div>
    )
}

export default Portfolio;