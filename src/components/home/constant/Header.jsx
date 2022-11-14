import React, {useState, useRef, useEffect} from 'react'
import './header.scss'
import headerLogo from './headerlogo.svg'
import { Link } from 'react-router-dom'
export default function Header(props) {
  const [display, setDisplay] = useState(false)
  const node = useRef()
    function hamburger() {
      setDisplay(!display)
    }
    const nav ={
      transform:window.matchMedia("(max-width: 859px)").matches && !display ? "translateX(-100%)" : "translateX(0)"
    }
    const clickOutside = (ref, handler) => {useEffect(() => {
      function listener(e) {
          if(ref.current == e.target || !ref.current.contains(e.target)) {
              return
          }
          handler(e)
      }
  
    document.addEventListener('mousedown', listener)
  
    return () => { 
        document.removeEventListener('mousedown', listener) 
    }
  
    
    
    }, [ref, handler] )}

    clickOutside(node, () => setDisplay(false))
  return (
    
    <>
    <div onClick={hamburger} className='hamburger'>
      <div style={{transform: display? "translateY(4.5px) rotate(45deg)" : "rotate(0)"}} className="line1"></div>
      <div style={{transform: display? "translateY(-4.5px) rotate(-45deg)" : "rotate(0)"}} className="line2"></div>
    </div>

    <nav ref ={node} style={nav} id='navbar'>
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
