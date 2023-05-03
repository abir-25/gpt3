import React from "react";
import "./App.css";
import {
  Blog,
  Header,
  Footer,
  Possibility,
  Features,
  WhatGPT3,
} from "./containers";
import { Article, Brand, Cta, Feature, Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>

      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
