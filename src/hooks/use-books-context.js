import { useContext } from "react";
import BooksContext from "../Context/books";

function useBookContext() {
  return useContext(BooksContext);
}

export default useBookContext;
