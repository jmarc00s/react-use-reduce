import React from 'react';

const Task = ({ task }) => {
  return (
    <div className="p-8 bg-gray-100 font-medium text-gray-800 flex items-center justify-center">
      {task}
    </div>
  );
};

export default Task;
