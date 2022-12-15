import React from 'react'

export default function Fourth() {
  return (
    <div className='fourth'>
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
        <div className='checkUp'>
          <div className='subscription'>
            <div>
              <h2>Arcade(Monthly)</h2>
              <p>Change</p>
            </div>
            <p className='price'>$9/mo</p>
          </div>
          <div className="addons">
            <div>
              <h3>Online service</h3>
              <p>+$1/mo</p>
            </div>
            <div>
              <h3>Larger storage</h3>
              <p className='price'>+$2/mo</p>
            </div>
          </div>
        </div>
        <div className="total">
          <h3>Total (per month)</h3>
          <p className='price'>+$12/mo</p>
        </div>
        <div className='nextContainer'>
          <button>Go Back</button>
          <button>Next Step</button>
        </div>
    </div>
  )
}
