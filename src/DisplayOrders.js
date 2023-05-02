import React, {useState, useEffect }  from 'react'

function DisplayOrders() {
    
const[orders, setOrders] = useState([])
    function fetchOrders(){
        fetch('http://localhost:3000/orders')
        .then( res => res.json())
        .then( data => setOrders(data))
      }
    useEffect(() =>{
        fetchOrders()
    },[])
    const displayOrders = orders.map(order =>{
        return <div id='orders'>
        <h1>CUSTOMER NAME : {order.name}</h1>
        <p>CUSTOMER PHONE NUMBER : {order.phoneNumber}</p>
        <p>CUSTOMER EMAIL : {order.email}</p>
        <img src={order.imageUrl} alt={order.name} />
        <p>TOTAL QOUTE AMOUT : {order.price}</p>
        <p>SELECTED PACKAGE : {order.category}</p>
        <p>PICKUP LOCATION : {order.pickup}</p>
        <p>DESTINATION : {order.destination}</p>
        </div>
    })
  return (
    <div>
        {displayOrders}
    </div>
  )
}

export default DisplayOrders