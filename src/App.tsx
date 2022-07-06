import React from "react";
// import './App.css';
import { Header } from "./components/header/header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Hero } from "./components/hero";
import { Sec1 } from "./components/sec1";
import { Sec2 } from "./components/sec2";
import { Sec3 } from "./components/sec3";
import { Sec4 } from "./components/sec4";
import { Sec5 } from "./components/sec5";
import { Footer } from "./components/footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Sec1 />
      <Sec2 />
      <Sec3 />
      <Sec4 />
      <Sec5 />
      <Footer />
    </div>
  );
}

export default App;
