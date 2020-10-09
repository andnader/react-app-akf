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
/*
export default function BasicTextFields() {
  const classes = useStyles();
  const searchContext = React.createContext("");
  const [value, setValue] = useState("");
  const handleChange = e => {
    console.log(`Typed => ${e.target.value}`);
    setValue(e.target.value)
  }
  return (
    <form className={classes.root} noValidate autoComplete="on">
      <Input placeholder="Search" value={value} onChange={handleChange} inputProps={{ 'aria-label': 'description' }} type="sumbit" id="Go" name="searchinput"/>
    </form>
  );
}

export default function BasicTextFields(props) {
  const classes = useStyles();
  const [searchValue, setValue] = useState("");

  function changeSearch(e) {
    setValue(e.target.value)
  }

  return (
    <form className={classes.root} noValidate autoComplete="on">
      <Input placeholder="Search" onChangeCapture={changeSearch} value={searchValue} inputProps={{ 'aria-label': 'description' }} type="text" />
    </form>
  );
}*/

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