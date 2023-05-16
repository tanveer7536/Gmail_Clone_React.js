import React from "react";
import "./MainItem.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";

const MainItem = ({ data }) => {
  console.log(data);
  return (
    <div className="main_bottom-item">
      <div className="left">
        <CheckBoxOutlineBlankIcon />
        <StarBorderIcon />
        <LabelImportantIcon />
        <p>{data.email}</p>
      </div>
      <div className="middle">
        <span className="subject">{data.subject}</span>
        <span className="message"> - {data.message}</span>
      </div>
      <div className="right">
        <p>{data.date}</p>
      </div>
    </div>
  );
};

export default MainItem;
