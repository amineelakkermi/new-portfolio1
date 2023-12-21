import React from 'react'
import './parallax.css'

const Parallax = ({ type }) => {
  return (
    <section className='parallax_section' id={type === "services" ? 'services' : "portfolio"}
    style={{background : type === 'services' ? "linear-gradient(180deg , #111132 , #0c0c1d)" : "linear-gradient(180deg , #111132 , #505064)"}}
    >
      <h1>{type === 'services' ? 'What We Do?' : 'What We Did?'}</h1>
        <div className='mountains'></div>
        <div className='planets'></div>
        <div className={`${type === 'services' ? 'stars' : 'sun'}`}></div>
    </section>
  )
}

export default Parallax