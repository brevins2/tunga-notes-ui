import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const url = "http://127.0.0.1:8000/users/login/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  let user = {
    email: email,
    password: password,
  };

  // const [loading, setLoading] = useState(false);
  // setLoading(false);

  const loginUser = (e) => {
    e.preventDefualt();
    // setLoading(true);
    axios
      .post(url, user)
      .then((res) => {
        console.log("login successful");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <div className="antialiased bg-gradient-to-br from-green-100 to-white">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col text-center md:text-left md:flex-row h-screen justify-evenly md:items-center">
          <div className="flex flex-col w-full">
            <div>
              <i
                className="fi fi-rr-edit w-20 h-20 mx-auto md:float-left fill-stroke text-gray-800"
                style={{ fontSize: "64px" }}
              ></i>
            </div>
            <h1 className="text-5xl text-gray-800 font-bold">Tunganotes</h1>
            <p
              className="w-7/12 mx-auto md:mx-0 text-gray-500 mt-2"
              style={{ fontSize: "14px" }}
            >
              Login to Tunganotes for better notes tracking and storage. <br />
              Your notes journey starts here
            </p>
          </div>
          <div className="w-5/12 mx-auto md:mx-0">
            <div className="bg-white p-10 flex flex-col w-full shadow-xl rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 text-left mb-5">
                Sigin
              </h2>
              <form action="" className="w-full" onSubmit={loginUser}>
                <div id="input" className="flex flex-col w-full my-3">
                  <label for="email" className="text-gray-500 mb-2 text-left">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Please insert your email"
                    className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                  />
                </div>
                <div id="input" className="flex flex-col w-full my-3">
                  <label
                    for="password"
                    className="text-gray-500 mb-2 text-left"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Please insert your password"
                    className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                  />
                  <p className="text-right mt-2" style={{ fontSize: "14px" }}>
                    <a
                      href="/reset-password"
                      className="w-full text-center font-medium text-gray-500 text-warning"
                    >
                      <b>Recover password!</b>
                    </a>
                  </p>
                </div>
                <div id="button" className="flex flex-col w-full my-5">
                  <button
                    type="button"
                    className="w-full py-4 bg-green-600 rounded-lg text-green-100"
                  >
                    <div className="flex flex-row items-center justify-center">
                      <div className="mr-2">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                          ></path>
                        </svg>
                      </div>
                      <div className="font-bold">Sigin</div>
                    </div>
                  </button>
                  <div className="flex justify-evenly mt-5">
                    <p>
                      Don't have an account? &nbsp;
                      <a
                        href="/register"
                        className="w-full text-center font-medium text-gray-500"
                      >
                        Singup!
                      </a>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
