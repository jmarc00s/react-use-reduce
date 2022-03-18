import { createContext, useState } from "react";

export const TaskContext = createContext({
    tasks: []
});


function taskReducer(state, action) {

    return {...state}
}

export const TaskProvider = ({children}) => {     
    const [state, dispatch] = useReducer(taskReducer, {tasks: []});

    return <TaskContext.Provider value={{ state, dispatch }}>
        {children}
    </TaskContext.Provider>
}