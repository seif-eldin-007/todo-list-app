import React from "react";

const TodoCard = ({ data }) => {
  return (
    <>
      <div className="w-[80%] h-[20%] bg-blue-100">
        <div className="flex flex-col items-center justify-center h-full w-full gap-2">
          <span>
            {data.title}
            <span>{data.status}</span>
          </span>
          <div>
            <span>{data.description}</span>
            <span>{data.date}</span>
          </div>

          <div>
            <button>Update</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoCard;
