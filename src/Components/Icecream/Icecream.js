import React from "react";
import classes from './Icecream.module.css';
import IcecreamIngredients from '../IcecreamIngredients/IcecreamIngredients';

const Icecream = function(props){
    return(
                <div className={classes.IcecreamOuter}>
                    <div>
                    <IcecreamIngredients type = "sprinkle"/>
                   
                    </div>
                    <IcecreamIngredients type= "cherry"/>
                    <IcecreamIngredients type= "scoop">
                    <IcecreamIngredients type= "circle"/>
                    </IcecreamIngredients>
                  
                    <IcecreamIngredients type= "icecream-cone" />
                </div>
    )  
                }

export default Icecream;