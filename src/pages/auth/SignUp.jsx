import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const SignUp = () => {
  // axios.defaults.headers.common["authorization"] = encodedToken;

  return (
    <>
      <div className="lg:w-1/3 p-8 relative inset-0 m-auto bg-gray-900  flex-col">
        {" "}
        <h1 className="text-center text-2xl my-4 uppercase kodchasan font-semibold">
          sign up
        </h1>
        <div className="bg-gray-800 shadow-md rounded px-24 pt-16 pb-4 flex flex-col">
          <div className="mb-4">
            <label
              className="block text-gray-400 uppercase kodchasan text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black"
              id="name"
              type="text"
              placeholder="John Doe"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-400 uppercase kodchasan text-sm font-bold mb-2"
              htmlFor="email"
            >
              email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black"
              id="email"
              type="email"
              placeholder="johndoe@gmail.com"
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-400 uppercase kodchasan text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-black mb-3"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-400 uppercase kodchasan text-sm font-bold mb-2"
              htmlFor="password-confirm"
            >
              password confirm
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black"
              id="password-confirm"
              type="password"
              placeholder="******************"
            />
          </div>
          <div className="flex mt-6 items-center w-full justify-center">
            <button
              className="bg-rose-500 hover:bg-rose-400 w-full text-white font-bold py-2 px-4 rounded"
              type="button"
            >
              Sign In
            </button>
          </div>
          <p className="text-red text-xs capitalize my-8 text-right">
            already have an account?
            <Link to="/login">
              <span className="uppercase ml-8 text-blue-500 font-semibold">
                login
              </span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
