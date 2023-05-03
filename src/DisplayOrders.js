import React  from 'react'


function DisplayOrders({orders, fetchOrders}) {
    function handleDecline(id){
        fetch(`http://localhost:3000/orders/${id}`, {
            method:"DELETE"
  })
  .then(res =>res.json())
  .then(data => fetchOrders(data))
    }
    const displayOrders = orders.map(order =>{
        return <div className='orders' key={order.id}>
        <h1><i className='bx bx-user' ></i> {order.name}</h1>
        <p><i className='bx bxs-contact' ></i> {order.phoneNumber}</p>
        <p><i className='bx bxl-gmail'></i> {order.email}</p>
        <img src={order.imageUrl} alt={order.name} />
        <p><i className='bx bx-money' ></i> {order.price}</p>
        <p>PREMISE : {order.type}</p>
        <p>CATEGORY : {order.category}</p>
        <p><i className='bx bxs-truck' ></i> {order.pickup}</p>
        <p><i className='bx bxs-truck' ></i> {order.destination}</p>
        <button className='delete' onClick={() =>handleDecline(order.id)}>DECLINE</button>
        </div>
    })
  return (<>
      
    <div className='order-container'>
      {displayOrders}
    </div>
    </>
  )
}

export default DisplayOrders