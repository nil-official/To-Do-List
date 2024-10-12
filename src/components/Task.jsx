import React, { useState } from 'react';
import { PencilIcon, TrashIcon, CheckCircleIcon, SaveIcon } from '@heroicons/react/outline';
import { format } from 'date-fns';

const Task = ({ task, tasks, setTasks }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(task.title);
    const [editedDate, setEditedDate] = useState(task.date);

    const toggleCompletion = () => {
        const updatedTasks = tasks.map((t) =>
            t.id === task.id ? { ...t, completed: !t.completed } : t
        );
        setTasks(updatedTasks);
    };

    const deleteTask = () => {
        const updatedTasks = tasks.filter((t) => t.id !== task.id);
        setTasks(updatedTasks);
    };

    const saveEditedTask = () => {
        const updatedTasks = tasks.map((t) =>
            t.id === task.id ? { ...t, title: editedTitle, date: editedDate } : t
        );
        setTasks(updatedTasks);
        setIsEditing(false);
    };

    const formattedDate = format(new Date(task.date), 'MMMM dd, yyyy, hh:mm a');

    return (
        <div
            className={`flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 mb-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 ${task.completed ? 'bg-gray-200 opacity-70' : 'bg-white'
                }`}
        >
            <div className="flex items-start sm:items-center space-x-4 w-full sm:w-auto">
                <CheckCircleIcon
                    className={`h-6 w-6 cursor-pointer ${task.completed ? 'text-green-500' : 'text-gray-400'
                        }`}
                    onClick={toggleCompletion}
                />

                {isEditing ? (
                    <div className="flex flex-col space-y-2">
                        <input
                            type="text"
                            value={editedTitle}
                            onChange={(e) => setEditedTitle(e.target.value)}
                            className="border p-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        />
                        <input
                            type="datetime-local"
                            value={editedDate}
                            onChange={(e) => setEditedDate(e.target.value)}
                            className="border p-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                ) : (
                    <div className={`text-lg ${task.completed ? 'line-through text-gray-500' : ''}`}>
                        <span>{task.title}</span> <br />
                        <span className="text-sm">{formattedDate}</span>
                    </div>
                )}
            </div>

            <div className="flex space-x-2 mt-4 sm:mt-0">
                {isEditing ? (
                    <SaveIcon
                        className="h-6 w-6 cursor-pointer text-green-500"
                        onClick={saveEditedTask}
                    />
                ) : (
                    <PencilIcon
                        className="h-6 w-6 cursor-pointer text-blue-500"
                        onClick={() => setIsEditing(true)}
                    />
                )}
                <TrashIcon
                    className="h-6 w-6 cursor-pointer text-red-500"
                    onClick={deleteTask}
                />
            </div>
        </div>
    );
};

export default Task;
