import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";

export const TodoList = ({ taskList, setTaskList }) => {
  const handleDelete = (id) => {
    /*タスクの削除*/
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const handleCompleted = (id) => {
    /*取り消し線*/
    setTaskList(
      taskList.map((task) => {
        if (id === task.id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      })
    );
  };

  return (
    <div className="todoList">
      <div className="todos">
        {taskList.map((task, index) => (
          <div
            className={`todo ${task.completed ? "completed" : "none"}`}
            key={index}
          >
            <div className="todoText">
              <span>{task.text}</span>
            </div>
            <div className="icons">
              <button className="check" onClick={() => handleCompleted(task.id)}>
                <CheckIcon  />
              </button>
              <button className="delete" onClick={() => handleDelete(task.id)}>
                <DeleteIcon  />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
