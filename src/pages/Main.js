import Nav from "../components/Nav"
import Header from "../components/Header"
import About from "../components/About"
import Divider from "../components/Divider";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer"

import { AnimatePresence, motion } from "framer-motion";


const Main = (props) => {
    URL = "https://portfolio-backend-baird.herokuapp.com/"

    const createPeople = async (person) => {
      await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(person),
      });
    };

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: .1}}>
        <div>
        <Nav />
        <Header />
        <Portfolio />
        <Divider />
        <About />
        <Contact createPeople={createPeople}/>
        <Footer />
        </div>
        </motion.div>
    );
};

export default Main;