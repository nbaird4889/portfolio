import { Route } from "react-router-dom"
import Video from "./components/Video"
import Nav from "./components/Nav"
import "./App.css"

function App() {
  return (
    <div className="App">
        <Video />
        <Nav />
    </div>
  );
}

export default App;
