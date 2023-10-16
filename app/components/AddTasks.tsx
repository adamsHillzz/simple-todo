"use client";

import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import Modal from "./Modal";
const AddTasks = () => {
  const [modalOpen, setModelOpen] = useState<boolean>(false);

  return (
    <>
      <button
        onClick={() => setModelOpen(!modalOpen)}
        className="btn btn-primary text-white"
      >
        Add New Task <AiOutlinePlus size={15} />
      </button>

      <Modal modalOpen={modalOpen} setModelOpen={setModelOpen}>
        <form action="#">
          <h3 className="font-bold text-lg">Add new task</h3>
          <div className="modal-action">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <button className="btn">Submit</button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default AddTasks;
