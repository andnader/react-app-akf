import React from 'react'
import './TopBar.css';
import TimelineOutlinedIcon from '@material-ui/icons/TimelineOutlined';
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';

function TopBar(){
    return (
        <>
        <div className="TopFixedMenu">
            <div className="Menu">
            <ListOutlinedIcon />
            </div>
            <div className="Logo">
            <TimelineOutlinedIcon />
            AWS Knowledge Finder
            </div>
            <div className="SearchBar">
            Search Bar
            </div>
        </div>
        </>
    )
}

export default TopBar