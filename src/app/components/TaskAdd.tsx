"use client";
import React, { FormEventHandler, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import Modal from "./Modal";
import { addtodo } from "../../api/route";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';

const TaskAdd = () => {
  const router = useRouter();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState<string>("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    console.log(newTaskValue)
    await addtodo({
      id: uuidv4(),
      text: newTaskValue,
    });
    setNewTaskValue("");
    setOpenModal(false);
    router.refresh();
  };

  return (
    <div>
      <button
        onClick={() => setOpenModal(true)}
        className="btn btn-primary w-full"
      >
        Add Task <IoMdAdd size={18} className="ml-2" />
      </button>
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <form onSubmit={handleSubmit}>
          <h3 className="font-bold text-lg">Add new task</h3>
          <div className="modal-action">
            <input
              value={newTaskValue}
              onChange={(e) => setNewTaskValue(e.target.value)}
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
    </div>
  );
};

export default TaskAdd;
