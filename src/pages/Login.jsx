import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, TextField } from "@mui/material";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { getLogin } from "../redux/Auth/action";
import axios from "axios";

export const Login = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [data, setData] = useState({});
const datas=useSelector((state)=>{
    // console.log(state)
})
  const handleLogin = () => {
    dispatch(getLogin(data))
    .then((res)=>{
        if(res){
            navigate('/home')
        }
    })
  };

  const style = {
    margin: "auto",
    my: "40px",
    width: "300px",

    bgcolor: "white",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    p: 4,
    borderRadius: "1%",
  };

  return (
    <Box sx={style}>
      <Box>
        <Typography
          sx={{ mt: 1, fontWeight: "600", color: "#00081c" }}
          variant="h4"
          component="h1"
        >
          Login
        </Typography>
        <Grid
          sx={{
            display: "grid",
            gap: 3,
          }}
        >
          <TextField
            id="outlined-password-input"
            label="User Name"
            type="text"
            autoComplete="current-password"
            required={true}
            fullWidth
            onChange={(e) => setData({ ...data, username: e.target.value })}
          />

          <TextField
            id="outlined-password-input"
            label="Password"
            type="text"
            autoComplete="current-password"
            fullWidth
            required={true}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </Grid>

        <Button
          onClick={() => handleLogin()}
          sx={{ mt: 3, mb: 3, backgroundColor: "#00081c" }}
          color="success"
          variant="contained"
          fullWidth
          size="large"
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};
