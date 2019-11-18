import React from "react";
import Aux from '../../Containers/HOC/Aux';
import Button from '../UI/Button/Button';
export default function OrderSummary(props){
    return(
        <Aux>
        <h1> Your Order </h1>
        <span> {Object.keys(props.ingredients)
                .map((k,i)=>  <div> {k}: {props.ingredients[k]} </div>)}</span>
                <p><strong> Total Price: {props.price.toFixed(2)} </strong></p>
                <p> Continue to Checkout?</p>
                <Button btnType ="Danger" clicked={props.purchaseCancel}> CANCEL</Button>
                <Button btnType ="Success" clicked={props.purchaseContinue}> Continue</Button>
        </Aux>
    )
}