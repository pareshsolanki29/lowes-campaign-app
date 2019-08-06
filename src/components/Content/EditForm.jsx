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
import { Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column"
    // flexWrap: "wrap",
    // justifyContent: "center"
  },

  textField: {
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(1),
    minWidth: "25vw",
    textAlign: "left"
  },
  form: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: "2vh"
  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginLeft: "2vw",
    fontSize: "1rem"
  },
  top: {
    marginTop: "5vh"
  }
}));
const EditForm = () => {
  // const [labelWidth, setLabelWidth] = React.useState(0);

  const classes = useStyles();
  const addDomain = () => {
    console.log("g");
  };

  return (
    <Fragment>
      <h2 style={{ marginRight: "45vw" }}> Create New Campaign</h2>
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
                // labelWidth={labelWidth}
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
        <FormControl className={classes.form}>
          <h3 className={classes.textField}>Select Location</h3>
          <Select
            className={classes.textField}
            input={
              <OutlinedInput
                // labelWidth={labelWidth}
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
        <FormControl className={classes.form}>
          <h3 className={classes.textField}>Select Custom Script</h3>
          <Select
            className={classes.textField}
            input={
              <OutlinedInput
                // labelWidth={labelWidth}
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
        <FormControl className={classes.form}>
          <h3 className={classes.textField}>Domain</h3>
          <div className={classes.root}>
            <TextField
              className={classes.textField}
              style={{ marginBottom: "2vh" }}
              variant="outlined"
            />
            <TextField className={classes.textField} variant="outlined" />
            <p style={{ alignSelf: "flex-start" }} onClick={addDomain}>
              Add Another Domain
            </p>
          </div>
        </FormControl>
        <FormControl className={classes.form}>
          <h3 className={classes.textField}>Campaign Name</h3>
          <RadioGroup
            className={classes.textField}
            aria-label="position"
            name="position"
            // value={value}
            // onChange={handleChange}
            row
          >
            <FormControlLabel
              value="inactive"
              control={<Radio color="primary" />}
              label="Inactive"
              labelPlacement="inactive"
            />
            <FormControlLabel
              style={{ marginLeft: "2vh" }}
              value="active"
              control={<Radio color="primary" />}
              label="Active"
              labelPlacement="active"
            />
          </RadioGroup>
        </FormControl>
        <FormControl className={classes.form}>
          <h3 className={classes.textField}>Preview Mode</h3>
          <div style={{ flexDirection: "column" }}>
            <TextField className={classes.textField} variant="outlined" />
            <p style={{ maxWidth: "27vw" }} className={classes.paper}>
              Copy String and paste it at the end of the page URL in selected{" "}
              domain to preview Campaign
            </p>
          </div>
        </FormControl>
        <FormControl className={classes.root}>
          <Button
            style={{ alignSelf: "flex-start", marginLeft: "18vw" }}
            variant="contained"
            color="primary"
          >
            Cancel
          </Button>
          <Button
            style={{ alignSelf: "flex-end" }}
            variant="contained"
            color="primary"
          >
            Create Campaign
          </Button>
        </FormControl>
      </form>
    </Fragment>
  );
};

export default EditForm;
