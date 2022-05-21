import React from 'react';
import { v4 as uuid } from 'uuid';

const TaskAddInput = (props) => {
  const { inputText, setInputText, taskList, setTaskList } = props;

  const handleSubmit = (e) => {
    const taskId = uuid();
    e.preventDefault();
    if (inputText === '') return;
    setTaskList([
      ...taskList,
      {
        text: inputText,
        id: taskId,
        draggableId: `task-${taskId}`,
      },
    ]);
    setInputText('');
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="taskAddInput"
          type="text"
          placeholder="add task"
          onChange={handleChange}
          value={inputText}
        />
      </form>
    </div>
  );
};

export default TaskAddInput;
