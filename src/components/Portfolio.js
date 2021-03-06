import {useState} from "react"

function Portfolio(props) {
    const [cardShownOne, setCardShownOne] = useState({display: "none"}) 
    const [recordShownOne, setRecordShownOne] = useState({display: "block"})

    const [cardShownTwo, setCardShownTwo] = useState({display: "none"}) 
    const [recordShownTwo, setRecordShownTwo] = useState({display: "block"})

    const [cardShownThree, setCardShownThree] = useState({display: "none"}) 
    const [recordShownThree, setRecordShownThree] = useState({display: "block"})


    const [cardShownFive, setCardShownFive] = useState({display: "none"}) 
    const [recordShownFive, setRecordShownFive] = useState({display: "block"})

    const [cardShownSix, setCardShownSix] = useState({display: "none"}) 
    const [recordShownSix, setRecordShownSix] = useState({display: "block"})



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

     function changeBackgroundSix(e) {
        return (
            setCardShownSix({display: "block"}),
            setRecordShownSix({display: "none"})
        )
     }
 
     function changeBackgroundBackSix(e) {
         return (
             setCardShownSix({display: "none"}),
             setRecordShownSix({display: "block"})
         )
         
     }


    
    

    return (
        <div id="portfolio" className="portfolio">
            <h2 className="portfolio-headline">Portfolio</h2>
            <h3 className="about-details" id="port-text">Hover over any record for more details. Want to view the full project? Just click!</h3>
        <div className="record-container">

                <a className="project-link" href="https://project-two-reco.herokuapp.com/" target="_blank" rel="noreferrer">
                <div className="record-card">
                <img style={recordShownTwo} onMouseEnter={changeBackgroundTwo} onMouseLeave={changeBackgroundBackTwo} className="record" src="https://res.cloudinary.com/dhbumhhh1/image/upload/v1650374843/Portfolio/recommendations-port_dcfuo5_1_ahb4bw.png" alt="project-two" />
                <div style={cardShownTwo} className="project-card" id="project-two">
                    <div className="project-two-details">
                        <h2 className="project-two-headline">Recommendation Application</h2>
                        <p className="project-two-detail">With recommendations from friends and family for shows, restaurants, etc. always getting lost of forgotten. Make and keep track of recommendations with this app!</p>
                        <p className="project-two-detail-tech">Built with:</p>
                        <p className="project-two-detail-ind-tech">HTML | CSS | JAVASCRIPT | MONGODB | EXPRESS | NODE.JS</p>
                    </div>
                </div>
                </div>
                </a>

                <a className="project-link" href="https://atlanta-bucketlist.netlify.app/" target="_blank" rel="noreferrer">
                <div className="record-card">
                    <img style={recordShownOne} onMouseEnter={changeBackgroundOne} onMouseLeave={changeBackgroundBackOne} className="record" src="https://res.cloudinary.com/dhbumhhh1/image/upload/v1650374843/Portfolio/project-one_agzw2w_1_ckjpvc.png" alt="project-one" />
                    <div style={cardShownOne} className="project-card" id="project-three">
                        <div className="project-details">
                            <h2 className="project-headline">Atlanta BucketList</h2>
                            <p className="project-three-detail">Visiting Atlanta? Or considering it? Check out the best restaurants, attractions and breweries.</p>
                            <p className="project-detail-tech">Built with:</p>
                            <p className="project-detail-ind-tech">HTML | CSS | JAVASCRIPT | REACT | AJAX | NODE.JS</p>
                        </div>
                    </div>
                </div>
            </a>

            <a className="project-link" href="https://my-sustainable-brands.netlify.app/" target="_blank" rel="noreferrer">
                <div className="record-card">
                <img style={recordShownFive} onMouseEnter={changeBackgroundFive} onMouseLeave={changeBackgroundBackFive} className="record" src="https://res.cloudinary.com/dhbumhhh1/image/upload/v1650374843/Portfolio/msb-icons_qvjcel_1_kkimdd.png" alt="project-five" />
                <div style={cardShownFive} className="project-card">
                    <div className="project-two-details">
                        <h2 className="project-two-headline">My Sustainable Brands</h2>
                        <p className="project-two-detail">This application makes it easy to shop with sustainable brands and recommend your favorite brands to others.</p>
                        <p className="project-two-detail-tech">Built with:</p>
                        <p className="project-two-detail-ind-tech">HTML | CSS | JAVASCRIPT | MONGODB | EXPRESS | NODE.JS | REACT</p>
                    </div>
                </div>
                </div>
            </a>

            <a className="project-link" href="https://github.com/nbaird4889/restaurateur.git" target="_blank" rel="noreferrer">
                <div className="record-card">
                <img style={recordShownSix} onMouseEnter={changeBackgroundSix} onMouseLeave={changeBackgroundBackSix} className="record" src="https://res.cloudinary.com/dhbumhhh1/image/upload/v1650374843/Portfolio/restaurants_h9r9cc_1_lf9khy.png" alt="project-Six" />
                <div style={cardShownSix} className="project-card" id="project-two">
                    <div className="project-two-details">
                        <h2 className="project-two-headline">Restaurateur</h2>
                        <p className="project-three-detail">Want to try a new restaurant? Or can't decide what you're craving? Restaurateur can help. </p>
                        <p className="project-two-detail-tech">Built with:</p>
                        <p className="project-two-detail-ind-tech">REACT NATIVE | CSS | JAVASCRIPT | JSX </p>
                    </div>
                </div>
                </div>
            </a>

            <a className="project-link" href="https://tic-tact-toe.netlify.app/" target="_blank" rel="noreferrer">
                <div className="record-card">
                <img style={recordShownThree} onMouseEnter={changeBackgroundThree} onMouseLeave={changeBackgroundBackThree} className="record" src="https://res.cloudinary.com/dhbumhhh1/image/upload/v1650374843/Portfolio/porfolio-tic-tac-toe_qzbkwd_1_zuwhdv.png" alt="project-Six" />
                <div style={cardShownThree} className="project-card" id="project-three">
                    <div className="project-two-details">
                        <h2 className="project-headline">tic-tac-toe</h2>
                        <p className="project-three-detail">An old favorite. Play a classic game of tic-tac-toe!</p>
                        <p className="project-two-detail-tech">Built with:</p>
                        <p className="project-two-detail-ind-tech">REACT | CSS | JAVASCRIPT | JSX </p>
                    </div>
                </div>
                </div>
            </a>
        </div>
        </div>
    )
}

export default Portfolio;