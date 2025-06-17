"use client";
import { Edit, Trash } from "lucide-react";
import React, { useState } from "react";
import Done from "./status/Done";
import InProgress from "./status/InProgress";
import Todo from "./status/Todo";

const TodoCard = ({ data }) => {
  const [title, setTitle] = useState(data.title);
  const [status, setStatus] = useState(data.status);
  const [date, setDate] = useState(data.createdAt);

  let formattedDate = new Date(date).toLocaleDateString();

  return (
    <>
      <div className="flex items-center justify-center h-[20%] w-[90%] bg-linear-270 to-[#1e7cf7] from-[#f1bdf6] rounded-2xl p-4 gap-3">
        {/* Title and Date */}
        <div className="flex flex-col items-start justify-between w-full gap-3">
          <span className="text-[16px] font-semibold text-white">{title}</span>
          <div className="flex items-center justify-between w-full">
            <span>
              {status === "todo" ? (
                <Todo />
              ) : status === "in-progress" ? (
                <InProgress />
              ) : (
                <Done />
              )}
            </span>
          </div>
        </div>
        {/* Status and Actions */}
        <div className="w-full flex flex-col items-end gap-3 justify-between">
          {/* Date */}
          <span className="text-[0.7rem] text-[#2c2c2c]  font-semibold">
            {formattedDate}
          </span>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button className="cursor-pointer" onClick={() => alert("Edit")}>
              <Edit size={16} className="text-gray-500" />
            </button>
            <button className="cursor-pointer" onClick={() => alert("Delete")}>
              <Trash size={16} className="text-red-500" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoCard;
