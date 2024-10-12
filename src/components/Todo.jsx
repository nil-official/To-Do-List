import React, { useEffect, useState } from 'react'
import Task from './Task';

// Helper function to load tasks from localStorage
const loadTasksFromLocalStorage = () => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
};

const Todo = () => {

    // Initialize tasks state by loading from localStorage
    const [tasks, setTasks] = useState(loadTasksFromLocalStorage);
    const [newTask, setNewTask] = useState('');
    const [newTaskDate, setNewTaskDate] = useState('');

    // Save tasks to localStorage whenever the tasks array changes
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        if (!newTask || !newTaskDate) return;

        const task = {
            id: Date.now(),
            title: newTask,
            date: newTaskDate,
            completed: false,
        };

        setTasks([...tasks, task]);
        setNewTask('');
        setNewTaskDate('');
    };

  return (

      <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">My To-Do List</h1>

          {/* Task Input Section */}
          <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 mb-6">
              <div className="flex space-x-2 mb-4">
                  <input
                      type="text"
                      placeholder="Add a new task..."
                      value={newTask}
                      onChange={(e) => setNewTask(e.target.value)}
                      className="border w-full p-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  />
                  <input
                      type="datetime-local"
                      value={newTaskDate}
                      onChange={(e) => setNewTaskDate(e.target.value)}
                      className="border p-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  />
              </div>
              <button
                  onClick={addTask}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition-all duration-300"
              >
                  Add Task
              </button>
          </div>

          {/* Tasks Section */}
          <div className="w-full max-w-md">
              {tasks.length ? (
                  tasks.map((task) => (
                      <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
                  ))
              ) : (
                  <p className="text-gray-500 text-center">No tasks yet. Add a new task!</p>
              )}
          </div>
      </div>

  )
}

export default Todo