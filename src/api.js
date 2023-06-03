import axios from "axios";

const searchImages = async (term) => {
  
  const response = await  axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID k8NZr18bcqe00w8RCK4lawRCHYkPiuvNvNTMbUdmjVc",
    },
    params: {
        query : term
    }
  });

  return response.data.results;
};

export default searchImages
