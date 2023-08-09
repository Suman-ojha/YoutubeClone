import React from "react";

const LeftNavMenuItem = ({ text, icon, action, className }) => {
  return (
    <div
      className={
        "text-white text-sm cursor-pointer flex items-center h-9 px-2  rounded-lg hover:bg-white/[0.17]  " +
        className
      }
      onClick={action}
    >
      <span className="text-xl mr-5">{icon}</span>
      {text}
    </div>
  );
};

export default LeftNavMenuItem;
