import React from "react";
import classes from "./IcecreamIngredients.module.css";
import PropTypes from 'prop-types';
import Sprinkles from './Sprinkles';
import Scoop from './Scoop'

class IcecreamIngredients extends React.Component {
    render() {
        let ingredient = null;
        console.log("ingredients", this.props)
        switch (this.props.type) {
            case ('icecreamcone'):
                ingredient = <div className={classes.IcecreamCone}></div>;
                break;

            case ('cherry'):
                ingredient =<div className={this.props.scoops===2 ? classes.CherryTwo:classes.CherryOne}></div>;
                break;

            case ('sprinkle'):
                ingredient = <Sprinkles/>
                break;

            case ('scoop'):
                ingredient = <Scoop scoopClass={classes.ChocolateScoop}  circleClass={classes.Circle} 
                            lower={this.props.lower}/>
                break;

            case ('scoopstraberry'):
                ingredient = <Scoop scoopClass={classes.StrawberryScoop} circleClass={classes.ScoopStraberrycircle}
                            lower={this.props.lower}/>
                break;
            
          

            default:
                ingredient = null;
        }
        return ingredient;
    }
}


IcecreamIngredients.propTypes = {
    type: PropTypes.string.isRequired
};

export default IcecreamIngredients;