import React, { useState } from 'react'
import './navbar.css'
import { facebook, github, instagram } from '../../assets'
import { RiMenu3Line , RiCloseLine } from "react-icons/ri"
import { motion } from "framer-motion"

const navItem = [
    {
        id : 'home',
        title : "Home",
    },
    {
        id : 'services',
        title : "Services",
    },
    {
        id : 'portfolio',
        title : "Portfolio",
    },
    {
        id : 'contact',
        title : "Contact",
    },
]

const Navbar = () => {
  const variants = {
    open : {
        clipPath: "circle(1200px at 50px 50px)",
        transition : {
            type: "spring",
            stiffness: 20,
        },
    },
    closed: {
        clipPath: "circle(30px at 50px 50px)",
        transition : {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40,
        }
    }
  }
  const itemVariants = {
    open : {
        transition : {
        staggeredChildren : 0.1,
        },
    },
    closed : {
        transition : {
        staggerChildren : 0.05,
        staggerDirection : -1,
        }
    }
  }
  const linkVariants = {
   open : {
    y : 0,
    opacity : 1
   },
   closed : {
    y : 50,
    opacity : 0
   }
  }
  const [toggle , setToggle] = useState(false);
  return (
    <nav className='navbar'>
        <motion.div 
        animate = { toggle ? "open" : "closed" }
        className="sideBar">
        {
        toggle ?
      
        <RiCloseLine color='black' cursor={"pointer"} className='RiCloseLine' size={35} onClick={() => setToggle(false)}/>
      
        :
        <div className='circle'>
        <RiMenu3Line color='black' cursor={"pointer"}   size={28} onClick={() => setToggle(true)}/>
        </div>
        }
        {
            toggle && (
            <motion.div variants={variants} className='navbarContainer'>
            <motion.ul variants={itemVariants}
            animate = { toggle ? "open" : "closed" }
            className='itemsContainer'>
             {
                navItem.map((item , index) => (
                    <motion.li variants={linkVariants}
                    animate = { toggle ? "open" : "closed" }
                    key={item.id}>
                    <a href={`#${item.id}`}>{item.title}</a>
                    </motion.li>
                ))
             }
            </motion.ul >
            </motion.div>
            )
        }
        </motion.div>
        <div className='contentSide'>
        <h3>Elakkermi Amine</h3>
        <ul className='social-media'>
            <li>
                <a target='ref' href="https://www.instagram.com/amineelakkermi2/"><img src={instagram} alt="instagram" /></a>
            </li>
            <li>
                <a target='ref' href="https://github.com/amineelakkermi/portfolio"><img src={github} alt="github" /></a>
            </li>
           
        </ul>
        </div>
       
    </nav>
  )
}

export default Navbar