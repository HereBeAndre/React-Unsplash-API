import React, { useState } from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./Searchbar";

const App = () => {
  const [images, setImages] = useState([]);
  const onSearchSubmit = async (searchTerm) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: searchTerm },
    });
    console.log(response.data.results);
    setImages(response.data.results);
  };

  return (
    <>
      <SearchBar onSubmit={onSearchSubmit} />
      {/* <ImageList images={images}></ImageList> */}
    </>
  );
};

export default App;
