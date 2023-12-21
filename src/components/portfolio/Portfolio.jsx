import { motion , useScroll , useSpring, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import { pexels1, pexels2, r1,r2,r3 , portfolio, one, hoobank } from '../../assets'
import './portfolio.css'
const items = [
  {
    id : 1,
    title : 'React Portfolio',
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, facere quas maxime distinctio blanditiis tempore esse, pariatur eum rem eligendi nobis possimus porro voluptate aliquam.',
    image: hoobank,
    Link : "https://amineelakkermi.github.io/portfolio/"
  },
  {
    id : 2,
    title : 'Tripy',
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, facere quas maxime distinctio blanditiis tempore esse, pariatur eum rem eligendi nobis possimus porro voluptate aliquam.',
    image: one,
    Link : "https://amineelakkermi.github.io/tripy/"
  },
  {
    id : 3,
    title : 'Real Estate',
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, facere quas maxime distinctio blanditiis tempore esse, pariatur eum rem eligendi nobis possimus porro voluptate aliquam.',
    image: r3,
    Link : "https://amineelakkermi.github.io/real-estate/"
  },
  {
    id : 4,
    title : 'Hoobank',
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, facere quas maxime distinctio blanditiis tempore esse, pariatur eum rem eligendi nobis possimus porro voluptate aliquam.',
    image: hoobank,
    Link : "https://amineelakkermi.github.io/my-project3/"
  }

]

const Single = ({item}) => {
  
  return(
    <section className='single'>
    <div className="singleContainer" >
    <div className="singleWrapper">
      <div className="imageContainer"
      style={item.image === hoobank ? {height : "500px"} : {height : '400px'}
      }
      >
      <img src={item.image} alt="pexels" />
      </div>
      <div
        className="singleText">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <button><a target='ref' href={`${item.Link}`}>See Demo</a></button>
      </div>
    </div>
    </div>  
    </section>
  )
}
const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end" , "start start"],
  });

  const scaleX = useSpring(scrollYProgress , {
    stiffness : 100,
    damping : 30,
  })
  return (
    <div className='portfolio' ref={ref}>
    <div className="progress">
      <h1>Featured Works</h1>
      <motion.div style={{scaleX}} className="progressBar">

      </motion.div>
    </div>
     {
      items.map((item) => (
        <Single item={item} key={item.id} />
      ))
     }
    </div>
  )
}

export default Portfolio