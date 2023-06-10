import{useState} from 'react';
import useBookContext from '../hooks/use-books-context';
export default function BookCreate() {

const  [value, setValue] = useState('')
const {createBook } = useBookContext()

const handleSubmit = (event)=>{
    event.preventDefault()
    createBook(value)
    setValue('')
}

  
  const handleChange = (event)=>{
    // event.target.value
    setValue(event.target.value)
  }

 

  return (
    <div className='book-create'>
        <h3>Add a Book</h3>

   <form onSubmit={handleSubmit} >
    <label>Title</label>
   <input className='input' type="text" value = {value} onChange={handleChange}/>
      <button className='button'>Submit</button>
   </form>
    </div>
  )
}
