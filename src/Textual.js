import React from 'react'
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function Textual() {
  const classes = useStyles();

  return (
      <div className="app__textual">
        <List className={classes.root}>
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
            <Avatar alt="Andrew Nader" src="https://ca.slack-edge.com/E015GUGD2V6-W017H4BBWH0-1f353f1ca1d5-512" />
            </ListItemAvatar>
            <ListItemText
            primary="Andrew Nader"
            secondary={
                <React.Fragment>
                <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                >
                    Node Type: Person
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
            }
            />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
            <Avatar alt="Drew Dresser" src="https://ca.slack-edge.com/E015GUGD2V6-W0186SYU3PA-5ba707124589-512" />
            </ListItemAvatar>
            <ListItemText
            primary="Drew Dresser"
            secondary={
                <React.Fragment>
                <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                >
                    Node Type: Person
                </Typography>
                {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
            }
            />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
            <Avatar alt="David Fletcher" src="https://ca.slack-edge.com/E015GUGD2V6-W0172HRD6SK-a8bf7091dd91-512" />
            </ListItemAvatar>
            <ListItemText
            primary="David Fletcher"
            secondary={
                <React.Fragment>
                <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                >
                    Node Type: Person
                </Typography>
                {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
            }
            />
        </ListItem>
        </List>
    </div>
  );
}

  