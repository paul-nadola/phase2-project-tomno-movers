
import React, { useState } from 'react'
import CustomerOrders from "./CustomerOrders";
import SearchBar from "./SearchBar";

function OrderForm({fetchOrders , orders, handleSearch }) {
  const [range, setRange] = useState(0)
  const [type, setType] = useState('STUDIO APARTMENT')
  const [category, setCategory] = useState('SILVER')
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");



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


  function handleFormSubmit(e) {
    e.preventDefault()
    const pricePerKm = getPricePerKm(type, category)
    const totalPrice = calculatePrice(pricePerKm, range)
    console.log(`Total price: KSH ${totalPrice}`)
    const data = {
    name: name,
    phoneNumber: number,  
    email: email,
    imageUrl: image,  
    price: totalPrice,
    range: range,
    type: type,
    category: category,
    pickup: pickup,
    destination: destination,
    };
    console.log(data)
    fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => 
        // console.log(response)
        response.json())
        
        .then(data =>{
            fetchOrders(data)
            // setName("")
            // setNumber("")
            // setEmail("")
            // setType("STUDIO APARTMENT")
            // setCategory("SILVER")
            // setRange(10)
            // setPickup("")
            // setDestination("")
    }
    )
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


  return (<>
    
    <form className="order-form" onSubmit={handleFormSubmit}>
      <h2>CREATE AN ORDER</h2>
      <p className="prompt">Kindly fill out the following form to make an order!</p><br/>
      <label htmlFor='customer-name'>Enter your name</label>
      <input type="text" placeholder='Name' id='customer-name' onChange={handleName}/><br/>
      <label htmlFor="customer-number">Enter your phone number starting with your country code without the '+'</label>
      <input type="number" placeholder='Phone number' id='customer-number' onChange={handleNumber}/><br/>
      <label htmlFor="customer-email">Kindly enter your email address</label>
      <input type="text" placeholder='email address' id='customer-email' onChange={handleEmail}/><br/>
      <label htmlFor="customer-image">Kindly enter a URL of an image of your premises</label>
      <input type="url" placeholder='image url' id='customer-image' onChange={handleImage}/><br/>
      
      <label htmlFor="type-options">Choose the type of premises you have</label>
      <select name="type" id="type-options" value={type} onChange={handleChangeType}>
        <option value="STUDIO APARTMENT">STUDIO APARTMENT</option>
        <option value="ONE BEDROOM APARTMENT">ONE BEDROOM APARTMENT</option>
        <option value="TWO BEDROOM APARTMENT">TWO BEDROOM APARTMENT</option>
        <option value="COMMERCIAL PREMISES">COMMERCIAL PREMISES</option>
      </select><br/>
      <label htmlFor="category-options">Choose a package</label>
      <select name="category" id="category-options" value={category} onChange={handleChangeCategory}>
        <option value="SILVER">SILVER</option>
        <option value="GOLD">GOLD</option>
        <option value="PLATINUM">PLATINUM</option>
      </select><br/>
      <label htmlFor="range">Slide to choose estimated distance in kilometers</label>
      <input id="range" type="range" name="range" min={10} max={500} value={range} onChange={handleChangeRange} />
      <p>{range} Kilometers</p><br/>
      <p><strong>Total price:</strong> KSH {calculatePrice(getPricePerKm(type, category), range)}</p><br/>
      <label htmlFor="location-from">Pick-up</label>
      <input type="text" placeholder='Enter pick-up location' id="location-from" onChange={handleChangePickup}/>
      <label htmlFor="location-to">Destination</label>
      <input type="text" placeholder='Enter destination' id='location-to'  onChange={handleChangeDestination} /><br/>
      <label htmlFor="btn">Kindly confirm your details before submission</label><br/>
      <button type='submit' className='btn'>Create Order</button>
    </form>
    <br />
    <h1>Search for submitted orders</h1>
    <SearchBar onSearch={handleSearch} />
    <h1>MY ORDERS</h1>
    <CustomerOrders fetchOrders = {fetchOrders} orders = {orders}
    range = {range} handleChangeRange = {handleChangeRange}/><br/>
    </>
  )
}

 export default OrderForm;
