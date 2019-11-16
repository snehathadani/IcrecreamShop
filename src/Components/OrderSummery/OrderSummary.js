import React from "react";
import Aux from '../../Containers/HOC/Aux';
export default function OrderSummary(props){
    return(
        <Aux>
        <h1> Your Order </h1>
        <span> {Object.keys(props.ingredients)
                .map((k,i)=>  <div> {k}: {props.ingredients[k]} </div>)}</span>
        </Aux>
    )
}