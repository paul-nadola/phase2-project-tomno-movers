import React, { useState } from 'react';

function CustomerOrders({ orders, fetchOrders }) {
  const [editingOrderId, setEditingOrderId] = useState(null);
  const [range, setRange] = useState(0)
  const [type, setType] = useState('STUDIO APARTMENT')
  const [category, setCategory] = useState('SILVER')
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
    function handleToggle(orderId) {
    setEditingOrderId(editingOrderId === orderId ? null : orderId);
  }
  function handleChangeRange(e) {
    setRange(parseInt(e.target.value))
  }

  function handleChangeType(e) {
    setType(e.target.value)
  }

  function handleChangeCategory(e) {
    setCategory(e.target.value)
  }
  function handleChangePickup(e) {
    setPickup(e.target.value);
  }

  function handleChangeDestination(e) {
   setDestination(e.target.value);
  }
  function handleName(e){
    setName(e.target.value)
  }
  function handleNumber(e){
    setNumber(e.target.value)
  }
  function handleEmail(e){
    setEmail(e.target.value)
  }
  function handleImage(e){
    setImage(e.target.value)
    }
  
  function handleDelete(){
        fetch(`http://localhost:3000/orders/${editingOrderId}`, {
            method:"DELETE"
  })
  .then(res =>res.json())
  .then(data => fetchOrders(data))
    }
 function handleFormSubmit(e) {
  e.preventDefault();
  const pricePerKm = getPricePerKm(type, category);
  const totalPrice = calculatePrice(pricePerKm, range);

  const data = {
    name,
    phoneNumber: number,
    email,
    imageUrl: image,
    price: totalPrice,
    range,
    type,
    category,
    pickup,
    destination,
  };

  fetch(`http://localhost:3000/orders/${editingOrderId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((updatedOrder) => {
      // Update the orders array in the parent component
      fetchOrders((orders) =>
        orders.map((order) =>
          order.id === updatedOrder.id ? updatedOrder : order
        )
      );
      // Reset form state
      setName("");
      setNumber("");
      setEmail("");
      setImage("");
      setRange(0);
      setType("STUDIO APARTMENT");
      setCategory("SILVER");
      setPickup("");
      setDestination("");
      setEditingOrderId(null);
    })
    .catch((error) => {
      console.error(error);
    });
}


    function getPricePerKm(type, category) {
    // Prices per km based on premises type and package
    const prices = {
      'STUDIO APARTMENT': {
        'SILVER': 400,
        'GOLD': 450,
        'PLATINUM': 500,
      },
      'ONE BEDROOM APARTMENT': {
        'SILVER': 450,
        'GOLD': 500,
        'PLATINUM': 550,
      },
      'TWO BEDROOM APARTMENT': {
        'SILVER': 500,
        'GOLD': 550,
        'PLATINUM': 600,
      },
      'COMMERCIAL PREMISES': {
        'SILVER': 650,
        'GOLD': 700,
        'PLATINUM': 750,
      },
    }

    return prices[type][category]
  }

  function calculatePrice(pricePerKm, range) {
    return pricePerKm * range
  }

const clientOrders = orders.map((order) => {
return (
  <div className='orders' key={order.id}>
    <button className='btn' onClick={() => handleToggle(order.id)}>
      {editingOrderId === order.id ? 'Cancel Changes' : 'Edit Order'}
    </button>
    <h1>
      <i className='bx bx-user'></i> {order.name}
    </h1>
    <p>
      <i className='bx bxs-contact'></i> {order.phoneNumber}
    </p>
    <p>
      <i className='bx bxl-gmail'></i> {order.email}
    </p>
    <img src={order.imageUrl} alt={order.name} />
    <p>
      <i className='bx bx-money'></i> {order.price}
    </p>
    <p><i className='bx bx-trip'></i> {order.range} Kilometers</p>
    <p>PREMISE : {order.type}</p>
    <p>CATEGORY : {order.category}</p>
    <p>
      <i className='bx bxs-truck'></i> {order.pickup}
    </p>
    <p>
      <i className='bx bxs-truck'></i> {order.destination}
    </p>
  </div>
);
});

const editOrders = orders.map((order) => {
if (editingOrderId === order.id) {
  return (<>
    <form className='order-form' key={order.id} >
      <div className='orders' >
        <button className='delete' onClick={() => handleToggle(order.id)}>
          Cancel Changes
        </button>
        <h1>
          <i className='bx bx-user'></i>
          <input type='text' value={name} onChange={handleName}/>
        </h1>
        <p>
          <i className='bx bxs-contact'></i>
          <input type='number' value={number} onChange={handleNumber} />
        </p>
        <p>
          <i className='bx bxl-gmail'></i>
          <input type='text' value={email} onChange={handleEmail}/>
        </p>
        <label htmlFor=''>Enter new url</label>
        <input id='url' type='url' value={image} onChange={handleImage}/>
        <p>
          <i className='bx bx-money'></i> 
          Total price: KSH {calculatePrice(getPricePerKm(type, category), range)}
        </p>
        <label htmlFor='type-options'>Premises</label>
        <select name='type' id='type-options' value={type} onChange={handleChangeType}>
          <option value='STUDIO APARTMENT'>STUDIO APARTMENT</option>
          <option value='ONE BEDROOM APARTMENT'>
            ONE BEDROOM APARTMENT
          </option>
          <option value='TWO BEDROOM APARTMENT'>
            TWO BEDROOM APARTMENT
          </option>
          <option value='COMMERCIAL PREMISES'>COMMERCIAL PREMISES</option>
        </select>
      <br />
      <label htmlFor="category-options">Choose a package</label>
      <select name="category" id="category-options" value={category} onChange={handleChangeCategory}>
        <option value="SILVER" >SILVER</option>
        <option value="GOLD">GOLD</option>
        <option value="PLATINUM">PLATINUM</option>
      </select>
      <br />
      <label htmlFor="range">distance in kilometers</label>
      <input  id="range" type="range" name="range" min={10} max={500}  onChange={handleChangeRange} />
      <p><i className='bx bx-trip'></i> {range} Kilometers</p>
        <p><i className='bx bxs-truck' ></i> <input type="text" value={pickup} onChange={handleChangePickup}/></p>
        <p><i className='bx bxs-truck' ></i> <input type="text" value={destination} onChange={handleChangeDestination}/></p>
        <button type='submit' className='btn' onSubmit={handleFormSubmit}>SUBMIT CHANGES</button>
        <br />
        <button className='delete' onClick={handleDelete} >DELETE ORDER</button>
</div>
  </form>
  </>
      )}
    })
  return (
    <div className='order-container'>
      {editingOrderId? editOrders : clientOrders}
    </div>
  )
}

export default CustomerOrders

