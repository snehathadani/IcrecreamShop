import React from 'react'
import classes from "./IcecreamIngredients.module.css";

const Scoop = (props) => {
    console.log("Scoops", props)
    const count = [0, 1, 2, 3 ,4, 5]
    return(
        <div className= {[classes.Scoop, props.scoopClass].join(' ')}>
        
    { props.lower ? (count.map(i =>  <div key = {i} className={props.circleClass}></div>)) : <div/>}
        </div>)
}

export default Scoop;