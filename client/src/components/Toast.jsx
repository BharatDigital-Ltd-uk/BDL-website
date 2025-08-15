import React from "react";
import "./Toast.css";

const icons = {
  success: "✅",
  error: "❌",
  info: "ℹ️",
  warning: "⚠️"
};

const Toast = ({ type = "info", message, onClose, context = "contact" }) => {
  return (
    <div className={`custom-toast ${type} ${context}-toast`}>
      <div className="icon">{icons[type]}</div>
      <p className="msg">{message}</p>
      <button className="close" onClick={onClose}>×</button>
    </div>
  );
};

export default Toast;
