import React, {useState, useEffect } from "react";
import Header from "./Header";
import PackageDescription from "./PackageDescription";
import DisplayOrders from "./DisplayOrders";
import OrderForm from "./OrderForm";
import SearchBar from "./SearchBar";

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

    function handleSearch(query) {
      fetch(`http://localhost:3000/orders?type=${query}`)
        .then(response => response.json())
        .then(data => setOrders(data));
    }
    
  return (
    <div className="App">
      <Header/>
      <SearchBar onSearch={handleSearch} />
      <PackageDescription/>
      <OrderForm fetchOrders = {fetchOrders} orders = {orders}/>
      <DisplayOrders fetchOrders = {fetchOrders} orders = {orders}/>
    </div>
  );
}

export default App;