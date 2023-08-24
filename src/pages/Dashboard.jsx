import React from "react";
import { Grid, Paper, Button } from "@mui/material";

import { useNavigate } from "react-router-dom";

import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListIcon from "@mui/icons-material/List";

// eslint-disable-next-line react/prop-types
const Dashboard = () => {
  const navigate = useNavigate();

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
            onClick={() => navigate("fetch-list")}
            variant="outlined"
            startIcon={<ListIcon />}
          >
            Fetchlist
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};
export default Dashboard;
