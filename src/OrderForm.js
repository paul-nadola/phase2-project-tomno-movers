import React, { useState } from 'react'


function OrderForm() {
    const [range, setRange] = useState(0)
    function handleChange(e){
        setRange(e.target.value)
    }
  return (
    <form id='order-form'>
        <p>Total price : KSH </p>
        <label htmlFor="type-options">Choose the type of premises you have</label>
        <select name="type" id="type-options">
            <option >STUDIO APARTMENT</option>
            <option >ONE BEDROOM APARTMENT</option>
            <option >TWO BEDROOM APARTMENT</option>
            <option >COMMERCIAL PREMISES</option>
        </select>
        <label htmlFor="category-options">Choose a package</label>
        <select name="category" id="category-options">
            <option >SILVER</option>
            <option >GOLD</option>
            <option >PLATINUM</option>
        </select>
        <label htmlFor="range">Slide to choose estimated distance in kilometres</label>
        <input id='range' type="range" name='range' min= {0} max= {500} 
        onChange={handleChange}/>
        <p>{range} Kilometres</p>
        <label htmlFor="location-to">Pick-up</label>
        <input type="text" id='location-from' />
        <label htmlFor="location-to">Destination</label>
        <input type="text" id='location-to' />
        <label htmlFor="btn">Check your order before submission</label>
        <button type='submit' className='btn'>Create Order</button>
    </form>
  )
}

export default OrderForm