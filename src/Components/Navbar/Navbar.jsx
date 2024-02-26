import React, { useState } from 'react' 
import './Navbar.css'
import logo from '../Assets/bag.jpg'
import cart_icon from '../Assets/cc.jpg'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu,setMenu] = useState("shop");

  return (
    <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" className="small-logo" />
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("Shop")}}><Link style={{textDecoration:'none'}}to='/'>Shop</Link>{menu==="Shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Womens")}}><Link style={{textDecoration:'none'}}to='/Womens'>Womens</Link>{menu==="Womens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Mens")}}><Link style={{textDecoration:'none'}}to='/Mens'>Mens</Link>{menu==="Mens"?<hr/>:<></>} </li>
                <li onClick={()=>{setMenu("Kids")}}><Link style={{textDecoration:'none'}}to='/Kids'>Kids</Link>{menu==="Kids"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" className="small-cart-icon" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
    </div>
  )
}

export default Navbar
