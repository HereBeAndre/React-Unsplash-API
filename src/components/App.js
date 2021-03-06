import React, { useState } from "react";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList/ImageList";
import SearchBar from "./SearchBar/Searchbar";

const App = () => {
  const [images, setImages] = useState([]);
  const onSearchSubmit = async (searchTerm) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: searchTerm },
    });
    setImages(response.data.results);
  };

  return (
    <>
      <SearchBar onSubmit={onSearchSubmit} />
      <ImageList images={images} />
    </>
  );
};

export default App;
