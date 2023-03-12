import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import Classes from "./views/Classes";
import MagicItems from "./views/MagicItems";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/classes" element={<Classes />}></Route>
          <Route exact path="/magic-items" element={<MagicItems />}></Route>
          <Route exact path="/:weapon"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
