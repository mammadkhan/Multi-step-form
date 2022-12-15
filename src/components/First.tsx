import React from 'react'

export default function First() {
  return (
    <div className='first'>
        <h1>Personal info</h1>
        <p>Please provide your name, email, address and phone number.</p>
        <div className='field'>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder="e.g Stephen King" />
        </div>
        <div className='field'>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" placeholder="e.g stephenking@lorem.com" />
        </div>
        <div className='field'>
          <label htmlFor="number">Phone Number</label>
          <input type="tel" name="number" id="number" placeholder="e.g +1 234 567 890" pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"/>
        </div>
        <div className='nextContainer'>
          <button>Next Step</button>
        </div>
    </div>
  )
}
