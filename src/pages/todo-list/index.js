import React, { useState } from "react";
import TextInput from "../components/TextInput";
import TodoItem from "../components/TodoItem";

export default function todoPage() {
  //--------------
  //  CONST
  //--------------
  const [items, setItems] = useState([]);

  //--------------
  //  HANDLE
  //--------------
  const onChecked = (item) => {
    let result = items.map((oldItem) => {
      if (oldItem.id === item.id) {
        oldItem.isChecked = item.isChecked;
      }
      return oldItem;
    });
    setItems(result);
  };

  const onDeleteItem = (id) => {
    const result = items.filter((refItem) => refItem.id !== id);
    setItems(result);
  };

  //--------------
  //  RENDER
  //--------------
  return (
    <div className="w-full h-screen bg-blue-950 flex items-center justify-center">
      <div className="border rounded-2xl max-w-md w-full mx-auto bg-white">
        <div className="flex flex-col gap-y-10 p-10">
          <div className="text-2xl text-blue-950 font-bold flex flex-row gap-2">
            To-Do List <img src="/icon.png" className="w-10 mt-[-10px]" />
          </div>

          <TextInput onChange={(task) => setItems([...items, task])} />
          <div className="flex flex-col gap-y-5">
            {items.map((item) => (
              <TodoItem
                task={item}
                onChange={onChecked}
                onDelete={onDeleteItem}
                key={item.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
