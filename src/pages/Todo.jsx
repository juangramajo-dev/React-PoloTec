import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { addTodo, deleteTodo, toggleTodo } from '../actions/todosActions';
import {
  TextField,
  Button,
  Checkbox,
  ListItem,
  ListItemText,
  IconButton,
  List,
  Grid,
  Paper
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DashboardIcon from '@mui/icons-material/Dashboard';




const Todo = () => {
  const navigate = useNavigate();
  const [taskName, setTaskName] = useState('');
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todos.tasks);

  const handleInputChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleAddTask = () => {
    if (taskName) {
      const newTask = {
        id: Date.now(),
        name: taskName,
        completed: false,
      };
      dispatch(addTodo(newTask));
      setTaskName('');
    }
  };

  return (
    <>


<Grid container spacing={3}>
<Grid item xs={6}>
  <Paper
    sx={{
      p: 2,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      mb:"2rem"
    }}
  >
    <Button
      onClick={() => navigate("/")}
      variant="outlined"
      startIcon={<DashboardIcon />}
    >
      Dashboard
    </Button>
  </Paper>
</Grid>
</Grid>
      <h2>Página de tareas</h2>
      <div>


        <TextField
          sx={{ mr: "15px", width: "250px" }}
          label="Ingrese el nombre de la tarea"
          variant="outlined"
          value={taskName}
          onChange={handleInputChange}
        />
        <Button
          sx={{ mt: "15px" }}
          variant="contained"
          onClick={handleAddTask}
        >
          Agregar tarea
        </Button>
      </div>
      <List>
        {tasks.map((task) => (
          <ListItem key={task.id}>
            <Checkbox
              checked={task.completed}
              onChange={() => dispatch(toggleTodo(task.id))}
            />
            <ListItemText primary={task.name} />
            <IconButton onClick={() => dispatch(deleteTodo(task.id))}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Todo;
