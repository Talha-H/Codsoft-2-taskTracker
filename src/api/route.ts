import { ITask } from "../types/tasks";

const baseURl = "http://localhost:3001";

export const getalltodos = async (): Promise<ITask[]> => {
  const res = await fetch(`${baseURl}/tasks`,{cache:'no-store'});
  const todos = await res.json();
  return todos;
};
 
export const addtodo = async (todo: ITask): Promise<ITask> => {
  const res = await fetch(`${baseURl}/tasks`, {
    method: "POST",
    headers: {
       "Content-Type": "application/json" 
      },
    body: JSON.stringify(todo),
  });
  const newTOdo = await res.json();
  return newTOdo;
};
