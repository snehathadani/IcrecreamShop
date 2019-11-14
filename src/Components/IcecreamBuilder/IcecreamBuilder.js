import React, {useState} from "react";
import Icecream from '../Icecream/Icecream';
import Aux from '../../Containers/HOC/Aux';
import IcecreamControls from '../IcecreamControls/IcecreamControls';

function IcecreamBuilder(props) {
    const [ingredients, setIngredient] = useState({
        'icecreamcone':0,
        'scoop':0,
        'sprinkle':0,
        'cherry':0,
        'scoopstraberry':0
    });
          return(
        <Aux>
            <Icecream icecreamcone={ingredients['icecreamcone']}
                      scoop = {ingredients['scoop']}
                      sprinkle = {ingredients['sprinkle']}
                      cherry = {ingredients['cherry']}
                      scoopstraberry = {ingredients['scoopstraberry']}/>
            <IcecreamControls ingredientsAdded = {(type) =>  setIngredient({...ingredients, [type]: 1})}/>
        </Aux>
    );

}

export default IcecreamBuilder;