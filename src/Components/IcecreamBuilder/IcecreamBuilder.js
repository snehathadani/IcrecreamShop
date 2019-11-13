import React from "react";
import Icecream from '../Icecream/Icecream';
import Aux from '../../Containers/HOC/Aux';
class IcecreamBuilder extends React.Component{
    state= {
        ingredients:{
            cone:1,
            scoop:1,
            sprinkle:1
        }
        }
    render(){
    //const [stateObj, setStateObj]= useState({cone:1, scoop:1, sprinkle:1});
    return(
        <Aux>
            <Icecream/>
        
        </Aux>
    );

}
}

export default IcecreamBuilder;