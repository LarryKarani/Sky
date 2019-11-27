import React from "react";
import "./App.css";
import TobBar from "./Components/BlackTopBar";
import Banner from "./Components/AddsBanner";
import Products from "./Pages/Products";
function App() {
  return (
    <div className="app">
      <TobBar />
      <Banner />
      <Products />
    </div>
  );
}

export default App;
