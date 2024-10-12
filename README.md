# Todo List Web Application

![Todo List Screenshot](./public/screenshot.png)

## Overview

This **Todo List Web Application** is a simple, user-friendly task management tool built with **React.js** and styled using **Tailwind CSS**. It allows users to create, edit, and delete tasks with due dates and mark them as completed. The app also persistently stores tasks using the browser's `localStorage`, ensuring tasks are retained even after refreshing the page or reopening the app.

## Features

- **Add New Tasks**: Users can add tasks with a due date and time.
- **Mark Task as Completed**: Toggle tasks between completed and incomplete states.
- **Edit Tasks**: Modify task names and due dates using an intuitive interface.
- **Delete Tasks**: Remove tasks from the list.
- **Persistent Storage**: Tasks are stored in `localStorage` to maintain state across sessions.
- **Responsive Design**: Optimized for various screen sizes, including desktops and mobile devices.
  
## Tech Stack

- **Frontend**: React.js
- **Styling**: Tailwind CSS
- **Date Formatting**: `date-fns` for formatting task dates and times

## Installation

To set up and run the Todo List application locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/nil-official/SCT_WD_4.git
   cd SCT_WD_4

2. Install the required dependencies:
   ```bash
   npm i

3. Start the development server:
   ```bash
   npm run dev

4. Open your browser and navigate to http://localhost:5173 to start using the Todo List.
