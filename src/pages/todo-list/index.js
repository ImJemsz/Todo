import React from "react";
import TextInput from "../components/TextInput";
import TodoItem from "../components/TodoItem";
import { getTodo, postTodo, putTodo, deleteTodo } from "@/hooks/todo.hook";

export default function todoPage() {
  //--------------
  //  CONST
  //--------------

  const { isLoading, error, data, refetch } = getTodo();

  const postService = postTodo();

  const putService = putTodo();

  const deleteService = deleteTodo();

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  //--------------
  //  HANDLE
  //--------------

  const onAdd = async (newItem) => {
    await postService.mutateAsync(newItem);
    refetch();
  };

  const onChecked = async (updateItem) => {
    await putService.mutateAsync(updateItem);
    refetch();
  };

  const onDeleteItem = async (id) => {
    await deleteService.mutateAsync(id);
    refetch();
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

          <TextInput onChange={onAdd} />
          <div className="flex flex-col gap-y-5">
            {data.map((item) => (
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
