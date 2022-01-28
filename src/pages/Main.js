import Nav from "../components/Nav"
import Header from "../components/Header"
import About from "../components/About"
import Divider from "../components/Divider";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer"


const Main = (props) => {
    return (
        <div>
        <Nav />
        <Header />
        <Portfolio />
        <Divider />
        <About />
        <Contact />
        <Footer />
        </div>
    );
};

export default Main;