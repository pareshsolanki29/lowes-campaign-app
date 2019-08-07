import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import AppNav from "./components/nav/appNav.jsx";
import Footer from "./components/footer/Footer";
import Content from "./components/content/content";
import ContentTable from "./components/table/table";
import EditForm from "./components/edit/editForm";
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
