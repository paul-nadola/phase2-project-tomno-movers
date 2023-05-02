import React from "react";
import Header from "./Header";
import OrderForm from "./OrderForm";
import PackageDescription from "./PackageDescription";
import DisplayOrders from "./DisplayOrders";

function App() {
  return (
    <div className="App">
      <Header/>
      <PackageDescription/>
      <OrderForm/>
      <DisplayOrders/>
    </div>
  );
}

export default App;
