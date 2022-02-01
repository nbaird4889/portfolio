import Video from "../components/Video"
import { AnimatePresence, motion } from "framer-motion";


const Entry = (props) => {
      
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: .2}}>
        <div>
        <Video />
        </div>
        </motion.div>
    );
};

export default Entry;