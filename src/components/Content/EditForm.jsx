import React, { Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles, withStyles, fade } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import InputLabel from "@material-ui/core/InputLabel";
import InputBase from "@material-ui/core/InputBase";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "space-around"
  },

  textField: {
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
    minWidth: "25vw"
  },
  formLabel: {
    float: "left"
  },
  paper: {
    color: theme.palette.text.primary
  },
  top: {
    marginTop: "5vh"
  }
}));
const EditForm = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <h2> Create New Form</h2>
      <form>
        <FormControl>
          <Grid container spacing={6}>
            <Grid item xs={3}>
              <InputLabel className={classes.paper}>Campaign Name</InputLabel>
            </Grid>
            <Grid item xs={3}>
              <TextField
                className={classes.textField}
                // value={values.name}
                // onChange={handleChange("name")
                variant="outlined"
              />
            </Grid>
          </Grid>
        </FormControl>
      </form>
    </Fragment>
  );
};

export default EditForm;
