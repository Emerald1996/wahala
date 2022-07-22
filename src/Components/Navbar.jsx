import React, { Component } from 'react'
import Navigation from './Navigation'
import Logo from "../Assets/logo.svg"
import Cart from "../Assets/cart.svg"
import CurrencySwitch from './CurrencySwitch'
import "../Styles/Navbar.css"
import { Link } from 'react-router-dom'
import home from "../Assets/homebutton.svg"

export class Navbar extends Component {
  render() {
    const categoryNames = this.props.categories
    return (
      <div className='navbar'>
        <div className='left-nav'>
            <Link to="/">
        <img src={home} alt={home} width="30px" height="20px"/>
      </Link>
            <Navigation categories={ categoryNames} />
        </div>
        <img src={Logo} alt={Logo}/>

        <div className='right-nav'>
            <CurrencySwitch/>
            <img src={Cart} alt={Cart} className='cart'/>
        </div>
      </div>
    )
  }
}

export default Navbar