import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import Classes from "./views/Classes";
import MagicItems from "./views/MagicItems";
import Nav from "./views/Nav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/classes" element={<Classes />} />
          <Route exact path="/magic-items" element={<MagicItems />} />
          <Route exact path="/:magic-item" />
          <Route exact path="/:class" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
