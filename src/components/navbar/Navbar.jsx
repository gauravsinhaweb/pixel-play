import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { AiFillHome, AiFillLike } from "react-icons/ai";
import { MdExplore, MdPlaylistPlay } from "react-icons/md";
import { BiTimeFive, BiHistory } from "react-icons/bi";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav>
        <div className="w-screen flex flex-row items-center p-1 justify-between bg-gray-800 shadow-xs">
          <div className="ml-8 text-lg text-white hidden md:flex">
            <Link to="/">
              {" "}
              <div className="font-bold uppercase cursor-pointer opacity-90 hover:opacity-100">
                pixel.
                <span className=" text-rose-400 font-bold">play</span>
              </div>
            </Link>
          </div>
          <span className="w-screen md:w-1/3 h-10 bg-gray-200 cursor-pointer border border-gray-300 text-sm rounded-full flex">
            <input
              type="search"
              name="search"
              placeholder="Search"
              autoComplete="off"
              className="flex-grow px-4 rounded-l-full text-gray-800 rounded-r-full text-lg focus:outline-none"
            />
            <BsSearch className=" m-3 mr-5 text-lg text-gray-700 w-4 h-4" />
          </span>
          <div className="flex text-2xl flex-row-reverse mr-4 ml-4 md:hidden">
            <GiHamburgerMenu />
          </div>
          <div className="flex flex-row mr-8 hidden md:flex">
            <div
              title="Home"
              className="text-gray-300 hover:text-white text-2xl text-center px-2 py-2 m-2  cursor-pointer"
            >
              <Link to="/">
                <AiFillHome />
              </Link>
            </div>
            <div
              title="Explore"
              className="text-gray-300 hover:text-white text-2xl text-center px-2 py-2 m-2  cursor-pointer"
            >
              <Link to="/explore">
                <MdExplore />
              </Link>
            </div>
            <div
              title="Like"
              className="text-gray-300 hover:text-white text-2xl text-center px-2 py-2 m-2  cursor-pointer"
            >
              <Link to="/liked">
                <AiFillLike />
              </Link>
            </div>
            <div
              title="Playlist"
              className="text-gray-300 hover:text-white text-2xl text-center px-2 py-2 m-2  cursor-pointer"
            >
              <Link to="/playlist">
                <MdPlaylistPlay />
              </Link>
            </div>
            <div
              title="Watch later"
              className="text-gray-300 hover:text-white text-2xl text-center px-2 py-2 m-2  cursor-pointer"
            >
              <Link to="/watchlater">
                <BiTimeFive />
              </Link>
            </div>
            <div
              title="History"
              className="text-gray-300 hover:text-white text-2xl text-center px-2 py-2 m-2  cursor-pointer"
            >
              <Link to="/history">
                <BiHistory />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
