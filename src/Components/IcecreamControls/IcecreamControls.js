import React from "react";
import classes from "./IcecreamControls.module.css";
import IcecreamControl from "./IcecreamControl";


const controls = [
    { label: 'Cone', type: 'icecreamcone' },
    { label: 'Scoop', type: 'scoop' },
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
                added={() => { console.log(ctrl.type); props.ingredientsAdded(ctrl.type) }}
                addPrice={() => { props.addPrice(ctrl.type) }}
                removed={() => props.ingredientsRemoved(ctrl.type)}
                allCounts={props.allCounts}
            />

        ))}

    </div>
)

export default IcecreamControls;