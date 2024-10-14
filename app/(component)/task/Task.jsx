import React from "react";

export default function Task({ item, complete, remove }) {
  return (
    <div className="w-[565px] mt-2 flex justify-between bg-[#a0ff74] h-[40px] py-2 pl-2 items-center rounded-md">
      <div className={item.status ? "line-through" : ""}>{item.title}</div>
      <div>
        <button className="text-[20px] pr-2" onClick={() => complete(item.id)}> ✔ {item.status} </button>
        <button className="text-[20px] pr-2" onClick={() => remove(item.id)}>✘</button>
      </div>
    </div>
  );
};

