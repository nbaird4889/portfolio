import {useState} from "react"

function Portfolio(props) {
    const [cardShownOne, setCardShownOne] = useState({display: "none"}) 
    const [recordShownOne, setRecordShownOne] = useState({display: "block"})

    const [cardShownTwo, setCardShownTwo] = useState({display: "none"}) 
    const [recordShownTwo, setRecordShownTwo] = useState({display: "block"})

    const [cardShownThree, setCardShownThree] = useState({display: "none"}) 
    const [recordShownThree, setRecordShownThree] = useState({display: "block"})

    const [cardShownFour, setCardShownFour] = useState({display: "none"}) 
    const [recordShownFour, setRecordShownFour] = useState({display: "block"})

    const [cardShownFive, setCardShownFive] = useState({display: "none"}) 
    const [recordShownFive, setRecordShownFive] = useState({display: "block"})



    function changeBackgroundOne(e) {
       return (
           setCardShownOne({display: "block"}),
           setRecordShownOne({display: "none"})
       )
    }

    function changeBackgroundBackOne(e) {
        return (
            setCardShownOne({display: "none"}),
            setRecordShownOne({display: "block"})
        )
        
    }

    function changeBackgroundTwo(e) {
        return (
            setCardShownTwo({display: "block"}),
            setRecordShownTwo({display: "none"})
        )
     }
 
     function changeBackgroundBackTwo(e) {
         return (
             setCardShownTwo({display: "none"}),
             setRecordShownTwo({display: "block"})
         )
         
     }

     function changeBackgroundThree(e) {
        return (
            setCardShownThree({display: "block"}),
            setRecordShownThree({display: "none"})
        )
     }
 
     function changeBackgroundBackThree(e) {
         return (
             setCardShownThree({display: "none"}),
             setRecordShownThree({display: "block"})
         )
         
     }

     function changeBackgroundFour(e) {
        return (
            setCardShownFour({display: "block"}),
            setRecordShownFour({display: "none"})
        )
     }
 
     function changeBackgroundBackFour(e) {
         return (
             setCardShownFour({display: "none"}),
             setRecordShownFour({display: "block"})
         )
         
     }

     function changeBackgroundFive(e) {
        return (
            setCardShownFive({display: "block"}),
            setRecordShownFive({display: "none"})
        )
     }
 
     function changeBackgroundBackFive(e) {
         return (
             setCardShownFive({display: "none"}),
             setRecordShownFive({display: "block"})
         )
         
     }


    
    

    return (
        <div id="portfolio" className="portfolio">
            <h2 className="portfolio-headline">Portfolio</h2>
            <h3 className="about-details" id="port-text">Hover over any record for more details. Want to view the full project? Just click!</h3>
        <div className="record-container">

                <a className="project-link" href="https://project-two-reco.herokuapp.com/" target="_blank">
                <div className="record-card">
                <img style={recordShownTwo} onMouseEnter={changeBackgroundTwo} onMouseLeave={changeBackgroundBackTwo} className="record" src="https://res.cloudinary.com/dhbumhhh1/image/upload/v1643477309/Portfolio/recommendations-port_dcfuo5.png" alt="project-two" />
                <div style={cardShownTwo} className="project-card" id="project-two">
                    <div className="project-two-details">
                        <h2 className="project-two-headline">Recommendation Application</h2>
                        <p className="project-two-detail">With recommendations from friends and family for shows, restaurants, etc. always getting lost of forgotten. Make and keep track of recommendations with this app!</p>
                        <p className="project-two-detail-tech">Technologies</p>
                        <p className="project-two-detail-ind-tech">HTML | CSS | JAVASCRIPT | MONGODB | EXPRESS | NODE.JS</p>
                    </div>
                </div>
                </div>
                </a>

                <a className="project-link" href="https://uga-football.netlify.app/" target="_blank">
                <div className="record-card">
                <img style={recordShownThree} onMouseEnter={changeBackgroundThree} onMouseLeave={changeBackgroundBackThree} className="record" src="https://res.cloudinary.com/dhbumhhh1/image/upload/v1643737629/Portfolio/football-disc_w2hzic.png" alt="project-three" />
                <div style={cardShownThree} className="project-card" id="project-three">
                    <div className="project-two-details">
                        <h2 className="project-two-headline">UGA Football Legends</h2>
                        <p className="project-three-detail">Checkout the Dawg legends who paved the way for the 2021 National champions!</p>
                        <p className="project-two-detail-tech">Technologies</p>
                        <p className="project-two-detail-ind-tech">HTML | CSS | JAVASCRIPT | MONGODB | EXPRESS | NODE.JS | REACT</p>
                    </div>
                </div>
                </div>
                </a>

                <a className="project-link" href="https://s-and-p-500.netlify.app/" target="_blank">
                <div className="record-card">
                <img style={recordShownFour} onMouseEnter={changeBackgroundFour} onMouseLeave={changeBackgroundBackFour} className="record" src="https://res.cloudinary.com/dhbumhhh1/image/upload/v1643839131/Portfolio/stock-app_ce2yma.png" alt="project-four" />
                <div style={cardShownFour} className="project-card">
                    <div className="project-two-details">
                        <h2 className="project-two-headline">S&P 500</h2>
                        <p className="project-detail">By utilizing an API, the app lists all of the S&P 500 stocks and information on each one</p>
                        <p className="project-two-detail-tech">Technologies</p>
                        <p className="project-two-detail-ind-tech">HTML | CSS | JAVASCRIPT | AJAX | NODE.JS | REACT</p>
                    </div>
                </div>
                </div>
                </a>

                <a className="project-link" href="https://my-sustainable-brands.netlify.app/" target="_blank">
                <div className="record-card">
                <img style={recordShownFive} onMouseEnter={changeBackgroundFive} onMouseLeave={changeBackgroundBackFive} className="record" src="https://res.cloudinary.com/dhbumhhh1/image/upload/v1643922916/Portfolio/msb-icons_qvjcel.png" alt="project-five" />
                <div style={cardShownFive} className="project-card" id="project-two">
                    <div className="project-two-details">
                        <h2 className="project-two-headline">My Sustainable Brands</h2>
                        <p className="project-two-detail">This application makes it easy to shop with sustainable brands and recommend your favorite brands to others.</p>
                        <p className="project-two-detail-tech">Technologies</p>
                        <p className="project-two-detail-ind-tech">HTML | CSS | JAVASCRIPT | MONGODB | EXPRESS | NODE.JS | REACT</p>
                    </div>
                </div>
                </div>
                </a>

            <a className="project-link" href="https://atlanta-bucketlist.netlify.app/" target="_blank">
                <div className="record-card">
                    <img style={recordShownOne} onMouseEnter={changeBackgroundOne} onMouseLeave={changeBackgroundBackOne} className="record" src="https://res.cloudinary.com/dhbumhhh1/image/upload/v1643145893/Portfolio/project-one_agzw2w.png" alt="project-one" />
                    <div style={cardShownOne} className="project-card" id="project-three">
                        <div className="project-details">
                            <h2 className="project-headline">Atlanta BucketList</h2>
                            <p className="project-three-detail">Visiting Atlanta? Or considering it? Check out the best restaurants, attractions and breweries.</p>
                            <p className="project-detail-tech">Technologies</p>
                            <p className="project-detail-ind-tech">HTML | CSS | JAVASCRIPT | REACT | AJAX | NODE.JS</p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
        </div>
    )
}

export default Portfolio;