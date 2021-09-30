import React, { useState } from "react";

import "./BlockTask.css";
import Input from "./Input";
import Button from "./Button";
import Task from "./Task";

const BlockTask = () => {
  const [task, setTask] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const takeInputValue = (valorInput) => {
    setInputValue(valorInput);
  };

  const addTask = () => {
    setTask([
      ...task,
      {
        id: Math.random(),
        nome: inputValue,
        numero: task.length,
        completed: false,
      },
    ]);
  };
  const styleTask = (tasks) => {
    tasks.completed = !tasks.completed;

    setTask([...task]);
  };

  const deleteTask = (tasks) => {
    console.log(tasks);
    const teste = task.filter((item) => item !== tasks);

    setTask(teste);
  };

  return (
    <div className="block-all">
      <div className="block-content">
        <h1>Lista De Tarefas</h1>

        <Task task={task} styleTask={styleTask} deleteTask={deleteTask} />

        <div className="block-itens">
          <Input takeInputValue={takeInputValue} />
          <Button onClick={addTask}>Adicionar Tarefas</Button>
        </div>
      </div>
    </div>
  );
};

export default BlockTask;
