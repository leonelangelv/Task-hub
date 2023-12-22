import { PropTypes } from 'prop-types';
import { createContext, useState } from 'react';
import { taskSample } from '../data/taskSample';

export const TaskContext = createContext(taskSample);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(taskSample);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const updateTask = (id, updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, ...updatedTask } : task))
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const values = {
    tasks,
    addTask,
    updateTask,
    deleteTask
  };

  return <TaskContext.Provider value={values}>{children}</TaskContext.Provider>;
};

TaskProvider.propTypes = {
  children: PropTypes.node
};
