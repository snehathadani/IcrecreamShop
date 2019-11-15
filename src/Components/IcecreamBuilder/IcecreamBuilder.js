import React, {useState} from "react";
import Icecream from '../Icecream/Icecream';
import Aux from '../../Containers/HOC/Aux';
import IcecreamControls from '../IcecreamControls/IcecreamControls';
const INGREDIENT_PRICE =    {    
    'icecreamcone' : .50,
    'scoop':1,
    'sprinkle':.50,
    'cherry':.50,
    'scoopstraberry':0
}

function IcecreamBuilder(props) {
    const [ingredients, setIngredient] = useState({
        'icecreamcone':0,
        'scoop':0,
        'sprinkle':0,
        'cherry':0,
        'scoopstraberry':0
    });
    const[totalPrice, setTotalprice] = useState(0.0)

    const addIngredientPrice = (type) => {
        setTotalprice(totalPrice + INGREDIENT_PRICE[type])
    }

    const removeIngredientPrice = (type) => {
        setTotalprice(totalPrice - INGREDIENT_PRICE[type])
    }

    const disabledInfo= {...ingredients}
        for(let key in disabledInfo){
        disabledInfo[key]= disabledInfo[key]<=0;
    }
          return(
            
        <Aux>
            <Icecream icecreamcone={ingredients['icecreamcone']}
                      scoop = {ingredients['scoop']}
                      sprinkle = {ingredients['sprinkle']}
                      cherry = {ingredients['cherry']}
                      scoopstraberry = {ingredients['scoopstraberry']}
                      allCounts = {ingredients}/>
            <IcecreamControls ingredientsAdded = {(type) =>  {setIngredient({...ingredients, [type]: 1}); addIngredientPrice(type)}}
                              ingredientsRemoved= {(type)=> {setIngredient({...ingredients, [type]:0})}}
                              price = {totalPrice}
                              allCounts = {ingredients}/>
        </Aux>
    );

}

export default IcecreamBuilder;