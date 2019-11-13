import React from "react";
import Icecream from '../Icecream/Icecream';
import Aux from '../../Containers/HOC/Aux';
import IcecreamControls from '../IcecreamControls/IcecreamControls';
class IcecreamBuilder extends React.Component{
    state= {
        ingredients:{
            icecreamcone:0,
            scoop:0,
            sprinkle:0,
            cherry:0,
            scoopstraberry:0
           
        }
        }
    render(){
    //const [stateObj, setStateObj]= useState({cone:1, scoop:1, sprinkle:1});
    return(
        <Aux>
            <Icecream ingredients={this.state.ingredients}/>
            <IcecreamControls/>
        </Aux>
    );

}
}

export default IcecreamBuilder;