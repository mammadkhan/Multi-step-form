import React from 'react'

export default function Third() {
  return (
    <div className='third'>
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
        <div className='addon'>
          <input id='os' type="checkbox" />
          <label htmlFor='os'>
            <div>
              <h2>Online service</h2>
              <p>Access to multiplayer games</p>
            </div>
            <p className='price'>+$1/mo</p>
          </label>
        </div>
        <div className='addon'>
          <input id='ls' type="checkbox" />
          <label htmlFor='ls'>
            <div>
              <h2>Larger storage</h2>
              <p>Extra 1TB of cloud save</p>
            </div>
            <p className='price'>+$2/mo</p>
          </label>
        </div>
        <div className='addon'>
          <input id='cp' type="checkbox" />
          <label htmlFor='cp'>
            <div>
              <h2>Customizable profile</h2>
              <p>Custom theme on your profile</p>
            </div>
            <p className='price'>+$2/mo</p>
          </label>
        </div>
        <div className='nextContainer'>
          <button>Go Back</button>
          <button>Next Step</button>
        </div>
    </div>
  )
}
