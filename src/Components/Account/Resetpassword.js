import React from "react";

const Login = () => {
  return (
    <div class="antialiased bg-gradient-to-br from-green-100 to-white">
      <div class="container px-6 mx-auto">
        <div class="flex flex-col text-center md:text-left md:flex-row h-screen justify-evenly md:items-center">
          <div class="flex flex-col w-full">
            <div>
              <i
                class="fi fi-rr-edit w-20 h-20 mx-auto md:float-left fill-stroke text-gray-800"
                style={{ fontSize: "64px" }}
              ></i>
            </div>
            <h1 class="text-5xl text-gray-800 font-bold">Tunganotes</h1>
            <p
              class="w-7/12 mx-auto md:mx-0 text-gray-500 mt-2"
              style={{ fontSize: "14px" }}
            >
              Login to Tunganotes for better notes tracking and storage. <br />
              Your notes journey starts here
            </p>
          </div>
          <div class="w-5/12 mx-auto md:mx-0">
            <div class="bg-white p-10 flex flex-col w-full shadow-xl rounded-xl">
              <h2 class="text-2xl font-bold text-gray-800 text-left mb-5">
                Sigin
              </h2>
              <form action="" class="w-full">
                <div id="input" class="flex flex-col w-full my-3">
                  <label for="email" class="text-gray-500 mb-2 text-left">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Please insert your email"
                    class="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                  />
                </div>
                <div id="input" class="flex flex-col w-full my-3">
                  <label for="password" class="text-gray-500 mb-2 text-left">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Please insert your password"
                    class="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                  />
                </div>
                <div id="button" class="flex flex-col w-full my-5">
                  <button
                    type="button"
                    class="w-full py-4 bg-green-600 rounded-lg text-green-100"
                  >
                    <div class="flex flex-row items-center justify-center">
                      <div class="mr-2">
                        <svg
                          class="w-6 h-6"
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
                      <div class="font-bold">Sigin</div>
                    </div>
                  </button>
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
