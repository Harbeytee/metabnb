import React from 'react'
import firsthouse from './firstSectionImages/firsthouse.svg'
import secondhouse from './firstSectionImages/secondhouse.svg'
import thirdhouse from './firstSectionImages/thirdhouse.svg'
import fourthhouse from './firstSectionImages/fourthhouse.svg'
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function FirstSection() {
  return (
    <section className='first-section'>
        <article>
            <h1>Rent a <span className="pink-text">place</span> away from <span className="pink-text">home</span> in the <span className="pink-text">metaverse</span></h1>
            <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
            <div className="form">
                <input type="text" placeholder='Search for location'/>
                <button>Search</button>
            </div>

        </article>
        <aside>
            <div className="first">
                <LazyLoadImage src={firsthouse} alt="" />
                <LazyLoadImage src={secondhouse} alt="" />
            </div>
            <div className="second">
                <LazyLoadImage src={thirdhouse} alt="" />
                <LazyLoadImage src={fourthhouse} alt="" />
            </div>

        </aside>
    </section>
  )
}
