import { useState } from "react";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";
import searchImages from "./api";
function App() {

    const [images, SetImage] = useState([])

  const handleSubmit = async (term) => {
  const result = await   searchImages(term)
  SetImage(result)
        
  };

  return (
    <div>
      <SearchBar  onSubmit = {handleSubmit} />
      <ImageList images = {images}/>
    </div>
  );
}

export default App;
