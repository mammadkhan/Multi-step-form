import React from 'react'

import arcade from '../assets/images/icon-arcade.svg'
import advanced from '../assets/images/icon-advanced.svg'
import pro from '../assets/images/icon-pro.svg'


export default function Second() {
  return (
    <div className='second'>
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
        <div className='choice'>
          <input type="radio" name="payment" id="arcade" />
          <label htmlFor='arcade'>
            <img src={arcade} alt="#" />
            <div>
              <h2>Arcade</h2>
              <p>$9/mo</p>
            </div>
          </label>
        </div>
        <div className='choice'>
          <input type="radio" name="payment" id="advanced" />
          <label htmlFor='advanced'>
            <img src={advanced} alt="#" />
            <div>
              <h2>Advanced</h2>
              <p>$12/mo</p>
            </div>
          </label>
        </div>
        <div className='choice'>
          <input type="radio" name="payment" id="pro" />
          <label htmlFor='pro'>
            <img src={pro} alt="#" />
            <div>
              <h2>Pro</h2>
              <p>$15/mo</p>
            </div>
          </label>
        </div>
        <div className='toggle'>
          <p className='active'>Monthly</p>
          <input type="checkbox"/>
          <p>Yearly</p>
        </div>
        <div className='nextContainer'>
          <button>Go Back</button>
          <button>Next Step</button>
        </div>
    </div>
  )
}
