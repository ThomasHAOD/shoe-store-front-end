import React from "react";
import AssistantIcon from "@material-ui/icons/Assistant";
import classes from "./ChatBotButton.module.css";

const chatBotButton = () => (
  <AssistantIcon color="black" className={classes.ChatBotButton} />
);

export default chatBotButton;
