import React from 'react'
import classes from "./IcecreamIngredients.module.css";

const Sprinkles = (props) => {
   console.log("Sprinkle+++++++++") 
   const count = [0,1,2,3,4,5,6,7,8,9]
    return(
    <div className={classes.Icecream}> { 
        count.map(i => <div key = {i} className={classes.Sprinkle}/>)
    }
    </div>)
} 

export default Sprinkles