import React from "react";
import Header from "./Header";
import PackageDescription from "./PackageDescription";
import DisplayOrders from "./DisplayOrders";

function App() {
  return (
    <div className="App">
      <Header/>
      <PackageDescription/>
      <DisplayOrders/>
    </div>
  );
}

export default App;
