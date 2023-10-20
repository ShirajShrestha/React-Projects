import { useState } from 'react'
import './index.css'

function Testimonial() {
  const [currentIndex, setCurrentIndex]= useState(0)

  const testimonials = [
    {
      quote: 'This is the best design',
      author: 'Cheshire'
    },
    {
      quote: 'This is the best movie',
      author: 'Sid'
    },
    {
      quote: 'This is the best game',
      author: 'Genshin'
    }
  ]

  const handlePrevClick=()=>{
    setCurrentIndex(
      (currentIndex+testimonials.length-1)%testimonials.length
    )
  }
  const handleNextClick=()=>{
    setCurrentIndex(
      (currentIndex+1)%testimonials.length
    )
  }

  return (
    <>
      <div className='testimonials'>
        <div className='testimonials-quote'>
          {testimonials[currentIndex].quote}
        </div>
        <div className='testimonials-author'>
          - {testimonials[currentIndex].author}
        </div>
        <testimonials className='testimonials-nav'>
          <button onClick={handlePrevClick}>Prev</button>
          <button onClick={handleNextClick}>Next</button>
        </testimonials>
      </div>
    </>
  )
}

export default Testimonial
