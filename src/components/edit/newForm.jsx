return (
  <Fragment>
    <h2 style={{ marginRight: "45vw" }}> Create New Campaign</h2>
    <form className={classes.root} onSubmit={handleSubmit}>
      <FormControl className={classes.form}>
        <h3 className={classes.textField}>Campaign Name</h3>
        <TextField
          className={classes.textField}
          name="name"
          onChange={handleChange("name")}
          variant="outlined"
          required
        />
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
          <MenuItem value={"Recommendtion(RECO)"}>Recommendtion(RECO)</MenuItem>
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
          <Domain onChange={handleChange("domain")} />
        </div>
      </FormControl>
      <FormControl className={classes.form}>
        <h3 className={classes.textField}>Campaign Name</h3>
        <RadioGroup
          className={classes.textField}
          aria-label="status"
          name="status"
          value={values.status}
          onChange={handleChange("status")}
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
            name="preview"
            placeholder="?persboxHighlight=1"
            value={values.preview}
            onChange={handleChange("preview")}
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
        <Button
          className={classes.button}
          variant="contained"
          type="submit"
          value="Submit"
        >
          Create Campaign
        </Button>
      </FormControl>
    </form>
  </Fragment>
);
