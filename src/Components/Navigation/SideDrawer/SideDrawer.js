import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import classes from './SideDrawer.module.css';
const SideDrawer= (props)=>(
    <div classname={classes.SideDrawer}>
        <Logo/>
        <nav>  <NavigationItems/> </nav>
    </div>
);



export default SideDrawer;