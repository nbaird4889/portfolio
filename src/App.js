import { Route, Switch } from "react-router-dom"
import Video from "./components/Video"
import Entry from "./pages/Entry";
import Main from "./pages/Main"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact lpath="/">
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
