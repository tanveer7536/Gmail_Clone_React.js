import React from "react";
import "./PopUpModal.css";
import { Button } from "@mui/material";

const PopUpModal = () => {
  return (
    <div className="popUpModal">
      <div className="title">New Message</div>
      <form>
        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="Subject" />
        <input type="text" placeholder="Message" className="message" />
        <Button type="submit" className="btn" variant="contained">
          Send
        </Button>
      </form>
    </div>
  );
};

export default PopUpModal;
