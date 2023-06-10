import { useEffect} from 'react'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'
import useBookContext from './hooks/use-books-context'




export default function App() {
 const {fetchBooks} = useBookContext()

  useEffect(()=>{
    fetchBooks()
  },[])



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
        <BookList/>
           <BookCreate />
  

    </div>
  )
}
