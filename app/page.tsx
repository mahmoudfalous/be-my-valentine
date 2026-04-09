"use client";

import { useState } from "react";

export default function Home() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [noStyle, setNoStyle] = useState({});

  const [currentGif, setCurrentGif] = useState("https://media.tenor.com/XSkDXFEB8AIAAAAi/blinking-cat-blinking.gif");
  const [noText, setNoText] = useState("No");

  const yesButtonSize = noCount * 20 + 16;

  const noGifs = [
    "https://c.tenor.com/gXmAMWUQJs0AAAAd/tenor.gif",
    "https://media.tenor.com/P-3a21LgmAkAAAAj/cute-cry.gif",
    "https://media.tenor.com/TYSqB4d-uvoAAAAj/cute-crying.gif",
    "https://media.tenor.com/g4gz280_dawAAAAj/mugmugmelon-dog.gif",
    "https://media.tenor.com/xUWuCwMMhMMAAAAi/madebychie-mocha-and-milk.gif",
    "https://media.tenor.com/CZOOCfalXVkAAAAi/journey-sad.gif",
    "https://c.tenor.com/MgUMKz56Vy4AAAAC/tenor.gif",
    "https://media.tenor.com/-7YpWqUXlm4AAAAi/peach-goma-peach-and-goma.gif",
    "https://media1.tenor.com/m/xAENiA7DSZoAAAAC/cry.gif",
    "https://media.tenor.com/EyHUnyUV17cAAAAi/bunny-cute.gif"
  ];

  const phrases = [
    "Think again... please? 🥹",
    "Are you 100% sure? 😶",
    "This hurts my feelings... 😔",
    "I trusted you... 😢",
    "You sure you wanna do that? 👀",
    "Please don’t break my tiny heart 💔🥺",
    "I’ll remember this... 😤",
    "You’re really gonna say no? 😳",
    "Come on, be nice 😭",
    "Just click yes... it’s easy 😏",
    "Don’t be cold like that 🥶",
    "You’re making me cry fr 😭",
    "Say yes and I’ll be happy forever 🥹✨",
    "Why you gotta do me like this? 😩",
    "I thought we were friends… 😔",
    "Okay this is getting personal now 😭",
    "Last LAST chance 😤",
    "You're testing my patience 😩",
    "Please reconsider 😢",
    "You know you want to click yes 😏",
  ];

  const handleNoClick = () => {
    const newCount = noCount + 1;
    setNoCount(newCount);

    const availableGifs = noGifs.filter((gif) => gif !== currentGif);
    const randomGif = availableGifs[Math.floor(Math.random() * availableGifs.length)];
    setCurrentGif(randomGif);

    const availableTexts = phrases.filter((text) => text !== noText);
    const randomText = availableTexts[Math.floor(Math.random() * availableTexts.length)];
    setNoText(randomText);

    if ((newCount + 1) % 3 === 0) {
      const randomX = Math.floor(Math.random() * 70) + 10;
      const randomY = Math.floor(Math.random() * 70) + 10;

      setNoStyle({
        position: "absolute",
        top: `${randomY}%`,
        left: `${randomX}%`,
        transition: "all 0.3s ease",
      });
    }
  };

  if (yesPressed) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-pink-50 selection:bg-pink-200">
        <img
          src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
          alt="Happy bears"
          className="w-64 h-64 object-cover"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mt-6 text-center animate-bounce">
          Knew you would say yes! 🎉
        </h1>
        <p className="text-lg text-pink-500 mt-4 font-medium">
          You just made me the happiest person! ❤️
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-50 selection:bg-pink-200 overflow-hidden relative">
      <img
        src={currentGif}
        alt="Cute reaction"
        className="w-64 h-64 object-contain z-10"
      />
      <h1 className="text-3xl md:text-5xl font-bold text-pink-600 my-8 text-center px-4 z-10">
        Will you be my Valentine? 💖
      </h1>

      <div className="flex items-center justify-center gap-4 px-4 z-10">
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-all"
          style={{ fontSize: yesButtonSize }}
          onClick={() => setYesPressed(true)}
        >
          Yes
        </button>

        <button
          onClick={handleNoClick}
          style={noStyle}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg whitespace-nowrap z-50"
        >
          {noText}
        </button>
      </div>
    </div>
  );
}