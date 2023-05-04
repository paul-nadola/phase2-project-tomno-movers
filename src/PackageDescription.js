import React from 'react'

function PackageDescription() {
  return (<>
  <h2>Welcome to Prime Time Movers!</h2>
  <p>Kindly browse through our products and select one that suits you.</p>
  <p>Note that flat rate is charged on the first ten kilometers on every package.</p><br/>
    <div id='packages'>
        <div id='silver-package'>
            <h1>SILVER</h1>
            <p>The first 10 kilometers will be charged as follows:</p>
            <li>Studio Apartment : 4000</li>
            <li>One Bedroom Apartment : 4500</li>
            <li>Two Bedroom Apartment : 5000</li>
            <li>Commercial Premises : 6500</li>
            <p>This is our economy package. Services offered include:</p>
            <div id='silver-list'>
            <li>Truck to transport client property</li>
            <li>Experienced personnel to handle client equipment, for sophisticated equipment client to provide manual or instructions on how to handle the same</li>
            <li>Onloading and Offloading client property</li>
            </div>
        </div>
        <div id='gold-package'>
            <h1>GOLD</h1>
            <p>The first 10 kilometers will be charged as follows:</p>
            <li>Studio Apartment : 4500</li>
            <li>One Bedroom Apartment : 5000</li>
            <li>Two Bedroom Apartment : 5500</li>
            <li>Commercial Premises : 7000</li>
            <p>The services offered in the silver package include:</p>
            <div id='silver-list'>
            <li>Truck to transport client property</li>
            <li>Experienced personnel to handle client equipment, for sophisticated equipment client to provide manual or instructions on how to handle the same</li>
            <li>Deep cleaning and fumigation of the clients new premises</li>
            <li>Onloading and Offloading client property</li>
            </div>
        </div>
        <div id='platinum-package'>
            <h1>PLATINUM</h1>
            <p>The first 10 kilometers will be charged as follows:</p>
            <li>Studio Apartment : 4500</li>
            <li>One Bedroom Apartment : 5500</li>
            <li>Two Bedroom Apartment : 6000</li>
            <li>Commercial Premises : 7500</li>
            <li>The first 5 kilometers will be charged a flat </li>
            <p>This is our premium package. Services offered include:</p>
            <div id='gold-list'>
            <li>Truck to transport client property</li>
            <li>Experienced personnel to handle client equipment, for sophisticated equipment client to provide manual or instructions on how to handle the same</li>
            <li>Deep cleaning and fumigation of the clients new premises</li>
            <li>LAN Network installation, wifi installation, cable TV installation and landscaping according to customer specifications</li>
            <li>Onloading and Offloading client property</li>
            </div>
        </div>
    </div>
    </>
  )
}

export default PackageDescription