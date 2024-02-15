import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Cards from "./components/Cards";
import Headers from "./components/Headers";
import Getting from "./menu/Getting";
import "./App.css";

function Products() {
  return (
    <div>
      <Link to="/">Ir a inicio</Link>
      <ul>
        <li>Product</li>
        <li>Product</li>
        <li>Product</li>
        <li>Product</li>
      </ul>
    </div>
  );
}

function ElementsMenu() {
  return (
    <div className="p-4 bg-blueFire rounded-md flex flex-col gap-2">
      <Link
        to="/headers"
        className="bg-lightGray px-4 py-2 rounded-md shadow-md hover:bg-lightGrayPlus font-bold"
      >
        Headers
      </Link>
      <Link
        to="/cards"
        className="bg-lightGray px-4 py-2 rounded-md shadow-md hover:bg-lightGrayPlus font-bold"
      >
        Cards
      </Link>
    </div>
  );
}

function App() {
  return (
    <div className="text-white flex flex-col gap-6 px-4  items-center">
      <header className="flex my-4 flex-row w-full items-center p-4 gap-40">
        <div className="flex-2 flex flex-col gap-2 ">
          <h1 className="text-white font-bold text-3xl  ">Components UI</h1>
          <h4>Galeria de componentes en CSS nativo o Tailwind </h4>
        </div>
        <nav className="flex-1 flex gap-9 text-lg font-bold">
          <div>
            <Link to="/getting-started">Getting Started</Link>
          </div>
          <div className="flex flex-col">
            <div className="nav-elements">
              <span>Elements</span>
            </div>
            <div className="nav-elements__menu-hidden pt-8">
              <ElementsMenu />
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-row w-full gap-4 ">
        <div className="flex flex-col  flex-2 p-6">
          <div>
            <h3 className="text-2xl ">Components</h3>
          </div>
          <div className="flex flex-col gap-2 my-4">
            <Link to="/cards" className="bg-lightGray px-4 py-2 rounded-md ">
              Cards
            </Link>
          </div>
        </div>
        <div className="bg-lightGray rounded-md flex-1 p-6">
          <Routes>
            <Route exact path="/cards" element={<Cards />}></Route>
            <Route exact path="/headers" element={<Headers />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/getting-started" element={<Getting />}></Route>
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
