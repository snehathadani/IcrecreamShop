import React from 'react';
import icecreamLogo from '../../Assets/Images/icecreamLogo.jpeg';
import classes from '../Logo/Logo.module.css';
const Logo = (props)=>(
  <div className={classes.Logo}>
      <img src = {icecreamLogo} alt ="Yummy-Icecream"/>
  </div>
);

export default Logo;