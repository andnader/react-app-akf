import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
import IconButton from "@material-ui/core/IconButton"

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <IconButton>
            <ListOutlinedIcon fontSize="Large"/>
        </IconButton>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>About AKF</MenuItem>
        <MenuItem onClick={handleClose}>My Info</MenuItem>
        <MenuItem onClick={handleClose}>SpeqReq</MenuItem>
      </Menu>
    </div>
  );
}
