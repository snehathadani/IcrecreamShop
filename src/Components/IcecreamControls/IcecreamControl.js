import React from "react";
import classes from './IcecreamControl.module.css';
const IcecreamControl = (props)=> (
    <div className={classes.BuildControl}>
        <div className={classes.Label}> {props.label}</div>
        <button className={classes.Add} onClick={() => props.added(props.label)} > Add </button>
        <button className={classes.Remove}> remove </button>
        <div> {} </div>
    </div>
)

export default IcecreamControl;