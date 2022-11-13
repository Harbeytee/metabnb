import React, {useState} from 'react'
import './header.scss'
import headerLogo from './headerlogo.svg'
import { Link } from 'react-router-dom'
export default function Header(props) {
  const [display, setDisplay] = useState(false)
 
    function hamburger() {
      setDisplay(!display)
    }
    const nav ={
      transform:window.matchMedia("(max-width: 859px)").matches && !display ? "translateX(-100%)" : "translateX(0)"
    }
  return (
    
    <>
    <div onClick={hamburger} className='hamburger'>
      <div style={{transform: display? "translateY(4.5px) rotate(45deg)" : "rotate(0)"}} className="line1"></div>
      <div style={{transform: display? "translateY(-4.5px) rotate(-45deg)" : "rotate(0)"}} className="line2"></div>
    </div>
    <nav style={nav} id='navbar'>
        <Link to="/"><img src={headerLogo} alt="meta bnb logo" className="header-logo" /></Link>
        <ul className='nav'>
            <Link style={{textDecoration: 'none', color: '#434343'}} to="/" >Home</Link>
            <Link style={{textDecoration: 'none', color: '#434343'}} to="/placetostay" >Place to stay</Link>
            <li>NFTs</li>
            <li>Community</li>

        </ul>
        <button onClick={props.pop}>Connect wallet</button>
    </nav>
    
    </>
  )
}
