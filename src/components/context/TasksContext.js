import { useState, createContext, useEffect } from 'react';

const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const API = 'http://localhost:8080/tasks';

  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //
  // State to show/hide the add form
  const [showForm, setShowForm] = useState(false);

  //
  // Use Effect to fetch the tasks from db.json / json-server
  useEffect(() => {
    fetchData();
  }, []);

  //
  // Fetch data function
  const fetchData = async () => {
    const response = await fetch(`${API}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    const data = await response.json();
    setIsLoading(false);
    return setTasks(data);
  };

  //
  // Adding a new Task

  const addTask = async (newTask) => {
    const req = await fetch(`${API}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(newTask),
    });

    const data = await req.json();

    setTasks([data, ...tasks]);
  };

  //
  // Deleting a task
  const deleteTask = async (id) => {
    const req = await fetch(`${API}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    setTasks(
      tasks.filter((task) => {
        return task.id !== id;
      })
    );
  };

  //
  // Toggelling a reminder by double click
  async function toggleReminder(id) {
    const req = await fetch(`${API}/${id}`);
    const taskToUpdate = await req.json();
    taskToUpdate.reminder = !taskToUpdate.reminder;

    const res = await fetch(`${API}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(taskToUpdate),
    });

    const data = await res.json();
    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...task, reminder: !task.reminder } : task;
      })
    );
  }

  //
  // The state object
  const state = {
    tasks,
    showForm,
    isLoading,
    setShowForm,
    addTask,
    deleteTask,
    toggleReminder,
  };

  return (
    <TasksContext.Provider value={state}>{children}</TasksContext.Provider>
  );
};

export default TasksContext;
