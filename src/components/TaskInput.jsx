import React, { useState } from 'react';
import useTasks from '../core/hooks/useTasks';

const TaskInput = () => {
  const [value, setValue] = useState('');
  const { dispatch } = useTasks();

  function handleSubmit(event) {
    event.preventDefault();

    dispatch({ type: 'ADD_TODO', payload: value });

    setValue('');
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
        className="p-3 rounded-tr rounded-br bg-teal-600 text-white "
      >
        Criar
      </button>
    </form>
  );
};

export default TaskInput;
