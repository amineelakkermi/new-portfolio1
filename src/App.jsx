import React from 'react'
import './App.css'
import { Hero , Parallax , Services , Portfolio, Contact, Navbar  } from './components';

export const App = () => {
  return (
    <div>
    
    <div className='navHero'>
     <Navbar /> 
     <Hero />
    </div>
   
    <div>
     <Parallax type = 'services'/>
     <div><Services  /></div>
    </div>
    <div>
     <Parallax type = 'portfolio' /> 
     <Portfolio />
    </div>
    <Contact />
    
      
    </div>
  )
}


export default App;