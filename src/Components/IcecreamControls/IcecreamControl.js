import React from "react";
import classes from './IcecreamControl.module.css';
const IcecreamControl = (props)=> {
    console.log("control", props)
    return (
    <div className={classes.BuildControl}>
        <div className={classes.Label}> {props.label}</div>
        <button className={classes.Add} onClick={() => props.added(props.type)}  > Add </button>
        <button className={classes.Remove} onClick = {()=> props.removed(props.type)} disabled = {!props.count}> Remove </button>
    </div>)
}

export default IcecreamControl;