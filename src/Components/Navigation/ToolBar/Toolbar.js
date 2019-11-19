import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Hamburger from '../../Navigation/NavigationItems/Hamburger';


const Toolbar = (props)=> (
    <header className={classes.ToolBar}>
        <Hamburger/>
        <Logo height="80%"/>
        <nav>
           <NavigationItems/>
        </nav>
    </header>
);

export default Toolbar;