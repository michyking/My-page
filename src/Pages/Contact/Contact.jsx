import React from 'react'
import "./contact.css";


const Contact = () => {
  return (
    <form>
      <h3>Fill out the form below:</h3>
      <input type="text" placeholder='Full Name' />
      <input type="email" placeholder='enter email'/>
      <textarea name="" id="" cols="50" rows="10"></textarea>
      <button type="submit">Submit</button>
    </form>
  )
}

export default Contact