import React from "react";
import classes from "./IcecreamControls.module.css";
import IcecreamControl from "./IcecreamControl";


const controls= [
    {label:'Cone', type:'icecreamcone'},
    {label:'Scoop', type:'scoop'},
    {label:'Cherry', type:'cherry'},
    {label:'Sprinkle', type:'sprinkle'},
];
const IcecreamControls=(props)=> (
    <div className={classes.BuildControls}>
        {controls.map((ctrl)=>(
            <IcecreamControl key={ctrl.label} label={ctrl.label}/>
        ))}
    </div>
)

export default IcecreamControls;