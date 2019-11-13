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
    let readyToeat = Object.keys(props.ingredients)
    .map(igKey=>{
        return[...Array(props.ingredients[igKey])]//this will give you array with given elements like [,,], values don't matter to us right now
        .map((_, i)=> {
            return <IcecreamIngredients key ={igKey + i} type= {igKey}/>
        })
    })
   // console.log(readyToeat);
   //I am getting Empty arrays with length I need to flatten them and open them up. SO i will use reduce
   .reduce((arr,element)=> {
       return arr.concat(element)
   }, []);
   if(readyToeat.length === 0){
       readyToeat = <p style= {pstyle}> Please Start Choosing </p>
   }

    return(
                <div className={classes.IcecreamOuter}>
                
                  
                   
                    {readyToeat}
                </div>
    )  
                }

export default Icecream;