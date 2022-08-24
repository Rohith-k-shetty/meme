import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import Gallery from "./components/Gallery";
import Header from "./components/Header";

const App = () => {
  const [form, setForm] = useState({
    memes1: "",
    memes2: "",
    randomImage: "https://i.imgflip.com/1e7ql7.jpg",
  });

  const [meme, setMeme] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setMeme(data.data.memes));
  }, []);

  const getmeme = (e) => {
    e.preventDefault();
    const randomNumber = Math.floor(Math.random() * meme.length);
    const url = meme[randomNumber].url;
    setForm((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  };

  return (
    <div className="container">
      <Header />
      <Form form={form} setForm={setForm} getmeme={getmeme} />
      <Gallery form={form} />
    </div>
  );
};

export default App;
