import React, {useState, useEffect } from "react";
import Header from "./Header";
import PackageDescription from "./PackageDescription";
import DisplayOrders from "./DisplayOrders";
import OrderForm from "./OrderForm";
import CustomerOrders from "./CustomerOrders";


function App() {
const[orders, setOrders] = useState([])

      function fetchOrders(){
        fetch('http://localhost:3000/orders')
        .then( res => res.json())
        .then( data => setOrders(data))
      }
    useEffect(() =>{
        fetchOrders()
    },[])
  return (
    <div className="App">
      <Header/>
      <PackageDescription/>
      <OrderForm fetchOrders = {fetchOrders}/>
      <CustomerOrders fetchOrders = {fetchOrders} orders = {orders}/>
      <DisplayOrders fetchOrders = {fetchOrders} orders = {orders}/>
    </div>
  );
}

export default App;
