import React from "react";
import TodoInput from "../../components/todos/TodoInput";
import TodoCard from "../../components/todos/TodoCard";

const page = () => {
  const todos = [
    { id: 1, title: "Todo 1", description: "Description 1", status: "done" },
    {
      id: 2,
      title: "Todo 2",
      description: "Description 2",
      status: "in-progress",
    },
    {
      id: 3,
      title: "Todo 3",
      description: "Description 3",
      status: "todo",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-[30%] h-[60%] bg-red-100 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center h-full w-full overflow-auto gap-2">
          {todos.map((todo) => (
            <TodoCard key={todo.id} data={todo} />
          ))}
        </div>
      </div>
      <div className="w-[30%] h-[10%] bg-green-100 flex items-center justify-center">
        <TodoInput />
      </div>
    </div>
  );
};

export default page;
