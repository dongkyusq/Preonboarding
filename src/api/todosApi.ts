// src/api/todosApi.ts
import axios from "axios";

export interface Todo {
  id: number;
  title: string;
}

export const fetchTodos = async (): Promise<Todo[]> => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return response.data;
};
