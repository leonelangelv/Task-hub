import { PropTypes } from 'prop-types';
import { createContext, useState } from 'react';

export const TaskContext = createContext([]);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [taskId, setTaskId] = useState(5);

  const addTask = (newTask) => {
    setTaskId(taskId + 1);
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
    taskId,
    addTask,
    updateTask,
    deleteTask
  };

  return <TaskContext.Provider value={values}>{children}</TaskContext.Provider>;
};

TaskProvider.propTypes = {
  children: PropTypes.node
};
