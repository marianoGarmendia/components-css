// import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Cards from "./components/Cards";
import CardCode from "./components/CardCode";

import Buttons from "./components/Buttons";
import Getting from "./menu/Getting";
import "./App.css";

function ElementsMenu() {
  return (
    <div className="p-4 bg-slate-500 rounded-md flex flex-col gap-2">
      <Link
        to="/buttons"
        className="bg-lightGray px-4 py-2 rounded-md shadow-md hover:bg-lightGrayPlus font-bold"
      >
        Buttons
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
      <header className="flex my-4 flex-row w-full items-start justify-between p-4 gap-6">
        <div className="flex-2 flex flex-col gap-2 ">
          <h1 className="text-white font-bold text-3xl  ">Components UI</h1>
          <h4>Galeria de componentes en CSS nativo o Tailwind </h4>
        </div>
        {/* Este es un menu burguer para pantallas pequeñas */}
        <div className="p-2 sm:hidden">Menu</div>
        {/* ------- */}
        <nav className="flex-1  gap-9 text-lg font-bold hidden sm:flex sm:justify-end md:justify-center">
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
      <main className="flex flex-col sm:flex-row w-full gap-4 ">
        <div className="flex flex-col  flex-2 p-6">
          <div>
            <h3 className="text-2xl">Components</h3>
          </div>
          <div className="flex flex-col gap-2 my-4">
            <Link to="/cards" className="bg-lightGray px-4 py-2 rounded-md ">
              Cards
            </Link>
            <Link to="/buttons" className="bg-lightGray px-4 py-2 rounded-md ">
              Buttons
            </Link>
            <Link to="/navbar" className="bg-lightGray px-4 py-2 rounded-md ">
              Navbar
            </Link>
            <Link to="/footers" className="bg-lightGray px-4 py-2 rounded-md ">
              footers
            </Link>
          </div>
        </div>
        <div className="bg-lightGray rounded-md flex-1 p-6">
          <Routes>
            <Route exact path="/" element={<Getting />}></Route>

            <Route exact path="/cards" element={<Cards />}></Route>
            <Route
              exact
              path="/cards/:elementName"
              element={<CardCode />}
            ></Route>
            <Route exact path="/buttons" element={<Buttons />}></Route>
            <Route
              exact
              path="/buttons/:elementName"
              element={<CardCode />}
            ></Route>

            <Route path="/getting-started" element={<Getting />}></Route>
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
