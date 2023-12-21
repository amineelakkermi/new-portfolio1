import React, { useState } from 'react'
import './contact.css'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';


const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [ error , setError ] = useState(false);
  const [ succes , setSucces ] = useState(false);
  const [ validationError , setValidationError ] = useState(false);
  

  const sendEmail = (e) => {
   
    const name = formRef.current.name.value;
    const email = formRef.current.email.value;
    const message = formRef.current.message.value;


    e.preventDefault();
    if(!name || !email || !message){
      setValidationError(true);
      return;
    }else{
      setValidationError(false);
    }
     emailjs
    .sendForm('elakkermi', 'template_s7szudf', formRef.current, 'JA-qszfO4YXZXmYLX')
    .then((result) => {
      setSucces(true);
      setError(false); // Ajouter ceci pour réinitialiser l'état d'erreur lors d'une réussite
  }, (error) => {
      setError(true);
  });
   
  
   }
 
  

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
    <section id='contact' className='contact'>
    <motion.div variants={VariantsText1} initial = "initial" animate = "animate" className="contactWrapper">
    <div className="contactText">
    <h1>Let's work <br /> Together </h1>
    <div className="contactDetails">
    <span>Mail</span>
    <p>amineelakkermi37@gmail.com</p>
    </div>
    <div className="contactDetails">
    <span>Adress</span>
    <p>Mostaganem</p>
    </div>
    <div className="contactDetails">
    <span>Phone</span>
    <p>0663500029</p>
    </div>
    </div>
    <div className="contactForm">
        <form ref={formRef} onSubmit={sendEmail}>
        <input type="text" placeholder='Name' name='name' />
        <input type="email" placeholder='Email' name='email' />
        <textarea a rows={8} placeholder='Message' name='message' />
        <button type="submit">Submit</button>
        {error && "Error"}
        {succes && "Succes"}
        {validationError && <p>Veuillez remplir les champs nécéssaire</p>}
        </form>
    </div>
    </motion.div>
   
    </section>
  )
}

export default Contact