import React, {useState, useEffect }  from 'react'
import OrderForm from "./OrderForm";


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
        return <div id='orders' key={order.id}>
        <h1><i className='bx bx-user' ></i> {order.name}</h1>
        <p><i className='bx bxs-contact' ></i> {order.phoneNumber}</p>
        <p><i className='bx bxl-gmail'></i> {order.email}</p>
        <img src={order.imageUrl} alt={order.name} />
        <p><i className='bx bx-money' ></i> {order.price}</p>
        <p>PREMISE : {order.type}</p>
        <p>CATEGORY : {order.category}</p>
        <p><i className='bx bxs-truck' ></i> {order.pickup}</p>
        <p><i className='bx bxs-truck' ></i> {order.destination}</p>
        </div>
    })
  return (<>
      <OrderForm fetchOrders = {fetchOrders}/>
    <div id='order-container'>
      {displayOrders}
    </div>
    </>
  )
}

export default DisplayOrders