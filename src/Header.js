import React from 'react'

function Header() {
  return (
    <div id='header'>
        <div id='header-name'>
             <h1>TOMNO MOVERS</h1>
            <p>Reliable relocations!.</p>
        </div>
        <div>
            <form id='search'>
                <label htmlFor="type-search">SEARCH BY TYPE</label>
                <input type="text" placeholder='Search by type' />
               <br />
               <label htmlFor="category-search">SEARCH BY CATEGORY</label>
                <input id='category-search' type="text" placeholder='Search by category' />

            </form>
        </div>
           
             
        
        {/* <form id='search'>
            <input type="text" placeholder='Search by type' />
            <input type="text" placeholder='Search by category' />

        </form> */}
    </div>
  )
}

export default Header
