import React from 'react'
import obj from './obj'
import stars from '../home/Body/secondSectionImage/stars.svg'
import location from './images/location.svg'
import './placetostay.scss'
export default function PlaceToStay() {
    const grid = obj.map((img, index) => (
        <div key ={index} className='card'>
          <img  src={img.img} alt="mage of house" className="adventure-imgs" />
          <div className='flex'>
            <p>Desert king</p>
            <strong>1MBT per night</strong>
          </div>
          <div className='flex'>
            <p>2345km away</p>
            <p>available for 2weeks stay</p>
          </div>
          <img src={stars} alt="stars image" className="star" />
        </div>
      ))

  return (
    <div className='place-to-stay'>
        <header>
            
                <p>Restaurant</p>
                <p>Cottage</p>
                <p>Castle</p>
            
            
                <p>fantasy city</p>
                <p>beach</p>
                <p>Carbins</p>
            
                <p>Off-grid</p>
                <p>Farm</p>
                <div className='location'><p >Location</p> <img src={location} alt="setings icon" className="location-icon" /></div>
            
          </header>
        
        <div className="grid-2">
            <div className="adventure-grid">
            {grid}
            </div>
        </div>
       
    </div>
  )
}
