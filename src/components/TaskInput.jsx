import React, { useState } from 'react';
import useTasks from '../core/hooks/useTasks';

const TaskInput = () => {
  const [value, setValue] = useState('');
  const { addTask } = useTasks();

  function handleSubmit(event) {
    event.preventDefault();

    if (value) {
      addTask(value);
      setValue('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="p-3 text-gray-700"
        placeholder="Insira uma tarefa..."
        value={value}
        onChange={({ target }) => setValue(target.value)}
      />
      <button
        type="submit"
        className="p-3 text-white bg-teal-600 rounded-tr rounded-br "
      >
        Criar
      </button>
    </form>
  );
};

export default TaskInput;
