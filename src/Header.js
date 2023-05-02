import React from 'react'

function Header() {
  return (
    <div id='header'>
        <div id='header-name'>
             <h1>PRIME TIME MOVERS</h1>
            <p id="intro">Premier moving solutions!</p>
        </div>
        <div>
            <form id='search'>
                <label htmlFor="type-search"></label>
                <input type="search" placeholder='Search by type' />
            </form>
            <div>
                <form id="search">
                <label htmlFor="category-search"></label>
                <input id='category-search' type="text" placeholder='Search by category' />
                </form>
            </div>
        </div>
           
             
        
        {/* <form id='search'>
            <input type="text" placeholder='Search by type' />
            <input type="text" placeholder='Search by category' />

        </form> */}
    </div>
  )
}

export default Header
