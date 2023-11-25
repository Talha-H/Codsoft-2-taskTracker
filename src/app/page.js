import Image from "next/image";
import TaskAdd from "./components/TaskAdd";
import TodoList from "./components/TodoList";
import { getalltodos } from "../api/route";

export default async function Home() {
  const tasks = await getalltodos();
  console.log(tasks);
  return (
    <main className="max-w-4xl mx-auto mt-8">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Task tracker App</h1>
        <TaskAdd />
        <TodoList tasks={tasks}/>
      </div>
    </main>
  );
}
