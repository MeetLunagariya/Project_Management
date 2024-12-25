import React, { useRef } from "react";
import Input from "./Input";
import Button from "./Button";

function NewProject({onSave}) {

  const title = useRef()
  const description = useRef()
  const dueDate = useRef()

  function handleSave(){
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    onSave({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    })
  }

  return (
    <div className="w-[35rem] mt-16 ">
      <menu className="flex items-center justify-end gap-4 my-4 ">
        <li>
          <button className="text-stone-800 hover:text-stone-950">Cancel</button>
        </li>
        <li>
          <Button onClick={handleSave}>Save</Button>
        </li>
      </menu>
      <div>
        <Input ref={title} label="Title" type="text"/>
        <Input ref={description} label="Description" textarea/>
        <Input ref={dueDate} label="Due Date" type="Date"/>
      </div>
    </div>
  );
}

export default NewProject;
