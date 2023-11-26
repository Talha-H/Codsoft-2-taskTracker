"use client";

import React, { FormEventHandler, useState } from "react";
import { ITask } from "../../types/tasks";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { deleteTodo, editTodo } from "../../api/route";

interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const router = useRouter();
  const [openEditModal, setOpenEditModel] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<string>(task.text);

  // Edit Handler
  const handleEditSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    editTodo({
      id: task.id,
      text: taskToEdit,
    });
    setTaskToEdit("");
    setOpenEditModel(false);
    router.refresh();
  };

  // Delete Handler
  const handleDelete = async (id: string) => {
    await deleteTodo(id);
    setDeleteModal(false);
    router.refresh();
  };
  return (
    <>
      <tr key={task.id}>
        <td className="w-full">{task.text}</td>
        <td className="flex gap-5">
          {/* EDIT Modal */}
          <FiEdit
            onClick={() => setOpenEditModel(true)}
            className="text-blue-500"
            cursor="pointer"
            size={25}
          />
          <Modal openModal={openEditModal} setOpenModal={setOpenEditModel}>
            <form onSubmit={handleEditSubmit}>
              <h3 className="font-bold text-lg">Edit Task</h3>
              <div className="modal-action">
                <input
                  value={taskToEdit}
                  onChange={(e) => setTaskToEdit(e.target.value)}
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                />
                <button type="submit" className="btn">
                  Submit
                </button>
              </div>
            </form>
          </Modal>
          {/* Delete Modal */}
          <FiTrash2
            onClick={() => setDeleteModal(true)}
            className="text-red-500"
            cursor="pointer"
            size={25}
          />
          <Modal openModal={deleteModal} setOpenModal={setDeleteModal}>
            <h3 className="font-bold text-lg">
              Are you Sure YOu Want to delete?
            </h3>
            <div className="modal-action">
              <button onClick={() => handleDelete(task.id)} className="btn">
                yes
              </button>
            </div>
          </Modal>
        </td>
      </tr>
    </>
  );
};

export default Task;
