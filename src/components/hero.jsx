import React, { useState, useEffect, useContext } from 'react';
import ThemeContext from './ThemeContext';
import { Typewriter } from 'react-simple-typewriter'
import { PromiseProvider } from 'mongoose';



function Hero() {
  const { darkMode } = useContext(ThemeContext);
  // const words = ['BEAUTIFUL', 'ENGAGING', 'CREATIVE', 'FUN'];
  // const [currentWordIndex, setCurrentWordIndex] = useState(0);
  // const [currentWord, setCurrentWord] = useState(words[currentWordIndex]);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
  //   }, 2500);

  //   setCurrentWord(words[currentWordIndex]);

  //   return () => clearTimeout(timeout);
  // }, [currentWordIndex, words]);

  return (
    <div className={`${darkMode ? 'graph' : 'bg-white'} xl:flex xl:w-screen xl:px-[8%] xl:justify-center xl:h-[600px]`}>
    <div className={`flex justify-center items-center h-44 pb-8  md:h-auto md:pb-16 xl:justify-start xl:w-[1040px]`}>
      <h1 className={`text-5xl flex flex-col h-[145px] md:h-[288px] ${darkMode ? 'text-white' : 'text-black'} md:text-8xl xl:text-8xl`}>
        LET'S MAKE
        <br />
        <div className='xl:flex'>
        SOMETHING
        <br />
        <span
          className={`h-[57px] ${
            darkMode ? 'text-[#52A9FD]' : 'text-[#E79B56]'
          } fade-in-out xl:ml-4`}
        >
          <Typewriter words={['BEAUTIFUL', 'ENGAGING', 'CREATIVE', 'FUN']} loop={0}  />
        </span>
        </div>
      </h1>
    </div>
    </div>
  );
}

export default Hero;
