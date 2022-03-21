import React from 'react';
import useTasks from '../core/hooks/useTasks';
import Task from './Task';

const TaskList = () => {
  const { state } = useTasks();

  return (
    <>
      {!!state?.tasks.length && (
        <h3 className="text-xl">
          (Clique em uma tarefa para marcá-la como realizada)
        </h3>
      )}
      <div className="flex flex-wrap gap-3 px-8">
        {state?.tasks.map((task, idx) => (
          <Task key={idx} task={task} />
        ))}
      </div>
    </>
  );
};

export default TaskList;
