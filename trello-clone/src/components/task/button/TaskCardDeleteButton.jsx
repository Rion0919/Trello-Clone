import React from 'react';

const TaskCardDeleteButton = (props) => {
  const { taskCardsList, setTaskCardsList, taskCard } = props;
  const onClickTaskCardDelete = (id) => {
    console.log(id);
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id));
  };
  return (
    <div>
      <button
        className="tascCardDeleteButton"
        onClick={() => onClickTaskCardDelete(taskCard.id)}>
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
};

export default TaskCardDeleteButton;
