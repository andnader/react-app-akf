import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import FilterListIcon from '@material-ui/icons/FilterList';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function FilterButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab variant="extended">
        <FilterListIcon className={classes.extendedIcon} />
        Filter
      </Fab>
    </div>
  );
}
