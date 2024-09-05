// src/pages/TodosPage.tsx
import { useQuery } from "@tanstack/react-query";
import { fetchTodos, Todo } from "../api/todosApi";

export const TodosPage = () => {
  const { data, isLoading } = useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });
  if (isLoading) return <div>Loading...</div>;

  return (
    <ul>
      {data?.map((todo: Todo) => <li key={todo.id}>{todo.title}</li>) ?? (
        <li>No todos available</li>
      )}
    </ul>
  );
};
