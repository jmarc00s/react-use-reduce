import React from 'react';
import useTasks from '../core/hooks/useTasks';
import classNames from 'classnames';

const Task = ({ task }) => {
  const { removeTask, setTaskDone } = useTasks();

  function handleClick() {
    if (!task.done) setTaskDone(task);
  }

  function handleRemoveClick() {
    removeTask(task);
  }

  const taskClass = {
    'bg-green-600 hover:bg-green-700 text-gray-50': task.done,
    'bg-gray-100 hover:bg-gray-300 text-gray-800': !task.done,
  };

  const removeIconClass = {
    'hover:bg-gray-400 ': !task.done,
    'hover:bg-green-800': task.done,
  };

  return (
    <>
      <div
        onClick={handleClick}
        className={classNames(
          `flex items-center justify-center p-8 font-medium relative cursor-pointer`,
          taskClass,
        )}
      >
        <div
          onClick={handleRemoveClick}
          className={classNames(
            'absolute top-0 w-4 h-4 rounded-full cursor-pointer right-1 flex justify-center items-center',
            removeIconClass,
          )}
        >
          <span>&times;</span>
        </div>
        {task.text}
      </div>
    </>
  );
};

export default Task;
