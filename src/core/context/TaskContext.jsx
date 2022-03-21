import { createContext, useReducer } from 'react';
import { actions } from '../store/actions';

const initialState = { tasks: [] };

export const TaskContext = createContext(initialState);

function taskReducer(state, action) {
  switch (action.type) {
    case actions.ADD_TASK: {
      return {
        ...state,
        tasks: [...state.tasks, { text: action.payload, done: false }],
      };
    }

    case actions.REMOVE_TASK: {
      const remainingTasks = state.tasks.filter(
        (task) => task.text !== action.payload.text,
      );

      return {
        ...state,
        tasks: [...remainingTasks],
      };
    }

    case actions.SET_TASK_DONE: {
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
  const [state, dispatch] = useReducer(taskReducer, initialState);

  function addTask(payload) {
    dispatch({ type: actions.ADD_TASK, payload });
  }

  function removeTask(payload) {
    dispatch({ type: actions.REMOVE_TASK, payload });
  }

  function setTaskDone(payload) {
    dispatch({ type: actions.SET_TASK_DONE, payload });
  }

  return (
    <TaskContext.Provider value={{ state, addTask, removeTask, setTaskDone }}>
      {children}
    </TaskContext.Provider>
  );
};
