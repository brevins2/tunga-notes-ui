import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex columns-2">
        <nav
          className="col-lg-3 h-screen px-3 py-8 flex flex-col text-white pt-40 gap-2 side-nav-header"
          style={{ backgroundColor: "#e7effd" }}
        >
          <Link
            to="/"
            className="rounded-3xl p-4 Link"
            sytyle={{ fonstSize: "26px" }}
          >
            <i className="fi fi-rr-house-window"></i> Dashboard
          </Link>
          <Link to="/notes" className="text-black rounded-3xl p-4 Link">
            <i className="fi fi-rr-clipboard"></i> Notes
          </Link>
          <Link to="/add-notes" className="text-black rounded-3xl p-4 Link">
            <i className="fi fi-rr-note-medical"></i> Add notes
          </Link>
          <button
            type="submit"
            className="text-black rounded-3xl p-4 text-left Link"
          >
            <i className="fi fi-rr-power"></i> Logout
          </button>
        </nav>

        <header className="col-lg-10 h-25 shadow-md border-solid rounded-lg z-10 header-main py-4 px-4 mt-2 mr-2 d-flex justify-content-between align-middle">
          <h2
            className="col-lg-5 d-flex align-items-center"
            style={{ fontSize: "16px" }}
          >
            Tunganotes
            <span className="ml-5 cursor-pointer">
              <i
                className="fi fi-br-bars-staggered"
                style={{ fontSize: "18px" }}
              ></i>
            </span>
          </h2>
          <div className="d-flex col-lg-2 gap-3">
            <Link
              to="/login"
              className="Link btn btn-outline-success p-3"
              style={{ fontSize: "14px" }}
            >
              Login
            </Link>
            <Link to="register" className="Link btn btn-outline-primary p-3">
              Signup
            </Link>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
