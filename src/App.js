
import React, { useState, useEffect } from "react";
import {  Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Header from "./Header";
import PackageDescription from "./PackageDescription";
import DisplayOrders from "./DisplayOrders";
import OrderForm from "./OrderForm";

function App() {
  const [orders, setOrders] = useState([]);

  function fetchOrders() {
    fetch("http://localhost:3000/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }

  useEffect(() => {
    fetchOrders();
  }, []);

  function handleSearch(query) {
    fetch(`http://localhost:3000/orders?type=${query}`)
      .then((response) => response.json())
      .then((data) => setOrders(data));
  }

  return (
      <div className="App">
        <Header />
        <NavBar />
        <Switch>
          <Route exact path="/">
            <PackageDescription />
          </Route>
          <Route exact path="/orders">
            <OrderForm orders={orders} fetchOrders={fetchOrders} handleSearch={handleSearch} />
          </Route>
          <Route exact path="/admin">
            <DisplayOrders fetchOrders={fetchOrders} orders={orders} />
          </Route>
        </Switch>
      </div>
  );
}

export default App;
