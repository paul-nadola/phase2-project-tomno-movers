import React from 'react'

function PackageDescription() {
  return (
    <div id='packages'>
        <div id='silver-package'>
            <h1>SILVER</h1>
            <p>This is our economy package. Services offered include:</p>
            <ul id='silver-list'>
                Truck to transport client property
                Experienced personnel to handle client equipment, for sophisticated equipment client to provide manual or instructions on how to handle the same
                Onloading and Offloading
            </ul>
        </div>
        <div id='gold-package'>
            <h1>GOLD</h1>
            <p>The services offered in the silver package include:</p>
            <ul id='silver-list'>
                Truck to transport client property
                Experienced personnel to handle client equipment, for sophisticated equipment client to provide manual or instructions on how to handle the same
                Deep cleaning and fumigation of the clients new premises
                Onloading and Offloading
            </ul>
        </div>
        <div id='platinum-package'>
            <h1>PLATINUM</h1>
            <p>This is our premium package. Services offered include:</p>
            <ul id='gold-list'>
                Truck to transport client property
                Experienced personnel to handle client equipment, for sophisticated equipment client to provide manual or instructions on how to handle the same
                Deep cleaning and fumigation of the client's new premises
                LAN Network installation, wifi installation, cable TV installation and landscaping according to customer specifications
                Onloading and Offloading
            </ul>
        </div>
    </div>
  )
}

export default PackageDescription