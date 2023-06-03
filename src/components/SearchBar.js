import './SearchBar.css'
import React,{useState} from 'react'


export default function SearchBar({onSubmit}) {
  
  const [term , setTerm] = useState("")


  const handleChange = (event)=>{
    setTerm(event.target.value)
    // console.log(event.target.value)
    
  }
  
  
  const handleClick = async (event)=>{
    event.preventDefault()
  
  onSubmit(term)
}


  return (
    <div className='search-bar'>
     <form onSubmit= {handleClick} >
      <div><label >Enter Search Term </label></div>
     <input value = {term} onChange={handleChange} />          
     </form>
    </div>
  )
}
