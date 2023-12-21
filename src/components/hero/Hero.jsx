import React from 'react'
import './hero.css'
import { bg, hero , hoobank, mountains } from '../../assets'
import { motion } from 'framer-motion'


const Hero = () => {
  const variants = {
    initial : {
      x : 0,
    },
    animate : {
      x : "-220%",
      transition : {
        duration : 20,
        repeat : Infinity,
        repeatType : 'mirror',
      }
    }

  }
const VariantsText = {
  initial : {
    x : "-220%",
  },
  animate : {
    x : "0",
    transition : {
      duration : 1.5,

    }
  }
}
const VariantsImage = {
  initial : {
    opacity : 0
  },
  animate : {
    opacity : 1,
    transition : {
      duration : 2,

    }
  }
}


  return (
   <section id='home' className='heroSection'>
        <motion.div variants={VariantsText} initial = "initial" animate = "animate" className='textContainer'>
        <span>Elakkermi Ahmed</span>
        <h1>Web Developer , <br /> And Ui Designer</h1>
        <div className='buttonContainer'>
        <button>
          <a href="#portfolio">See The Latest Works</a>
        </button>
        <button id='contactMe'>
          <a href="#contact">Contact Me</a>
        </button>
        </div>
        </motion.div>
       <motion.div
       variants={variants}
       initial = "initial"
       animate = 'animate'
       className='slidingText'>
       Writer Content
       </motion.div>
        <motion.div variants={VariantsImage} initial = "initial" animate = "animate" className='imgContainer'>
            <img src={hero} alt="Hero" />
        </motion.div>
    </section>
   
  )
}

export default Hero