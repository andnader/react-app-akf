import React from 'react'
import './TopBar.css';
import TimelineOutlinedIcon from '@material-ui/icons/TimelineOutlined';
import BasicTextFields from './SearchBar.js'
import SimpleMenu from './Menu.js'
import FilterButton from './Filter.js'

function TopBar(){
    return (
        <>
        <div className="header">
            <div className="header__menu">
            <SimpleMenu/>
            </div>
            <div className="header__logo">
            <TimelineOutlinedIcon fontSize="large"/>
            &nbsp; AWS Knowledge Finder
            </div>
            <div className="header__searchbar">
            <BasicTextFields/>
            </div>
            <div className="header__filterdropdown">
            <FilterButton/>
            </div>
        </div>
        </>
    )
}

export default TopBar