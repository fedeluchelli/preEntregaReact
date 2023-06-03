import React from "react";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import "./CardWidget.css";

function CardWidget() {
  return (
    <div className="CardWidget">
      <a href="https://www.jordan.com/collection/">
        <SportsBasketballIcon sx={{ color: "orange" }} />
        <p>23</p>
      </a>
    </div>
  );
}

export default CardWidget;
