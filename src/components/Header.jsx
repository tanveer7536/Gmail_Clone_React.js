import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Header.css";

import IconButton from "@mui/material/IconButton";
const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <div className="gmail-container">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbR_HvRo-64sY0TcJoE8XJgxKFpidzyPmSSg&usqp=CAU"
            alt=""
            className="gmail"
          />
          <span>Gmail</span>
        </div>
      </div>
      <div className="header_middle">
        <form onSubmit={(e) => e.preventDefault()}>
          <SearchIcon />
          <input type="text" placeholder="Search mail" />
          <ArrowDropDownIcon />
        </form>
      </div>
      <div className="header_right">
        <AppsIcon />
        <NotificationsIcon />
        <AccountCircleIcon className="user" />
      </div>
    </div>
  );
};

export default Header;
