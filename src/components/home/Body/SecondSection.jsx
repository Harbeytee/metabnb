import React from 'react'
import mbtoken from './secondSectionImage/mbtoken.svg'
import metamask from './secondSectionImage/metamask.svg'
import opensea from './secondSectionImage/opensea.svg'
import adventureGrid from './adventureGrid'
import stars from './secondSectionImage/stars.svg'
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function SecondSection() {
  const grid = adventureGrid.map((img, index) => (
    <div key ={index} className='card'>
      <LazyLoadImage  src={img.img} alt="image of house" className="adventure-imgs" />
      <div className='flex'>
        <p>Desert king</p>
        <strong>1MBT per night</strong>
      </div>
      <div className='flex'>
        <p>2345km away</p>
        <p>available for 2weeks stay</p>
      </div>
      <LazyLoadImage src={stars} alt="stars image" className="star" />
    </div>
  ))
  return (
    <section className='second-section'>
        <div className="band">
            <LazyLoadImage src={mbtoken} alt="mbtoken logo" className="band-image" />
            <LazyLoadImage src={metamask} alt="metamask logo" className="band-image" />
            <LazyLoadImage src={opensea} alt="opensea logo" className="band-image" />
        </div>
        <h2>Inspiration for your next adventure</h2>
        <div className="grid-2">
        <div className="adventure-grid">
          {grid}
        </div>
        </div>
        
        

    </section>
  )
}
