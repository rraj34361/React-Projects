import React,{useState, useEffect} from 'react'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'
import axios from 'axios'




export default function App() {
const [books, setBooks] = useState([])




const fetchBook = async ()=>{
const response = await axios.get('http://localhost:3001/books')
   setBooks(response.data)
}

useEffect(()=>{
  fetchBook()
},[])


const deletBookById  = async (id)=>{
  await axios.delete(`http://localhost:3001/books/${id}`)
  const updatedBooks = books.filter((book)=>{
    return book.id !== id;
  })
  setBooks(updatedBooks)
}


// const createBook = (title)=>{
//   const updatedBooks = [...books, {id : Math.round(Math.random()*9999), title}]
//   setBooks(updatedBooks)
// }

const createBook = async (title)=>{
  const response = await axios.post('http://localhost:3001/books ',{
    title
  })

  const updatedBooks = [...books, response.data]
setBooks(updatedBooks)
}





const editBookById = async (id, newTitle)=>{

  const response = await axios.put(`http://localhost:3001/books/${id}`, {
   title : newTitle
  })
// console.log(response.data)
  const updatedBooks = books.map((book)=>{
    if(id===book.id){
      return {...book, ...response.data}
    }
    return book
  })
  setBooks(updatedBooks)
} 

// const editBookById = (id, newTitle)=>{
//   const updatedBooks = books.map((book)=>{
//     if(id===book.id){
//       return {...book, title : newTitle}
//     }
//     return book
//   })
//   setBooks(updatedBooks)
// } 

  return (
    <div className='app'>
      <h1>Reading List</h1>
        <BookList onEdit= {editBookById} onDelete = {deletBookById}  books = {books}/>
           <BookCreate  onCreate = {createBook}/>
  

    </div>
  )
}
