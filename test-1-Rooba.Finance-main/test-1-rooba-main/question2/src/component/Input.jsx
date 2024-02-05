import { TextField, Grid } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';
const Input = ({ label, name, type, value, onChange, error, half }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={12}>
      <TextField
        autoComplete='off'
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        variant="outlined"
        required
        fullWidth
        label={label}

      />
      {error && <span className={classes.textDanger}>{error}</span>}
    </Grid>
     
  );
};

export default Input;
