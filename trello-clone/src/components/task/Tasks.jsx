import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Task from './Task';

const Tasks = (props) => {
  const { taskList, setTaskList } = props;

  const handleDragEnd = (result) => {
    const { destination, source } = result
    const remove = taskList.splice(source.index, 1);
    taskList.splice(destination.index, 0, remove[0]);
  }

  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task, index) => (
                <div key={task.id}>
                  <Task
                    index={index}
                    task={task}
                    setTaskList={setTaskList}
                    taskList={taskList}
                  />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Tasks;
