import React, {useState} from 'react'

function CustomerOrders({orders , fetchOrders,
range, handleChangeRange}) {
  const [toggle , setToggle] = useState(false)
  
  function handleToggle(){
    setToggle(!toggle)
  }

  const button = toggle? "Cancel Changes" : "Edit Order"
    const clientOrders = orders.map(order =>{
        return <div className='orders' key={order.id}>
        <button className='btn'onClick={handleToggle}>{button}</button>
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
        const editOrders = orders.map(order =>{
        return <form className='order-form'>
        <div className='orders' key={order.id}>
        <button className='delete'onClick={handleToggle}>{button}</button>
        <h1><i className='bx bx-user' ></i> <input type="text" value={order.name}/></h1>
        <p><i className='bx bxs-contact' ></i> <input type="number" value={order.phoneNumber}/></p>
        <p><i className='bx bxl-gmail'></i> <input type="text" value={order.email}/></p>
        <label htmlFor="">Enter new url</label>
        <input id='url' type="url" value={order.imageUrl} />
        <p><i className='bx bx-money' ></i> {order.price}</p>
        <label htmlFor="type-options">Premises</label>
      <select name="type" id="type-options" >
        <option value="STUDIO APARTMENT">STUDIO APARTMENT</option>
        <option value="ONE BEDROOM APARTMENT">ONE BEDROOM APARTMENT</option>
        <option value="TWO BEDROOM APARTMENT">TWO BEDROOM APARTMENT</option>
        <option value="COMMERCIAL PREMISES">COMMERCIAL PREMISES</option>
      </select>
      <br />
      <label htmlFor="category-options">Choose a package</label>
      <select name="category" id="category-options" >
        <option value="SILVER">SILVER</option>
        <option value="GOLD">GOLD</option>
        <option value="PLATINUM">PLATINUM</option>
      </select>
      <br />
      <label htmlFor="range">distance in kilometers</label>
      <input  id="range" type="range" name="range" min={10} max={500} value={range} onChange={handleChangeRange} />
      <p>{range} Kilometers</p>
        <p><i className='bx bxs-truck' ></i> <input type="text" value={order.pickup} /></p>
        <p><i className='bx bxs-truck' ></i> <input type="text" value={order.destination} /></p>
        <button type='submit' className='btn'>SUBMIT CHANGES</button>
        <br />
        <button className='delete' >DELETE ORDER</button>
</div>
  </form>

    })
  return (
    <div className='order-container'>
      {toggle? editOrders : clientOrders}
    </div>
  )
}

export default CustomerOrders

