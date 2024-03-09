import React, { useState } from "react";
import "./App.css";

const ToDoPractice = () => {
  const newDate = new Date().toLocaleDateString("en-GB");
  const newTime = new Date().toLocaleTimeString('en-US', { hour12: false });

  const tempList = [];

  const [editingItem, setEditingItem] = useState({
    id: "",
    isEditing: false,
  });

  const [list, setList] = useState(tempList);

  const [message, setMessage] = useState({
    text: "",
    id: "",
  });

  const changeMessage = (e) => {
    setMessage({
      ...message,
      text: e.target.value,
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    let newToDo = {
      text: message.text,
      id: new Date().getTime().toString(),
    };
    if (newToDo.text.trim().length === 0) {
      return;
    }
    setList([newToDo, ...list]);
    setMessage({
      text: "",
      id: "",
    });
  };

  const deleteTask = (id) => {
    let newTodos = list.filter((item) => {
      return item.id !== id;
    });
    setList(newTodos);
  };

  const editTask = (id) => {
    setEditingItem({
      ...editTask,
      id: id,
      isEditing: true,
    });
    const editableItem = list.find((item) => {
      if (item.id === id) {
        return true;
      }
      return false;
    });
    setMessage({
      ...message,
      text: editableItem.text,
      id: editableItem.id,
    });
  };

  const handelEdit = (e) => {
    e.preventDefault();
    let newTodosEdit = list.map((item) => {
      if (item.id === editingItem.id) {
        return {
          text: message.text,
          id: editingItem.id,
        };
      }
      return item;
    });
    setList(newTodosEdit);
    setMessage({
      text: "",
      id: "",
    });
    setEditingItem({
      id: "",
      isEditing: false,
    });
  };

  return (
    <div className="fixed-container">
      <form className="form">
        <h1>
          Today Tasks
          <span>Time: {newTime}, Date: {newDate}</span>
        </h1>
        <div className="upper">
          <input
            type="text"
            name="message"
            id="message"
            placeholder="Enter here your task"
            value={message.text}
            onChange={changeMessage}
            className="form-input"
          />
          {editingItem.isEditing ? (
            <button className="edit-button" onClick={handelEdit}>
              Edit
            </button>
          ) : (
            <button
              onClick={handelSubmit}
              type="submit"
              className="form-button"
            >
              Add
            </button>
          )}
          <p className="task-counter">Total Tasks : {list.length}</p>
        </div>
        <hr className="form-hr" />
      </form>
      {list.length === 0 ? (
        <h3> --- No tasks added! Make a list of tasks --- </h3>
      ) : (
        <ul className="task-list">
          {list.map((item) => {
            const { id, text } = item;
            return (
              <li key={id}>
                <div className="task">
                  <span className="task-text">{text}</span>
                  <button onClick={(e) => editTask(id)} className="edit-button">
                    Edit
                  </button>
                  <button
                    onClick={(e) => deleteTask(id)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ToDoPractice;
