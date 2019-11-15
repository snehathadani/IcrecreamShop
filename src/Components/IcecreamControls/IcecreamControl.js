import React from "react";
import classes from './IcecreamControl.module.css';
const IcecreamControl = (props)=> (
    <div className={classes.BuildControl}>
        <div className={classes.Label}> {props.label}</div>
        <button className={classes.Add} onClick={() => props.added(props.type)}  > Add </button>
        <button className={classes.Remove} onClick = {()=> props.removed(props.type)} disabled = {props.allCounts[props.type] === 0}> Remove </button>
        <div> {} </div>
    </div>
)

export default IcecreamControl;