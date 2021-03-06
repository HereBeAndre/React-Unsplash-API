import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import Container from "@material-ui/core/Container";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <Container>{images}</Container>;
};

export default ImageList;
