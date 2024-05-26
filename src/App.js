import "./App.css";
import About from "./Componentes/About";
import Details from "./Componentes/Details";
import FilterResult from "./Componentes/FilterComponents/FilterResult";
import NavBar from "./Componentes/Nav/NavBar";
import Products from "./Componentes/Products/Products";
import { Routes, Route } from "react-router-dom";


function App() {

  const output =  (
    <>
      <div className="App">
        <NavBar />
      </div>
      <div className="separator"></div>

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/product/:Id" element={<Details />}></Route>
        <Route path="/filter" element={<FilterResult />}></Route>
      </Routes>
    </>
  );


  return (
    output
  );
}

export default App;
