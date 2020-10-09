import React, { useState, setState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function BasicTextFields(props) {
  const classes = useStyles();
  const [search, setValue] = useState("")

  function changeSearch(e) {
    setValue(e.target.value)
  }

  props.updateSearch(search)

  return (
    <form className={classes.root} noValidate autoComplete="on">
      <Input placeholder="Search" onChange={changeSearch} value={search} inputProps={{ 'aria-label': 'description' }} type="text" />
    </form>
  );
}