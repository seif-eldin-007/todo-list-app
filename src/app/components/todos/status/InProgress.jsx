import React from "react";

const InProgress = () => {
  return (
    <button
      className="flex 
    items-center 
    justify-center 
    w-full 
    bg-yellow-500 
    px-2 
    py-1 
    text-[10px] 
    rounded-4xl
    font-semibold
    text-white
    hover:bg-yellow-600
    transition-colors
    cursor-pointer
    "
    >
      In Progress
    </button>
  );
};

export default InProgress;
