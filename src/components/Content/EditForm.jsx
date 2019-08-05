import React, { Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import OutlinedInput from "@material-ui/core/OutlinedInput";

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
    flexDirection: "column",
    justifyContent: "center"
  },

  textField: {
    // marginLeft: theme.spacing(5),
    // marginRight: theme.spacing(1),
    minWidth: "25vw",
    textAlign: "left"
  },
  form: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  top: {
    marginTop: "5vh"
  }
}));
const EditForm = () => {
  const [labelWidth, setLabelWidth] = React.useState(0);

  const classes = useStyles();

  return (
    <Fragment>
      <h2 style={{ marginRight: "25vw" }}> Create New Form</h2>
      <form className={classes.root}>
        <FormControl className={classes.form}>
          <h3 className={classes.textField}>Campaign Name</h3>
          <TextField className={classes.textField} variant="outlined" />
        </FormControl>
        <FormControl className={classes.form}>
          <h3 className={classes.textField}>Select Type</h3>
          <Select
            className={classes.textField}
            input={
              <OutlinedInput
                labelWidth={labelWidth}
                name="age"
                id="outlined-age-simple"
              />
            }
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </form>
    </Fragment>
  );
};

export default EditForm;
