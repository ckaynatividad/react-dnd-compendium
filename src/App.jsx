import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/Main/Home";
import Nav from "./views/Main/Nav";
import MagicItem from "./views/MagicItems/MagicItem";
import Race from "./views/Races/Race";
import EquipmentCategories from "./views/Equipment/EquipmentCategories";
import Classes from "./views/Classes/Classes";
import Subclasses from "./views/Subclasses/Subclasses";
import Subclass from "./views/Subclasses/Subclass";
import MagicItems from "./views/MagicItems/MagicItems";
import Proficiencies from "./views/Proficiencies/Proficiencies";
import Races from "./views/Races/Races";
import Proficiency from "./views/Proficiencies/Proficiency";
import Category from "./views/Equipment/Category";
import Class from "./views/Classes/Class";

function App() {
  return (
    <div className="text-center">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Classes */}
          <Route path="/classes" element={<Classes />} />
          <Route path="/classes/:classItem" element={<Class />} />

          {/* Subclasses */}
          <Route path="/subclasses" element={<Subclasses />} />
          <Route path="/subclasses/:subclass" element={<Subclass />} />

          {/* Magic Items */}
          <Route path="/magic-items" element={<MagicItems />} />
          <Route path="/magic-items/:magicItem" element={<MagicItem />} />

          {/* Proficiencies */}
          <Route path="/proficiencies" element={<Proficiencies />} />
          <Route path="/proficiencies/:proficiency" element={<Proficiency />} />

          {/* Races */}
          <Route path="/races" element={<Races />} />
          <Route path="/races/:race" element={<Race />} />

          {/* Equipment */}
          <Route
            path="/equipment-categories"
            element={<EquipmentCategories />}
          />
          <Route
            path="/equipment-categories/:category"
            element={<Category />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
