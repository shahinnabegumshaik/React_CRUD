import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Paper, Modal, Box, Typography, Container } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.grey[500],
    paddingTop: theme.spacing(5),
  },
}));

const EmpCreate = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [alt, setAlt] = useState("");
  const [uname, setUname] = useState("");
  const [pwd, setPwd] = useState("");
  const [open, setOpen] = useState(true);

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    const empdata = { name, alt, uname, pwd };
    //console.log({ name, alt, uname, pwd, active });

    fetch("http://localhost:8000/employee", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empdata),
    })
      .then((res) => {
        // alert("Created successfully.");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <React.Fragment>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Container className={classes.root} onSubmit={handlesubmit}>
          <Paper component={Box} width="40%" mx="auto" p={8}>
            <Typography variant="h5" className="App">
              Create Additional Host
            </Typography>
            <Box component="form" mt={2} autoComplete="off">
              <TextField
                fullWidth
                label="Hostname"
                margin="normal"
                variant="outlined"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                fullWidth
                label="Alternate Hostname"
                margin="normal"
                variant="outlined"
                required
                value={alt}
                onChange={(e) => setAlt(e.target.value)}
              />
              <TextField
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                required
                value={uname}
                onChange={(e) => setUname(e.target.value)}
              />
              <TextField
                fullWidth
                type="password"
                label="Password"
                margin="normal"
                variant="outlined"
                required
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
              />
              <div className="button">
                <Button variant="contained" color="success" type="submit">
                  Create
                </Button>
                <NavLink to="/" className="btn btn-danger">
                  BACK
                </NavLink>
              </div>
            </Box>
          </Paper>
        </Container>
      </Modal>
    </React.Fragment>
  );
};
export default EmpCreate;
