import React from "react";
import classes from "./IcecreamControls.module.css";
import IcecreamControl from "./IcecreamControl";


const controls = [
    { label: 'Cone', type: 'icecreamcone' },
    { label: 'Chocolate Scoop', type: 'scoop' },
    { label: 'Strawberry Scoop', type: 'straberryscoop' },
    { label: 'Cherry', type: 'cherry' },
    { label: 'Sprinkle', type: 'sprinkle' },
];
const IcecreamControls = (props) => (
    <div className={classes.BuildControls}>
        <p> Total Price : {props.price} </p>
        {controls.map((ctrl) => (
            <IcecreamControl key={ctrl.label}
                label={ctrl.label}
                type={ctrl.type}
                count={props.allCounts[ctrl.type]}
                added={() => { props.ingredientsAdded(ctrl.type) }}
                addPrice={() => { props.addPrice(ctrl.type) }}
                removed={() => props.ingredientsRemoved(ctrl.type)}
            />

        ))}
        <button className= {classes.OrderButton} disabled={props.price===0}> Order Now </button>
    </div>
)

export default IcecreamControls;