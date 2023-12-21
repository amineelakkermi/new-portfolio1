import React from 'react'
import './services.css'
import { people } from '../../assets'
import { motion } from "framer-motion"

const Services = () => {
  const VariantsText1 = {
    initial : {
      x : "-220%",
      

    },
    animate : {
      x : "0",
      transition : {
        duration : 2,
        staggerChildren: 0.1,
      }
    }
  }


  return (
    <section className='services'>
     <motion.div variants={VariantsText1} initial = "initial" animate = "animate" className="services_heading">
     <span>
        I focus on helping your brand grow <br /> and move forward
      </span>
      <hr />
     </motion.div>

      <motion.div variants={VariantsText1} initial = "initial" animate = "animate" className="services_title">
        <div className="title_first">
          <img src={people} alt="people" />
          <h1> <b>Unique</b> Ideas</h1>
        </div>
        <div className="title_second">
          <h1><b>For Your</b> Future Website.</h1>
          <button>
            <a href={`#services`}>What We Do? </a>
          </button>
        </div>
      </motion.div>

      <motion.div variants={VariantsText1} initial = "initial" animate = "animate" className="services_boxes">
        <div className="box">
          <h3>Modern Website</h3>
          <p>
          Transform your designs into interactive and fully responsive websites, compatible with all devices. I employ a combination of cutting-edge programming languages and libraries, including HTML, CSS, Tailwind CSS, JavaScript, and React.js,
          
          </p>

          
        </div>
        <div className="box">
          <h3>Modern Framework</h3>
          <p>
          I develop dynamic user interfaces with advanced technologies using frameworks like React.js and Tailwind CSS, ensuring responsive and optimized web experiences that are both visually appealing and user-friendly.
          </p>          
        </div>
        <div className="box">
          <h3>Responsive Website</h3>
          <p>
          I design fluid and flexible websites, optimized for all devices. By combining adaptable layouts and intuitive interactivity, I ensure a consistent user experience across computers, tablets, and smartphones.
          </p>
         
        </div>
       
      </motion.div>
    </section>
  )
}

export default Services