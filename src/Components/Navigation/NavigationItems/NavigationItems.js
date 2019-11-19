import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem';
const NavigationItems = (props)=>(
    <ul className={classes.NavigationItems}>
        <li>
            <a href="/"> 
            <NavigationItem link="/" active> Make Your Icecream </NavigationItem>
            <NavigationItem link="/"> Checkout </NavigationItem>
            </a>
        </li>
    </ul>
)
export default NavigationItems;