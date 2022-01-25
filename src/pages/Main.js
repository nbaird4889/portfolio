import Nav from "../components/Nav"
import Header from "../components/Header"
import About from "../components/About"
import Divider from "../components/Divider";


const Main = (props) => {
    return (
        <div>
        <Nav />
        <Header />
        <About />
        <Divider />
        </div>
    );
};

export default Main;