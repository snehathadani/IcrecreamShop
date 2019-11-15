import React from "react";
import classes from './Icecream.module.css';
import IcecreamIngredients from '../IcecreamIngredients/IcecreamIngredients';
let pstyle={
    color: 'red',
    textAlign:'justify',
    textJustify: 'inter-word',
    padding:'15px 167px 0 0',
    textDecoration:'underline overline wavy',
    
}
const Icecream = function(props){
    //console.log("icecream", props)
   return(
    <div className={classes.IcecreamOuter}>
        {props.sprinkle ? (<div><IcecreamIngredients type = "sprinkle"/> </div>) : <div/>}
        {props.cherry ? <IcecreamIngredients type= "cherry"/> : <div/>}
        
        {props.scoop ? (
            <>
            <IcecreamIngredients type= "scoop" />
            <IcecreamIngredients type= "circle"/>
            </>) : <div/>}


        {props.icecreamcone ? <IcecreamIngredients type= "icecreamcone"/> : <div/>}
    </div>
)   
 }

export default Icecream;