import { Route, Switch, useLocation} from "react-router-dom"
import Entry from "./pages/Entry";
import Main from "./pages/Main"
import "./App.css"
import { AnimatePresence, motion } from "framer-motion";

function App(props) {
  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter initial={false}>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/">
          <Entry />
        </Route>
        <Route path="/about-me">
          <Main />
        </Route>
      </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
