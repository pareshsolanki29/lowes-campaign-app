import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { makeStyles } from "@material-ui/core/styles";
// import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
// import { blockStatement } from "@babel/types";
// import MenuItem from "@material-ui/core/MenuItem";

export default function CreateCampaign() {
  const [open, setOpen] = React.useState(false);

  function handleClose() {
    setOpen(false);
  }
  function handleOpen() {
    setOpen(true);
  }

  const useStyles = makeStyles(theme => ({
    container: {
      display: "flex",
      flexWrap: "wrap",
      width: "100vw"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      display: "block"
    },
    dense: {
      marginTop: theme.spacing(2)
    },
    MuiDialogPaper: {
      width: "100vw"
    },
    group: {
      margin: theme.spacing(1, 0)
    },
    formControl: {
      margin: theme.spacing(3)
    }
  }));

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  const [values, setValues] = React.useState({
    name: "Halloween",
    location: " Someplace",
    type: "New Camp",
    status: true
  });
  const classes = useStyles();
  return (
    <Fragment>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        +CREATE NEW
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        // className={classes.container}
      >
        <DialogTitle id="form-dialog-title">Create New Campaign</DialogTitle>
        <DialogContent>
          <DialogContentText />
        </DialogContent>
        <form>
          {" "}
          <TextField
            id="standard-name"
            className={classes.textField}
            label="Name"
            value={values.name}
            onChange={handleChange("name")}
            margin="normal"
          />
          <TextField
            id="standard-name"
            className={classes.textField}
            label="Location"
            value={values.location}
            onChange={handleChange("name")}
            margin="normal"
          />
          <TextField
            id="standard-name"
            className={classes.textField}
            label="Type"
            value={values.type}
            onChange={handleChange("name")}
            margin="normal"
          />
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Status</FormLabel>
            <RadioGroup
              aria-label="status"
              className={classes.group}
              name="status"
              value={values.status}
              onChange={handleChange}
            >
              <FormControlLabel
                value="Active"
                control={<Radio />}
                label="Active"
              />
              <FormControlLabel
                value="Inactive"
                control={<Radio />}
                label="Inactive"
              />
            </RadioGroup>
          </FormControl>
        </form>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="contained">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
