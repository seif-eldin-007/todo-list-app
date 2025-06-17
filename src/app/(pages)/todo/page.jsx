"use client";
import React from "react";
import TodoInput from "../../components/todos/TodoInput";
import TodoCard from "../../components/todos/TodoCard";
import useTodos from "../../_lib/hooks/useTodos";

const page = () => {
  const { todos, loading, error } = useTodos();

  return (
    <div className="flex flex-col items-center gap-4 justify-center h-screen">
      <div className="w-[30%]  h-[60%] rounded-2xl border-2 bg-purple-100 border-[#d9d9d9] flex items-center justify-center ">
        <div
          className="flex flex-col items-center justify-start p-4 h-full w-full 
        overflow-auto no-scrollbar 
        gap-2"
        >
          {todos.map((todo) => (
            <TodoCard key={todo._id} data={todo} />
          ))}
        </div>
      </div>
      <div className="w-[30%] h-[10%] bg-purple-100 rounded-2xl border flex items-center justify-center">
        <TodoInput />
      </div>
    </div>
  );
};

export default page;
