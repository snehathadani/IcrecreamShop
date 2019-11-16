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
    let scoops=0;
    if(props.scoop1 && !props.scoop2){
        scoops=1;
    }
    if(props.scoop1 && props.scoop2){
        scoops=2;
    }
    console.log("icecream", props)
   return(
    <div className={classes.IcecreamOuter}>
        {props.sprinkle ? (<div><IcecreamIngredients type = "sprinkle"/> </div>) : <div/>}
        {props.cherry ? <IcecreamIngredients type= "cherry" scoops={scoops}/> : <div/>}

        {props.icecreamcone ? <IcecreamIngredients type= "icecreamcone"/> : <div/>}

        {scoops===1 ? (
            <div className={classes.ScoopContainer}>
                <IcecreamIngredients type = {props.scoop1 === 'chocolate' ? 'scoop' : 'scoopstraberry'} lower="lower" />
               
            </div>) : <div/>
        }

        {scoops===2 ? (
            <div className={classes.ScoopContainer}>
                <IcecreamIngredients type = {props.scoop1 === 'chocolate' ? 'scoop' : 'scoopstraberry'} lower="lower"/>
                <IcecreamIngredients type = {props.scoop2 === 'chocolate' ? 'scoop' : 'scoopstraberry'}  />
                
            </div>) : <div/>
        }
        

        {props.icecreamcone ? <IcecreamIngredients type= "icecreamcone"/> : <div/>}
       
    </div>
)   
 }

export default Icecream;