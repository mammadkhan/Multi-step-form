import React from 'react'

import checkmark from '../assets/images/icon-thank-you.svg'

export default function Last() {
  return (
    <div className='last'>
        <img src={checkmark} alt="Check mark icon" />
        <h2>Thank you!</h2>
        <p>Thanks for confirming your subscription! We hope you have fun using our platform.If you ever need support, please feel free to email us at support@loremgaming.com</p>
    </div>
  )
}
