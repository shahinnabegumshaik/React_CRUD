import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Paper, Modal, Box, Typography, Container } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.grey[500],
    paddingTop: theme.spacing(5),
  },
}));

const EmpDetail = (props) => {
  const classes = useStyles();
  // const { empid } = useParams();
  // console.log(empid);
  const [open, setOpen] = useState(true);
  const [name, setName] = useState("");
  const [alt, setAlt] = useState("");
  const [uname, setUname] = useState("");
  const [pwd, setPwd] = useState("");

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
        //alert("Created successfully.");
        setOpen(false);
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
          <Paper component={Box} width="40%" mx="auto" p={6}>
            <Typography variant="h5">Host Details</Typography>
            <Box component="form" mt={2} autoComplete="off">
              <TextField
                fullWidth
                label="Hostname"
                margin="normal"
                variant="outlined"
                required={props.type === "edit"}
                value={props && props.empdata && props.empdata.name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                fullWidth
                label="Alternate Hostname"
                value={props && props.empdata && props.empdata.alt}
                margin="normal"
                variant="outlined"
                onChange={(e) => setAlt(e.target.value)}
              />
              <TextField
                fullWidth
                label="Username"
                value={props && props.empdata && props.empdata.uname}
                margin="normal"
                variant="outlined"
                onChange={(e) => setUname(e.target.value)}
              />
              <TextField
                fullWidth
                type="password"
                label="Password"
                value={props && props.empdata && props.empdata.pwd}
                margin="normal"
                variant="outlined"
                onChange={(e) => setPwd(e.target.value)}
              />
              <div className="divbtn">
                <Button variant="contained" color="success" type="submit">
                  Submit
                </Button>
                <span className="bt2"></span>
                <Button
                  variant="contained"
                  type="submit"
                  onClick={() => setOpen(false)}
                >
                  Close
                </Button>
              </div>
            </Box>
          </Paper>
        </Container>
      </Modal>
    </React.Fragment>
  );
};

export default EmpDetail;
