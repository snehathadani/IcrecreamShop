import React from "react";
import classes from "./IcecreamIngredients.module.css";
import PropTypes from 'prop-types';
class IcecreamIngredients extends React.Component {
    render() {
        let ingredient = null;
        switch (this.props.type) {

            case ('icecream-cone'):
                ingredient = <div className={classes.IcecreamCone}></div>;
                break;

            case ('cherry'):
                ingredient = <div className={classes.Icecream}> <div className={classes.Cherry}></div></div>;
                break;

            case ('sprinkle'):
                ingredient = (<div className={classes.Icecream}>
                    <div className={classes.Sprinkle}></div>
                    <div className={classes.Sprinkle}></div>
                    <div className={classes.Sprinkle}></div>
                    <div className={classes.Sprinkle}></div>
                    <div className={classes.Sprinkle}></div>
                    <div className={classes.Sprinkle}></div>
                    <div className={classes.Sprinkle}></div>
                    <div className={classes.Sprinkle}></div>
                    <div className={classes.Sprinkle}></div>
                    <div className={classes.Sprinkle}></div>
                </div>);
                break;

            case ('scoop'):
                ingredient = <div className={classes.Scoop}>
                    <div className={classes.Circle}></div>
                    <div className={classes.Circle}></div>
                    <div className={classes.Circle}></div>
                    <div className={classes.Circle}></div>
                    <div className={classes.Circle}></div>
                    <div className={classes.Circle}></div>
                </div>;

                break;

            case ('scoopstraberry'):
                ingredient = <div className={classes.ScoopStraberry}>
                    <div className={classes.Circle}></div>
                    <div className={classes.Circle}></div>
                    <div className={classes.Circle}></div>
                    <div className={classes.Circle}></div>
                    <div className={classes.Circle}></div>
                    <div className={classes.Circle}></div>
                </div>;

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