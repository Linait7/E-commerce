import React from 'react'
import './New_letters.css'
const New_letters = () => {
  return (
    <div className='New_letters'>
        <h1>Get Exclusive Offers On Your Emails</h1>
        <p>Subscribe to our new letter and stay updated </p>
        <div className="letters">
            <input type ="email" placeholders ="Your Email id" />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default New_letters
