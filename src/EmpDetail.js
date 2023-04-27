import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Paper, Modal, Box, Typography, Container } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import Button from "@mui/material/Button";

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

  return (
    <React.Fragment>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Container className={classes.root}>
          <Paper component={Box} width="40%" mx="auto" p={4}>
            <Typography variant="h5">Host Details</Typography>
            <Box component="form" mt={2}>
              <TextField
                fullWidth
                label="HostName"
                value={props && props.empdata && props.empdata.name}
                margin="normal"
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Alternate Hostname"
                value={props && props.empdata && props.empdata.alt}
                margin="normal"
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Username"
                value={props && props.empdata && props.empdata.uname}
                margin="normal"
                variant="outlined"
              />
              <TextField
                fullWidth
                type="password"
                label="Password"
                value={props && props.empdata && props.empdata.pwd}
                margin="normal"
                variant="outlined"
              />

              <Button
                variant="contained"
                size="small"
                type="submit"
                onClick={() => setOpen(false)}
              >
                Close
              </Button>
            </Box>
          </Paper>
        </Container>
      </Modal>
    </React.Fragment>
  );
};

export default EmpDetail;
