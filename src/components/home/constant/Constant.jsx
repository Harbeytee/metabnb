import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import eks from '../Body/eks.svg'
import '../Body/homebody.scss'
import wolf from '../Body/wolf.svg'
import wallet from '../Body/wallectconnect.svg'
import chevron from '../Body/chevronright.svg'
export default function Constant(props) {
  return (
    <>
    {props.popup &&
      <div  className="popup-container">
        <div className="popup">
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <span style={{fontSize: '24px', fontWeight: '700'}}>Connect Wallet</span>
            <img onClick={props.closePopup} src={eks} alt="close popup" className="eks" />
          </div>

          <div className="line"></div>

          <div className='choose-btns'>
            <p style={{fontSize: '16px', paddingBottom:'0.15rem'}}>Choose your preferred wallet</p>
            <div style={{backgroundColor: '#f5f8fa'}} className="connect-wallet">
              <div className='connect-btn'>
                <img src={wolf} alt="" className="icon" />
                <p>Metamask</p>
              </div>
              <img src={chevron} alt="" className="right" />
            </div>

            <div className="connect-wallet">
              <div className='connect-btn'>
                <img src={wallet} alt="" className="icon" />
                <p>WalletConnect</p>
              </div>
              <img src={chevron} alt="" className="right" />

            </div>
          </div>

        </div>
      </div>
      }
    <Header pop={props.pop} />
    <Outlet />
    <Footer />
    </>
  )
}
