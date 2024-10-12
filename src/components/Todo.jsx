import React, { useEffect, useState } from 'react';
import Task from './Task';

const loadTasksFromLocalStorage = () => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
};

const Todo = () => {
    const [tasks, setTasks] = useState(loadTasksFromLocalStorage);
    const [newTask, setNewTask] = useState('');
    const [newTaskDate, setNewTaskDate] = useState('');

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
        <div className="min-h-screen flex flex-col items-center p-6 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-200 relative overflow-hidden">
            <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">My To-Do List</h1>

            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute w-96 h-96 bg-gradient-to-r from-purple-300 to-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 top-10 left-20"></div>
                <div className="absolute w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40 bottom-10 right-10"></div>
            </div>

            {/* Task Input Section */}
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 mb-6">
                <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0 mb-4">
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
                        className="border w-full sm:w-auto p-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
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
    );
};

export default Todo;
