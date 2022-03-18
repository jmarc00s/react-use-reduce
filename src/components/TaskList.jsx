import React from 'react';
import useTasks from '../core/hooks/useTasks';
import Task from './Task';

const TaskList = () => {
  const {
    state: { tasks },
  } = useTasks();

  return (
    <div className="flex flex-wrap gap-3 px-8">
      {tasks.map((task, idx) => (
        <Task key={idx} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
