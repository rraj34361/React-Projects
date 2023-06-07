import React,{useState} from 'react'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'

export default function App() {
const [books, setBooks] = useState([])
  
const deletBookById  = (id)=>{
  const updatedBooks = books.filter((book)=>{
    return book.id !== id;
  })
  setBooks(updatedBooks)
}


const createBook = (title)=>{
  const updatedBooks = [...books, {id : Math.round(Math.random()*9999), title}]
  setBooks(updatedBooks)
}

const editBookById = (id, newTitle)=>{
  const updatedBooks = books.map((book)=>{
    if(id===book.id){
      return {...book, title : newTitle}
    }
    return book
  })
  setBooks(updatedBooks)
} 

  return (
    <div className='app'>
      <h1>Reading List</h1>
        <BookList onEdit= {editBookById} onDelete = {deletBookById}  books = {books}/>
           <BookCreate  onCreate = {createBook}/>
  

    </div>
  )
}
