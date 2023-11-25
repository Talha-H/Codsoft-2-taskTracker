"use client"

import React from "react";
import { ITask } from "../../types/tasks";
import {FiEdit,FiTrash2} from 'react-icons/fi'

interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  return (
    <>
      <tr key={task.id}>
        <td className="w-full">{task.text}</td>
        <td className="flex gap-5">
        <FiEdit className="text-blue-500" size={25}/>
        <FiTrash2 className="text-red-500" size={25}/>
        </td>
      </tr>
    </>
  );
};

export default Task;
