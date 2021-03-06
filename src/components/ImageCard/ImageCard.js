import React from "react";

const ImageCard = (props) => {
  const {
    alt_description,
    urls: { regular },
  } = props.image;

  return <img alt={alt_description} src={regular}></img>;
};

export default ImageCard;
