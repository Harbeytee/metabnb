import React from 'react'
import'./footer.scss'
import footerlogo from './footerlogo.svg'
import facebook from './facebook.svg'
import instagram from './instagram.svg'
import twitter from './twitter.svg'



export default function Footer() {
  return (
    <footer>
       <div className="footer-first">
       <img src={footerlogo} alt="meta bnb footer lgoo" className="footer-logo" />
       <div>
            <h3>Community</h3>
            <p>NFT</p>
            <p>Tokens</p>
            <p>Landlords</p>
            <p>Discord</p>
       </div>

       <div>
        <h3>Places</h3>
        <p>Castles</p>
        <p>Farms</p>
        <p>Beach</p>
        <p>Learn more</p>

       </div>

       <div>
        <h3>About us</h3>
        <p>Road map</p>
        <p>Creators</p>
        <p>Career</p>
        <p>Contact us</p>

       </div>
       </div>
       <div className='bottom'>
        <div  className="socials">
        
        
          <img src={facebook} alt="facebook logo" />
          <img src={instagram} alt="instagram logo" />
          <img src={twitter} alt="twitter logo" />
        </div>
        <p><span style={{fontSize: '22px'}} className="copy">&copy;</span>  2022 Metabnb</p>
        

       </div>

    </footer>
  )
}
