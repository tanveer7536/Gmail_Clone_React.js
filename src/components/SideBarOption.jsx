import "./SideBarOption.css";
import React from "react";

const SideBarOption = ({ title, icon, number }) => {
  return (
    <div className="sidebar_option">
      <div className="left">
        {icon}
        <span className="title">{title}</span>
      </div>
      <span className="number">{number}</span>
    </div>
  );
};

export default SideBarOption;
