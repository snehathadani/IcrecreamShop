import React from "react";
import classes from './IcecreamControl.module.css';
const IcecreamControl = (props)=> {
    console.log("control", props)
    return (
    <div className={classes.BuildControl}>
        <div className={classes.Label}> {props.label}</div>
        <button className={classes.Add} onClick={() => props.added(props.type)} 
        disabled = {props.type.startsWith('scoop') ? props.count >= 2 : props.count >= 1 } > Add </button>
        <button className={classes.Remove} onClick = {()=> props.removed(props.type)} disabled = {!props.count}> Remove </button>
    </div>)
}

export default IcecreamControl;