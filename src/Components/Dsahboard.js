import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Notes from "./Notes/Notes";
import { Addnotes } from "./Notes/Addnotes";

const Dsahboard = () => {
  return (
    <div className="bg-white flex item-start col-lg-12">
      <div className="flex flex-col bg-white col-lg-12">
        <aside
          className="group/sidebar flex flex-col shrink-0 lg:w-[250px] w-[200px] transition-all duration-300 ease-in-out m-0 fixed z-40 inset-y-0 left-0 bg-slate-700 border-r border-r-dashed border-r-neutral-200 sidenav fixed-start loopple-fixed-start"
          id="sidenav-main"
        >
          <div className="flex items-center justify-between px-8 py-0">
            <div className="flex items-center mr-5">
              <div className="mr-2 ">
                <a
                  href="/"
                  className="dark:hover:text-primary hover:text-primary transition-colors duration-200 ease-in-out text-[1.075rem] font-medium dark:text-neutral-400/90 text-secondary-inverse"
                >
                  Robert Jason
                </a>
              </div>
            </div>
            <a
              className="inline-flex relative items-center group justify-end text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-[.95rem] transition-colors duration-150 ease-in-out text-dark bg-transparent shadow-none border-0"
              href="/"
            >
              <span className="leading-none transition-colors duration-200 ease-in-out peer shrink-0 group-hover:text-primary text-secondary-dark"></span>
            </a>
          </div>

          <div className="hidden border-b border-dashed lg:block dark:border-neutral-700/70 border-neutral-200"></div>

          <div className="relative pl-3 my-5 overflow-y-scroll">
            <div className="flex flex-col w-full font-medium">
              {/* <!-- menu item --> */}
              <div>
                <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                  <Link
                    to="/notes"
                    className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
                  >
                    Notes
                  </Link>
                </span>
              </div>

              {/* <!-- menu item --> */}
              <div>
                <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                  <Link
                    to="/add-notes"
                    className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
                  >
                    Add Notes
                  </Link>
                </span>
              </div>

              {/* <!-- menu item --> */}
              <div>
                <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                  <Link
                    to="/export-notes"
                    className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
                  >
                    Export notes
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <div className="flex flex-wrap w-full border">
        <div className="w-full flex item-center justify-between border">
          <div>
            <p>WELLCOME</p>
          </div>
          <div>
            <input type="search" />
            <button></button>
          </div>
          <div>
            <button>Log out</button>
          </div>
        </div>
        <div className="container">
          <Routes>
            <Route path="/notes" element={<Notes />} />
            <Route path="/add-notes" element={<Addnotes />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dsahboard;
