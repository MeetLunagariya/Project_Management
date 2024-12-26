import React, { useRef, useState } from "react";
import Modal from "./Modal";

function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");
  const modal = useRef();

  function handleClick() {
    if (enteredTask.trim().length === 0)
     return modal.current.open();
    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">
          Enter task first
        </h2>
      </Modal>
      <div className="flex items-center gap-4 ">
        <input
          type="text"
          value={enteredTask}
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          onChange={(e) => setEnteredTask(e.target.value)}
        />
        <button
          className="text-stone-700 hover:text-stone-950"
          onClick={handleClick}
        >
          Add Task
        </button>
      </div>
    </>
  );
}

export default NewTask;
