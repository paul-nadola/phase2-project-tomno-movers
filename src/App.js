import React from "react";
import Header from "./Header";
import OrderForm from "./OrderForm";
import PackageDescription from "./PackageDescription";

function App() {
  return (
    <div className="App">
      <Header/>
      <PackageDescription/>
      <OrderForm/>
    </div>
  );
}

export default App;
