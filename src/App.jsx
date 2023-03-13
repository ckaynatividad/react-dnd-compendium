import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import Classes from "./views/Classes";
import MagicItems from "./views/MagicItems";
import Nav from "./views/Nav";
import MagicItem from "./views/MagicItem";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/classes" element={<Classes />} />
          <Route path="/magic-items/:magic-item" element={<MagicItem />} />
          <Route path="/magic-items" element={<MagicItems />} />
          <Route exact path="/:class" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
