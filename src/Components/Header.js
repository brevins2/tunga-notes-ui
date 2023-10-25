import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex columns-2">
        <nav className="w-2/12 bg-transparent h-screen px-3 py-8 flex flex-col text-white py-40">
          <Link className="bg-cyan-500 hover:bg-cyan-600 rounded p-4">
            Dashboard
          </Link>
          <Link>Notes</Link>
          <Link>Add notes</Link>
          <Link>Logout</Link>
        </nav>
        <header className="w-10/12 h-20 shadow-md border-solid rounded-lg z-10 header-main py-5 px-4 mt-2 mr-2 bg-gradient-to-r from-blue-500">
          top
        </header>
      </div>
    </>
  );
};

export default Header;
