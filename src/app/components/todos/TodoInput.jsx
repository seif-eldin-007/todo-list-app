import { Plus, PlusCircleIcon } from "lucide-react";
import React from "react";

const TodoInput = () => {
  return (
    <div className="flex items-center p-4 h-[20%] w-[90%] justify-between">
      <input
        type="text"
        placeholder="Add a new todo"
        className="w-[100%] h-8 p-2 rounded-tl-lg rounded-bl-lg focus:outline-none border placeholder:text-gray-400 placeholder:text-sm border-[#d9d9d9] bg-[#f9f9f9]"
      />
      <button className="cursor-pointer rounded-tr-lg w-[20%] flex items-center justify-center h-8 rounded-br-lg border-1 border-[#004aad] hover:bg-[#004aad] hover:text-white text-[#004aad] transition-colors ">
        <Plus size={18} className="text-center" />
      </button>
    </div>
  );
};

export default TodoInput;
