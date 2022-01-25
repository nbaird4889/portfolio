import { Route, Switch} from "react-router-dom"
import Entry from "./pages/Entry";
import Main from "./pages/Main"
import "./App.css"
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Entry />
        </Route>
        <Route path="/nicole-baird">
          <Main />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
