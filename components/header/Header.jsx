import React from 'react'
import { Link } from 'react-router-dom'
import { nav } from "../../assets/data/data"
import logo from "../../assets/images/planthouse.svg"
import "./Header.css"
import { User } from './User'


export const Header = () => {
    window.addEventListener("scroll", function () {
        const header = this.document.querySelector(".header")
        header.classList.toggle("active", this.window.scrollY > 100)
      }) 
  return (
  <>
  <header className='header'>
    <div className='scontainer flex'>
        <div className="logo">
            <img src={logo} alt='logo' width='50px'/>
        </div>
        <nav>
            <ul>{nav.map((link) => (
                <li key={link.id}>
                <Link to={link.url}>{link.text}</Link>               
                </li>
            ))}
            </ul>
        </nav>
        <div className='account flexCenter'>
            <User />
          </div>
    </div>
 </header> 

 </>
 )
}

export default Header
