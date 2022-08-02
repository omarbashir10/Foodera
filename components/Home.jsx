import React from 'react'
import './style.css'


function Home() {
  return (
    <section id='home'>
        <div className='hero'>
            <h1>
            GOOD BYE JUNK FOOD ,<br/>
            HELLO SUPER HEALTHY FOOD !    
            </h1>
            <div className="buttons">
                <a href="#services" className='btn'>I'M HUNGRY</a>
                <a href="#order" className='btn'>ORDER NOW</a>
            </div>
        </div>
    </section>
  )
}

export default Home