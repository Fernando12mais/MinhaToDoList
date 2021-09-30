import React from "react";

import "./Task.css";
import Button from "./Button";

const Task = ({ task, styleTask, deleteTask }) => {
  return (
    <>
      <div className="block-tasks">
        {task.map((tasks) => (
          <div key={Math.random()}>
            <div className="tasks" key={tasks.id}>
              TAREFA:{" " + tasks.numero}
              <div
                className={tasks.completed ? "task-content2" : "task-content"}
              >
                {tasks.nome.toUpperCase()}
                <div className="task-button">
                  <Button
                    onClick={() => {
                      styleTask(tasks);
                    }}
                  >
                    DONE
                  </Button>
                </div>
                <Button
                  onClick={() => {
                    deleteTask(tasks);
                  }}
                >
                  Delete
                </Button>
              </div>
            </div>
            <br />
          </div>
        ))}
      </div>
    </>
  );
};

export default Task;
