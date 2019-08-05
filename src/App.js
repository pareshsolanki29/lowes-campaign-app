import React from "react";

import "./App.css";
import AppNav from "./components/AppNav.jsx";
import Footer from "./components/Footer";
import Content from "./components/Content/Content";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppNav />
      </header>
      <section className="App-Content">
        <Content />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
