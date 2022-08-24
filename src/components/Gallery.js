import React from "react";

const Gallery = ({ form }) => {
  return (
    <div className="gallery">
      <img src={form.randomImage} alt="" id="img" />
      <h1 id="meme1">{form.memes1}</h1>
      <h2 id="meme2">{form.memes2}</h2>
    </div>
  );
};

export default Gallery;
