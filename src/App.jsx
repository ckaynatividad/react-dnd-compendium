import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Compendium from "./views/Compendium";
import Home from "./views/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/nekos" element={<Compendium />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
