import { ITask } from "../types/tasks";

const baseURl = "http://localhost:3001";
console.log(baseURl);

export const getalltodos = async (): Promise<ITask[]> => {
  const res = await fetch(`${baseURl}/tasks`, { cache: "no-store" });
  const todos = await res.json();
  return todos;
};

export const addtodo = async (todo: ITask): Promise<ITask> => {
  const res = await fetch(`${baseURl}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const newTOdo = await res.json();
  return newTOdo;
};
export const editTodo = async (todo: ITask): Promise<ITask> => {
  const res = await fetch(`${baseURl}/tasks/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const updateTodo = await res.json();
  return updateTodo;
};
export const deleteTodo = async (id: string): Promise<void> => {
  await fetch(`${baseURl}/tasks/${id}`, {
    method: "Delete",
  });
};
