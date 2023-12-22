// app.js
const express = require('express');
const tasksRouter = require('./routes/tasks');
const app = express();

app.use(express.json());


const PORT = process.env.PORT || 5000;

// routes

app.use('/api/tasks', tasksRouter);

// app.post("/api/tasks", createTask);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
