import { createContext, useReducer } from 'react';

export const TaskContext = createContext();

function taskReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

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
