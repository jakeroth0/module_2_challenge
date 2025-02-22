import React, { useState, useContext } from 'react';
import ThemeContext from "./ThemeContext";
import styles from '../App.css'
import Burger from '../icons/burger';
import PersonIcon from '../icons/personIcon';
import ProjectIcon from '../icons/projectIcon';
import MailIcon from '../icons/mailIcon';
import LinkedinIcon from '../icons/linkedinIcon';
import InstagramIcon from '../icons/instagramIcon';
import XIcon from '../icons/xIcon';
import GithubIcon from '../icons/githubIcon';
import PdfIcon from '../icons/pdfIcon';
import Resume from '../assets/JacobRothResume2023.pdf'

function Navbar(props) {

    const [menuOpen, setMenuOpen] = useState(false);
    const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  
    const SlideInMenu = ({ open, setClose }) => {
        return (
          <div
            className={`fixed top-0 right-0 h-screen w-52 p-7 z-20 transition-transform duration-300 flex flex-col ${
              open ? 'transform-none' : 'translate-x-full'
            } ${darkMode ? 'bg-[#1F2235]' : 'bg-[#E79B56] '} md:w-[280px]`}
          >
            <button
              onClick={setClose}
              className="flex text-white justify-end items-center text-right mb-8 focus:outline-none focus:ring focus:ring-offset-2"
            >
              Close <XIcon />
            </button>
    
            {/* Add your menu items */}
            <ul className='justify-start md:text-xl'>
                    <li className='flex p-1 hover:opacity-70'><PersonIcon/><a className='ml-1 text-white' href="#aboutMe" onClick={setClose}>ABOUT ME</a></li>
                    <li className='flex p-1 hover:opacity-70'><ProjectIcon/><a className='ml-1 text-white' href="#work"  onClick={setClose}>WORK</a></li>
                    <li className='flex p-1 hover:opacity-70'><MailIcon/><a className='ml-1 text-white' href="mailto:jakeroth0@gmail.com" target="blank" rel="noopener noreferrer">EMAIL</a></li>
                    <li className='flex p-1 hover:opacity-70'><PdfIcon/><a className='ml-1 text-white' href={Resume} target="blank" rel="noopener noreferrer" download>RESUME</a></li>
                    <li className='flex p-1 hover:opacity-70'><LinkedinIcon/><a className='ml-1 text-white' href="https://www.linkedin.com/in/jakeroth0/" target="blank" rel="noopener noreferrer">LINKEDIN</a></li>
                    <li className='flex p-1 hover:opacity-70'><GithubIcon/><a className='ml-1 text-white' href="https://github.com/jakeroth0" target="blank" rel="noopener noreferrer">GITHUB</a></li>
                    <li className='flex p-1 hover:opacity-70'><InstagramIcon/><a className='ml-1 text-white' href="https://www.instagram.com/akahusky/" target="blank" rel="noopener noreferrer">INSTAGRAM</a></li>
                    <label
                        htmlFor="darkModeToggle"
                        className="mt-auto flex items-center cursor-pointer"
                        >
                            <div className='items-center flex'>
                        <div className="relative m-1 ">
                            <input
                            id="darkModeToggle"
                            type="checkbox"
                            className="sr-only"
                            checked={darkMode}
                            onChange={toggleDarkMode}
                            />
                            <div className="w-10 h-6 bg-gray-400 rounded-full shadow-inner"></div>
                            <div className="toggle__dot absolute w-5 h-5 bg-white rounded-full shadow inset-y-0 left-0"></div>
                        </div>
                        <div className="ml-1 text-white">{darkMode ? 'LIGHT MODE' : 'DARK MODE'}</div></div>
                    </label>
                </ul>
          </div>
        );
      };

      const Scrim = ({ open, setClose }) => (
        <div
          className={`${
            open ? 'block' : 'hidden'
          } fixed inset-0 bg-black opacity-50 z-10`}
          onClick={setClose}
        ></div>
      );

    return (
      <nav className={`items-center p-5 ${darkMode ? 'graph' : 'bg-white'} xl:px-[8%]`}>
        <ul className=" max-w-full max-h-full flex justify-between xl:mx-4 "> 
            <a className= {`text-xl flex items-center ${darkMode ? 'text-white' : 'text-black '} md:text-3xl `}>Jake Roth</a>
            <div className='xl:hidden'>
                <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`focus:outline-none focus:ring focus:ring-offset-2 ${darkMode ? 'text-[#5D6582]' : 'text-[#E79B56]'} `}>
                <Burger className="h-auto md:w-10"/>
            </button>
            <Scrim open={menuOpen} setClose={() => setMenuOpen(false)} />
            <SlideInMenu open={menuOpen} setClose={() => setMenuOpen(false)} />
            </div>
            <div className='hidden xl:block'>
                <ul className='flex justify-start items-center'>
                    <div className={`${darkMode ? 'text-white' : 'text-black'}`}>
                    <a className={`mx-4 ${darkMode ? 'hover:text-[#52A9FD]' : ' hover:text-[#E79B56]'}`} href="#aboutMe">ABOUT ME</a>
                    <a className={`mx-4 ${darkMode ? 'hover:text-[#52A9FD]' : ' hover:text-[#E79B56]'}`} href="#work">WORK</a>
                    <a className={`mx-4 ${darkMode ? 'hover:text-[#52A9FD]' : ' hover:text-[#E79B56]'}`} href={Resume} download>RESUME</a>
                    </div>
                    <label
                        htmlFor="darkModeToggle"
                        className="mt-auto flex items-center cursor-pointer"
                        >
                            <div className='items-center flex'>
                        <div className="relative m-1 pb-[6px]">
                            <input
                            id="darkModeToggle"
                            type="checkbox"
                            className="sr-only"
                            checked={darkMode}
                            onChange={toggleDarkMode}
                            />
                            <div className="w-10 h-6 bg-gray-400 rounded-full shadow-inner"></div>
                            <div className="toggle__dot absolute w-5 h-5 bg-white rounded-full shadow inset-y-0 left-0"></div>
                        </div>
                        </div>
                    </label>

                    <a className={`ml-2 ${darkMode ? 'bg-[#52A9FD]' : 'bg-[#E79B56]'} text-white text-lg py-2 px-6 rounded-full hover:brightness-125 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`} href='#connect'>LET'S TALK</a>
                </ul>
            </div>    
        </ul>
      </nav>
    );
  }

  export default Navbar