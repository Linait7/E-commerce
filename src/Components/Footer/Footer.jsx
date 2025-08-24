import React from 'react'
import './Footer.css';
import footer_logo from '../Assets/logo_big.png'
import instagram_logo from '../Assets/instagram_icon.png'
import pinterest_logo from '../Assets/pintester_icon.png'
import whatsapp_logo from '../Assets/whatsapp_icon.png'
const Footer = () => {
    let compo = ["Company" ,"Product" ,"Offices","About" , "Contact"]
  return (
    <div className ="footer">
        <div className ="footlogo">
            <img src ={footer_logo} alt =""/>
            <p>SHOPPER</p>
        </div>
       <ul>
  {compo.map((comp) => (
    <li key={comp}>{comp}</li>
  ))}
</ul>
<div className='reseau'>
    <div className='container'>
        <img src = {instagram_logo}/>
    </div>
     <div className='container'>
        <img src = {pinterest_logo} />
    </div>
     <div className='container'>
        <img src= {whatsapp_logo} />
    </div>
</div>
<div className='copyright'>
    <hr />
    <p>Copyright @2025 ALl Right Reserved</p>
</div>
      
    </div>
  )
}

export default Footer
