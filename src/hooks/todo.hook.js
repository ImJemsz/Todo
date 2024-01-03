import { useQuery, useMutation } from "@tanstack/react-query";

const API_URL = `http://10.10.7.154:3001`

export const getTodo = () =>
  useQuery({
    queryKey: ["getTodo"],
    queryFn: () =>
      fetch(`${API_URL}/jame/todos`).then((res) => res.json()),
  });

export const postTodo = () =>
  useMutation({
    mutationFn: (newTodo) => {
      const formData = new FormData();
      formData.append("data", JSON.stringify(newTodo))
      return fetch(`${API_URL}/jame/todos`, {
        method: "POST",
        body: formData,
      })
    },
  });

  export const putTodo = () =>
  useMutation({
    mutationFn: (updateTodo) => {
    // console.log(updateTodo)
      const formData = new FormData();
      formData.append("data", JSON.stringify(updateTodo))
      return fetch(`${API_URL}/jame/todos/${updateTodo.id}`, {
        method: "PUT",
        body: formData,
      })
    },
  });

  export const deleteTodo = () =>
  useMutation({
    mutationFn: (id) => {
      return fetch(`${API_URL}/jame/todos/${id}`, {
        method: "DELETE",
      })
    },
  });

