import "./styles/Header.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";


function Header(){
  return (
    <div className="header">
      <div className="header-content">
      <FontAwesomeIcon icon={faUsers} /> Applycation
      </div>
    </div>);
}

export default Header;