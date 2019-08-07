import React, { Fragment, useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  OutlinedInput,
  InputAdornment,
  IconButton,
  makeStyles,
  withStyles,
  fade,
  Radio,
  RadioGroup,
  FormHelperText,
  FormControlLabel,
  FormControl,
  FormLabel,
  InputLabel,
  InputBase,
  Grid,
  Button
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

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
    textAlign: "left",
    borderRadius: "0"
  },
  form: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: "2vh"
  },
  button: {
    backgroundColor: "#24a6c7",
    color: "white",
    paddingLeft: "2vw",
    paddingRight: "2vw",
    borderRadius: "0"
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
  const [values, setValues] = React.useState({
    type: "",
    script: "",
    location: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const classes = useStyles();
  const [fields, setFields] = useState([{ value: null }]);

  function handleAdd() {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
  }

  function handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
    console.log(i);
  }

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
                name="type"
                id="outlined-age-simple"
                value={values.type}
                onChange={handleChange("type")}
              />
            }
          >
            <MenuItem value={"Recommendtion(RECO)"}>
              Recommendtion(RECO)
            </MenuItem>
            <MenuItem value={" "} />
          </Select>
        </FormControl>
        <FormControl className={classes.form}>
          <h3 className={classes.textField}>Select Location</h3>
          <Select
            className={classes.textField}
            input={
              <OutlinedInput
                // labelWidth={labelWidth}
                name="location"
                id="outlined-age-simple"
                value={values.location}
                onChange={handleChange("location")}
              />
            }
          >
            <MenuItem value={"lwscom-pdp-cav"}>lwscom-pdp-cav</MenuItem>
            <MenuItem value={" "} />
          </Select>
        </FormControl>
        <FormControl className={classes.form}>
          <h3 className={classes.textField}>Select Custom Script</h3>
          <Select
            className={classes.textField}
            input={
              <OutlinedInput
                // labelWidth={labelWidth}
                name="script"
                id="outlined-age-simple"
                value={values.script}
                onChange={handleChange("script")}
              />
            }
          >
            <MenuItem value={" "} />
          </Select>
        </FormControl>
        <FormControl className={classes.form}>
          <h3 className={classes.textField}>Domain</h3>
          <div className={classes.root}>
            <TextField
              className={classes.textField}
              // style={{ marginBottom: "1vh" }}
              variant="outlined"
            />
            {/* <TextField className={classes.textField} variant="outlined" /> */}
            {fields.map((field, idx) => {
              return (
                <div className={classes.root} key={`${field}-${idx}`}>
                  <TextField
                    className={classes.textField}
                    onChange={e => handleChange(idx, e)}
                    style={{ marginTop: "1vh" }}
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton aria-label="delete" color="primary">
                            <DeleteIcon onClick={() => handleRemove(idx)} />
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />
                </div>
              );
            })}
            <p
              style={{
                marginRight: "15vw",
                fontSize: "1rem"
              }}
              onClick={() => handleAdd()}
              className={classes.paper}
              style={{ color: "blue" }}
            >
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
            <TextField
              className={classes.textField}
              variant="outlined"
              placeholder="?persboxHighlight=1"
            />
            <p
              style={{ maxWidth: "27vw", marginLeft: "3vw" }}
              className={classes.paper}
            >
              Copy String and paste it at the end of the page URL in selected{" "}
              domain to preview Campaign
            </p>
          </div>
        </FormControl>
        <FormControl
          className={classes.form}
          style={{
            justifyContent: "space-between"
          }}
        >
          <Button
            className={classes.button}
            style={{
              marginLeft: "18vw"
            }}
            variant="contained"
          >
            Cancel
          </Button>
          <Button className={classes.button} variant="contained">
            Create Campaign
          </Button>
        </FormControl>
      </form>
    </Fragment>
  );
};

export default EditForm;
