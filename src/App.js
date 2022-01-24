import { Route } from "react-router-dom"
import Entry from "./pages/Entry"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Route path="/">
        <Entry />
      </Route>
    </div>
  );
}

export default App;
