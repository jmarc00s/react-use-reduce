import { createContext, useReducer } from 'react';

export const TaskContext = createContext({ tasks: [] });

function taskReducer(state, action) {
  switch (action.type) {
    case 'ADD_TASK': {
      return {
        ...state,
        tasks: [...state.tasks, { text: action.payload, done: false }],
      };
    }

    case 'REMOVE_TASK': {
      const remainingTasks = state.tasks.filter(
        (task) => task.text !== action.payload.text,
      );

      return {
        ...state,
        tasks: [...remainingTasks],
      };
    }

    case 'SET_TASK_DONE': {
      const tasks = state.tasks.filter(
        (task) => task.text !== action.payload.text,
      );

      return {
        ...state,
        tasks: [...tasks, { text: action.payload.text, done: true }],
      };
    }

    default:
      return { ...state };
  }
}

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, { tasks: [] });

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
