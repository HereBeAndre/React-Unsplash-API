import React from "react";

const ImageCard = (props) => {
  const {
    alt_description,
    urls: { regular },
  } = props.image;

  return <img src={regular} alt={alt_description}></img>;
};

export default ImageCard;

// TODO: Set dynamic height for images
