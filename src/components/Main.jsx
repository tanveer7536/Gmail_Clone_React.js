import React from "react";
import "./Main.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RedoIcon from "@mui/icons-material/Redo";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import SettingsIcon from "@mui/icons-material/Settings";
import InboxIcon from "@mui/icons-material/Inbox";
import GroupIcon from "@mui/icons-material/Group";
import LoyaltyIcon from "@mui/icons-material/Loyalty";

import MainItem from "./MainItem";

const Main = () => {
  const data = [
    {
      email: "Mark@gmail.com",
      subject: "Sonny--- what is going buddy",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, eaque. Laborum facere, vero molestiae distinctio architecto dolorum dolore! Saepe, voluptate!",
      date: "Thu, 24 dec 2020 17:53 GMT",
    },
    {
      email: "Mark@gmail.com",
      subject: "Sonny--- what is going buddy",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, eaque. Laborum facere, vero molestiae distinctio architecto dolorum dolore! Saepe, voluptate!",
      date: "Thu, 24 dec 2020 17:53 GMT",
    },
  ];

  return (
    <div className="main">
      <div className="main_top">
        <div className="left-section">
          <CheckBoxOutlineBlankIcon />
          <ArrowDropDownIcon />
          <RedoIcon />
          <MoreVertIcon />
        </div>
        <div className="right-section">
          <KeyboardArrowLeftIcon />
          <KeyboardArrowRightIcon />
          <DisplaySettingsIcon />
          <SettingsIcon />
        </div>
      </div>
      <div className="main_middle">
        <div className="middle-item primary active">
          <InboxIcon />
          <span>Primary</span>
        </div>
        <div className="middle-item social">
          <GroupIcon />
          <span>Social</span>
        </div>
        <div className="middle-item promotions">
          <LoyaltyIcon />
          <span>Promotions</span>
        </div>
      </div>

      <div className="main_bottom">
        {data.map((item, index) => {
          return <MainItem key={index} data={item} />;
        })}
      </div>
    </div>
  );
};

export default Main;
