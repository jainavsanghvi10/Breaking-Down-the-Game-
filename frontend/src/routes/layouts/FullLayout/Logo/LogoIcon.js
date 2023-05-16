import React from "react";
import logoicn from "../../../assets/images/l3.svg";
const LogoIcon = (props) => {
  return <img alt="Logo" src={logoicn} {...props} width="700" height="70"/>;
};

export default LogoIcon;

// import {
//   Typography,
// } from '@material-ui/core';
// <Typography variant="h1" fontWeight="bold">Breaking Down the Game</Typography>;