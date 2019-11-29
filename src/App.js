import React from "react";
import "./App.css";
import TobBar from "./Components/BlackTopBar";
import Banner from "./Components/AddsBanner";
import Loaders from "./Components/Loaders"
import { Suspense, lazy } from "react";

const Products = React.lazy(() => import("./Pages/Products"));
function App() {
  return (
    <div className="app">
      <TobBar />
      <Banner />
      <Suspense fallback={<Loaders/>}>
        <Products />
      </Suspense>
    </div>
  );
}

export default App;
