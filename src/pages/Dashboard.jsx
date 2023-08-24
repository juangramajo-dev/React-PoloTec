import React from "react";
import { Grid, Paper, Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import DashboardIcon from "@mui/icons-material/Dashboard";
// import ListIcon from "@mui/icons-material/List";

const Dashboard = () => {
  const navigate = useNavigate();
  const tasks = useSelector((state) => state.todos.tasks);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
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
      <Grid item xs={6}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            onClick={() => navigate("todo")}
            variant="outlined"
            startIcon={<PlaylistAddCheckIcon />}
          >
            Todo
          </Button>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <div>
            <Typography variant="h6">Tareas totales</Typography>
            <Typography variant="body1">{totalTasks}</Typography>
          </div>
          <div>
            <Typography variant="h6">Tareas Completadass</Typography>
            <Typography variant="body1">{completedTasks}</Typography>
          </div>
          <div>
            <Typography variant="h6">Tareas pendientes</Typography>
            <Typography variant="body1">{pendingTasks}</Typography>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
