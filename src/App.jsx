import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Layout from "./layouts/Layout.jsx";
import Smaller from "./components/Smaller.jsx";

function App() {
  return (
    <>
    <Smaller/>
      <main className="min-h-screen bg-gray-900 text-white">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
