import React, { useContext } from "react";
import Card from "./components/Card";
import Banner from "./components/Banner";
import "./App.css";

const cards = [
  {
    img: "https://i.redd.it/ynxld6zshup11.jpg",
    title: "Falls",
    artist: "ODESZA",
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/87/NOTD_-_I_Wanna_Know.png/220px-NOTD_-_I_Wanna_Know.png",
    title: "I wanna Know",
    artist: "NOTD",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/41JdA7Zqr0L.jpg",
    title: "A Momemt Apart",
    artist: "ODESZA",
  },
  {
    img: "https://i.redd.it/ynxld6zshup11.jpg",
    title: "Falls",
    artist: "ODESZA",
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/87/NOTD_-_I_Wanna_Know.png/220px-NOTD_-_I_Wanna_Know.png",
    title: "I wanna Know",
    artist: "NOTD",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/41JdA7Zqr0L.jpg",
    title: "A Momemt Apart",
    artist: "ODESZA",
  },
];

function App() {
  return (
    <div className="App appCointainer">
      <Banner />
      <div className="cardGrid">
        {cards.map((song) => (
          <Card song={song} />
        ))}
      </div>
    </div>
  );
}

export default App;
