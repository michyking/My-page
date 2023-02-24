import React from "react";
import { useState } from "react";
import axios from "axios"
import "./contact.css";

const Contact = () => {

  const [data, setData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const { name, email, message } = data;

  const changeHandler = (e) => {
    const {name, value} = e.target;
    setData((prev) => {
      return {...prev, [name]: value}
    });

    // This one below actually works
    // // setData({...data, [e.target.name]: e.target.value});
  };
  

  const submitHandler = (e) => {
    e.preventDefault();

    axios.post('https://sheet.best/api/sheets/65175bb0-c145-4257-aa68-7a2216d927e1', data).then((response)=>{
      
    // clearing input

      setData({
         name: "",
         email: "",
         message: ""
      })
    })
  }

  return (
    <form onSubmit={submitHandler} autoComplete= "off" >
      <h3>Fill out the form below:</h3>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={name}
        onChange={changeHandler}
      />
      <input
        type="email"
        name="email"
        placeholder="Enter email"
        value={email}
        onChange={changeHandler}
      />
      <textarea
        name="message"
        id=""
        cols="50"
        rows="10"
        value={message}
        onChange={changeHandler}
        placeholder="Enter Message Here..."
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Contact
