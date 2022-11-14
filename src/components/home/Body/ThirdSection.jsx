import React from 'react'
import slides from './secondSectionImage/slides.svg'
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function ThirdSection() {
  return (
    <section className='third-section'>
        <article>
            <h2>Metabnb NFTs</h2>
            <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
            <button>Learn more</button>
        </article>
        <LazyLoadImage src={slides} alt="image slides" className="slide-images" />
    </section>
  )
}
