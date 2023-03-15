import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import Classes from "./views/Classes";
import MagicItems from "./views/MagicItems";
import Nav from "./views/Nav";
import MagicItem from "./views/MagicItem";
import Class from "./views/Class";
import Subclasses from "./views/Subclasses";
import Subclass from "./views/Subclass";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/classes/:classItem" element={<Class />} />
          <Route path="/subclasses" element={<Subclasses />} />
          <Route path="/subclasses/:subclass" element={<Subclass />} />
          <Route path="/magic-items" element={<MagicItems />} />
          <Route path="/magic-items/:magicItem" element={<MagicItem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
