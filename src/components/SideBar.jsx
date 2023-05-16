import React, { useEffect, useState } from "react";
import "./SideBar.css";
import AddIcon from "@mui/icons-material/Add";
import MailIcon from "@mui/icons-material/Mail";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import NearMeIcon from "@mui/icons-material/NearMe";
import FolderIcon from "@mui/icons-material/Folder";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button } from "@mui/material";
import SideBarOption from "./SideBarOption";
import PersonIcon from "@mui/icons-material/Person";
import DuoIcon from "@mui/icons-material/Duo";
import PhoneIcon from "@mui/icons-material/Phone";
import PopUpModal from "./PopUpModal";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleIsOpen = (e) => {
      console.log(e.target.parentNode.parentNode.parentNode);
      if (
        e.target.classList.contains("main") ||
        e.target.classList.contains("app_body")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleIsOpen);

    return () => {
      document.body.removeEventListener("click", handleIsOpen);
    };
  }, []);

  return (
    <div className="sidebar">
      {isOpen && <PopUpModal />}
      <div className="sidebar_compose">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="compose_btn"
          variant="contained"
          startIcon={<AddIcon />}
        >
          Compose
        </Button>
      </div>
      <div className="sidebar_options">
        <SideBarOption icon={<MailIcon />} title="Inbox" number="54" />
        <SideBarOption icon={<StarIcon />} title="Starred" number="54" />
        <SideBarOption icon={<AccessTimeIcon />} title="Snoozed" number="54" />
        <SideBarOption
          icon={<LabelImportantIcon />}
          title="Important"
          number="54"
        />
        <SideBarOption icon={<NearMeIcon />} title="Sent" number="54" />
        <SideBarOption icon={<FolderIcon />} title="Drafts" number="54" />
        <SideBarOption
          icon={<KeyboardArrowDownIcon />}
          title="More"
          number="54"
        />
      </div>
      <div className="sidebar_extra">
        <PersonIcon />
        <DuoIcon />
        <PhoneIcon />
      </div>
    </div>
  );
};

export default SideBar;
