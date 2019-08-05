import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

export default function CreateCampaign() {
  function handleClose() {
    setOpen(false);
  }
  function handleOpen() {
    setOpen(true);
  }

  const useStyles = makeStyles(theme => ({
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing(5),
      marginRight: theme.spacing(1),
      width: 450
    },
    dense: {
      marginTop: theme.spacing(2)
    },
    group: {
      margin: theme.spacing(1, 0)
    },
    formControl: {
      margin: theme.spacing(1),
      alignItems: "flex-start"
      //   minWidth: 120
    }
  }));

  const classes = useStyles();
  const handleChange = name => ({ target: { value } }) => {
    setValues({
      ...values,
      [name]: value
    });
  };
  const [values, setValues] = React.useState({
    name: " ",
    location: " ",
    type: " ",
    status: ""
  });
  const [open, setOpen] = React.useState(false);
  return (
    <Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create New Campaign</DialogTitle>
        <DialogContent className={classes.container}>
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
              onChange={handleChange("location")}
              margin="normal"
            />
            <TextField
              id="standard-name"
              className={classes.textField}
              label="Type"
              value={values.type}
              onChange={handleChange("type")}
              margin="normal"
            />
            <FormControl className={classes.textField}>
              <InputLabel htmlFor="demo-controlled-open-select">
                Status
              </InputLabel>
              <Select
                onOpen={handleOpen}
                value={values.status}
                onChange={handleChange("status")}
                inputProps={{
                  name: "status",
                  id: "status-simple"
                }}
              >
                <MenuItem value="valid">Valid</MenuItem>
                <MenuItem value="invalid">Invalid</MenuItem>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions className={classes.contain}>
          <Button onClick={handleClose} color="primary" variant="contained">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
