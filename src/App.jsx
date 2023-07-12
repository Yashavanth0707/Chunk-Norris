import { useState } from "react";
import "./App.css";
import Category from "./components/Category";
import Header from "./components/Header";

function App() {
  return (
    <div className="web-page">
      <Header />
      <Category />
    </div>
  );
}

export default App;
