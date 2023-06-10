import useBookContext from '../hooks/use-books-context'
import React from 'react'
import BookShow from './BookShow'


function BookList() {
     
const {books} =  useBookContext()
console.log(books)
    const renderedBooks = books.map((book)=>{
   return <BookShow key = {book.id} book = {book}/>
    })


  return (
    <div className='book-list'>
  
        {renderedBooks} 
    </div>
  )
}


export default BookList
