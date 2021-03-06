import React from "react";

const ImageList = (props) => {
  console.log(props);
  const images = props.images.map((image) => {
    return (
      <img
        key={image.id}
        alt={image.alt_description}
        src={image.urls.regular}
      ></img>
    );
  });
  return <div>{images}</div>;
};

export default ImageList;
