import React from 'react'
import { useState } from 'react'

const Exercise22 = () => {
      const [formData,setFormData] = useState({
    username:'',
    email:'',
   agreement: false,
    country:''
  })
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(formData)

  
    

  }
  const handleChange = (e)=>{
  const{name,value,type,checked} = e.target
  setFormData((prev)=>({...prev,[name]:type === 'checkbox' ? checked:value}));

  };
  return (
    <div>
         <form onSubmit={handleSubmit}>
    <h1>registration</h1>
    <input type="text"  name="username" value={formData.username} onChange={handleChange} />
    <input type="email"  name="email" value={formData.email} onChange={handleChange} />
    <input type="checkbox" name="agreement"    checked ={formData. agreement} onChange={handleChange} />
    <select name="country" value={formData.country} onChange={handleChange}>
      <option value="">choose country</option>
      <option value="somali">Somalia</option>
      <option value="kenya">Kenya</option>
    </select>
    <button type="submit">submit</button>
    </form>
      
    </div>
  )
}

export default Exercise22
