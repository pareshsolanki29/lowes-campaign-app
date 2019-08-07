InputProps={{
    endAdornment: (
      <InputAdornment position="end">
      <IconButton
  className={classes.button}
  aria-label="delete"
  disabled
  color="primary"
>
  <DeleteIcon onClick={() => handleRemove(idx)}/>
</IconButton>
      </InputAdornment>
    )
  }}


