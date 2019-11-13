import React from "react";
import classes from './IcecreamControl.module.css';
const IcecreamControl = (props)=> (
    <div className={classes.BuildControl}>
        <div className={classes.Label}> {props.label}</div>
        <button className={classes.Less}> Add </button>
        <button className={classes.More}> remove </button>
    </div>
)

export default IcecreamControl;