import React from 'react';
import classes from './ContactForm.css';
import emailjs from 'emailjs-com';


export default function ContactForm() {



  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('javenassociates', 'tenterraces', e.target, 'user_6Bz0zVITsFAqiywbnqVJ9')
      .then((result) => {
          console.log(result.text);
          alert('Thank you for your email!')
          
      }, (error) => {
          console.log(error.text);
          alert('Opps something must have gone wrong. Please try again');
      });
  }

  return (
    <div >
    <h3>Contact Us</h3>
    <form className={classes.ContactForm}   onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Contact Number</label>
      <input type="text" name="contact_number" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
   
    </div>
  );
}


