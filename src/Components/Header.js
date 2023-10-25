// import logo from "../assets/beicholo.png";
import { Link } from "react-router-dom";
import React from "react";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuButton as BaseMenuButton } from "@mui/base/MenuButton";
import { MenuItem as BaseMenuItem, menuItemClasses } from "@mui/base/MenuItem";
import { styled } from "@mui/system";
import { useState, useEffect } from "react";

const blue = {
  100: "#DAECFF",
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const Listbox = styled("ul")(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 200px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  box-shadow: 0px 4px 30px ${
    theme.palette.mode === "dark" ? grey[900] : grey[200]
  };
  z-index: 1;
  `
);

const MenuItem = styled(BaseMenuItem)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;
  user-select: none;

  &:last-of-type {
    border-bottom: none;
  }

  &.${menuItemClasses.focusVisible} {
    outline: 3px solid ${theme.palette.mode === "dark" ? blue[600] : blue[200]};
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }

  &.${menuItemClasses.disabled} {
    color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
  }

  &:hover:not(.${menuItemClasses.disabled}) {
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }
  `
);

const MenuButton = styled(BaseMenuButton)(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  border-radius: 12px;
  padding: 8px 14px;
  line-height: 1.5;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
  }

  &:focus-visible {
    border-color: ${blue[400]};
    outline: 3px solid ${theme.palette.mode === "dark" ? blue[500] : blue[200]};
  }
  `
);

function MenuIntroduction(loggedInUser, isLoggedIn, userloggedin) {
  const createHandleMenuClick = (menuItem) => {
    return () => {
      console.log(`Clicked on ${menuItem}`);
    };
  };

  return (
    <Dropdown>
      <Link to={loggedInUser != null ? "" : "/login"}>
        <span className="sr-only">Account</span>
        <i className="fi fi-rr-user text-lg"></i>&nbsp;&nbsp;
        {isLoggedIn ? <p className="ml-8">{loggedInUser}</p> : <></>}
        {isLoggedIn ? userloggedin : <div></div>}
      </Link>
      {/* <MenuButton>My account</MenuButton> */}
      <Menu slots={{ listbox: Listbox }}>
        <MenuItem onClick={createHandleMenuClick("Profile")}>Profile</MenuItem>
        <MenuItem onClick={createHandleMenuClick("Log out")}>Log out</MenuItem>
      </Menu>
    </Dropdown>
  );
}

function Header({ userloggedin }) {
  var loggedInUser = sessionStorage.getItem("loggedInUserName");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const createHandleMenuClick = (menuItem) => {
    return () => {
      console.log(`Clicked on ${menuItem}`);
    };
  };

  useEffect(() => {
    // Set the isLoggedIn state based on the userloggedin prop when the component mounts
    if (userloggedin !== "") {
      setIsLoggedIn(true);
    }
  }, [userloggedin]);

  return (
    <div className="w-full flex items-center justify-between py-3 px-5 gap-[700px] border-bottom header-top">
      <div className="w-[65px]">
        {/* <Link to="/">
          <img src={logo} alt="logo" />
        </Link> */}
        <span>Tunganotes</span>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center justify-between h-[45px] w-[290px] border-r-2 border-2 bg-[#f7f7f7] rounded-lg">
          <input
            type="search"
            name="search"
            placeholder="Search"
            className="rounded-lg w-full h-[45px] px-3 bg-transparent focus:ring-0 focus:border-none  focus:outline-none text-base"
          />
          <button className="px-3 text-lg">
            <i className="fi fi-rr-search"></i>
          </button>
        </div>
        <div className="">
          <Link to="/wishlist">
            <span className="sr-only">save</span>
            <i className="fi fi-rr-bookmark text-lg pr-6"></i>
          </Link>
          <Dropdown>
            <MenuButton>
              <Link to={loggedInUser != null ? "" : "/login"}>
                <span className="sr-only">Account</span>
                <i className="fi fi-rr-user text-lg"></i>&nbsp;&nbsp;
                {isLoggedIn ? <p className="ml-2">{loggedInUser}</p> : <></>}
                {isLoggedIn ? userloggedin : <div></div>}
              </Link>
            </MenuButton>
            <Menu slots={{ listbox: Listbox }}>
              <MenuItem onClick={createHandleMenuClick("Profile")}>
                Profile
              </MenuItem>
              <MenuItem onClick={createHandleMenuClick("Log out")}>
                Log out
              </MenuItem>
            </Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default Header;
