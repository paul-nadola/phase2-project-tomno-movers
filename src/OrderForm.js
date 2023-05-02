
import React, { useState } from 'react'

function OrderForm() {
  const [range, setRange] = useState(0)
  const [type, setType] = useState('STUDIO APARTMENT')
  const [category, setCategory] = useState('SILVER')

  function handleChangeRange(e) {
    setRange(parseInt(e.target.value))
  }

  function handleChangeType(e) {
    setType(e.target.value)
  }

  function handleChangeCategory(e) {
    setCategory(e.target.value)
  }

  function handleFormSubmit(e) {
    e.preventDefault()
    const pricePerKm = getPricePerKm(type, category)
    const totalPrice = calculatePrice(pricePerKm, range)
    console.log(`Total price: KSH ${totalPrice}`)
  }

  function getPricePerKm(type, category) {
    // Prices per km based on premises type and package
    const prices = {
      'STUDIO APARTMENT': {
        'SILVER': 200,
        'GOLD': 250,
        'PLATINUM': 300,
      },
      'ONE BEDROOM APARTMENT': {
        'SILVER': 250,
        'GOLD': 300,
        'PLATINUM': 350,
      },
      'TWO BEDROOM APARTMENT': {
        'SILVER': 300,
        'GOLD': 350,
        'PLATINUM': 400,
      },
      'COMMERCIAL PREMISES': {
        'SILVER': 400,
        'GOLD': 500,
        'PLATINUM': 600,
      },
    }

    return prices[type][category]
  }

  function calculatePrice(pricePerKm, range) {
    return pricePerKm * range
  }

  return (
    <form id="order-form" onSubmit={handleFormSubmit}>
      <p>Total price: KSH {calculatePrice(getPricePerKm(type, category), range)}</p>
      <label htmlFor="type-options">Choose the type of premises you have</label>
      <select name="type" id="type-options" value={type} onChange={handleChangeType}>
        <option value="STUDIO APARTMENT">STUDIO APARTMENT</option>
        <option value="ONE BEDROOM APARTMENT">ONE BEDROOM APARTMENT</option>
        <option value="TWO BEDROOM APARTMENT">TWO BEDROOM APARTMENT</option>
        <option value="COMMERCIAL PREMISES">COMMERCIAL PREMISES</option>
      </select>
      <label htmlFor="category-options">Choose a package</label>
      <select name="category" id="category-options" value={category} onChange={handleChangeCategory}>
        <option value="SILVER">SILVER</option>
        <option value="GOLD">GOLD</option>
        <option value="PLATINUM">PLATINUM</option>
      </select>
      <label htmlFor="range">Slide to choose estimated distance in kilometres</label>
      <input id="range" type="range" name="range" min={0} max={500} value={range} onChange={handleChangeRange} />
      <p>{range} Kilometres</p>
      <label htmlFor="location-from">Pick-up</label>
      <input type="text" id="location-from" />
      <label htmlFor="location-to">Destination</label>
      <input type="text" id='location-to' />
      <label htmlFor="btn">Check your order before submission</label>
      <button type='submit' className='btn'>Create Order</button>
    </form>
  )
}

 export default OrderForm
