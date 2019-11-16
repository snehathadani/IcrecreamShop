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
        'scoop1': undefined,
        'scoop2' : undefined,
        'sprinkle':0,
        'cherry':0,
    });
    const[totalPrice, setTotalprice] = useState(0.0)

    const addIngredientPrice = (type) => {
        setTotalprice(totalPrice + INGREDIENT_PRICE[type])
    }

    const removeIngredientPrice = (type) => {
        setTotalprice(totalPrice - INGREDIENT_PRICE[type])
    }
    const[purchasable,setPurchasable] = useState(false);

    const addIngredient = (type) => {
        if(type === 'scoop') {
            if(!ingredients['scoop1']) {
                setIngredient({...ingredients, 'scoop1': 'chocolate'}); 
            } else {
                setIngredient({...ingredients, 'scoop2': 'chocolate'}); 
            }      
        } else {
            setIngredient({...ingredients, [type]: 1}); 
        }
        addIngredientPrice(type);
    }

    const disabledInfo= {...ingredients}
        for(let key in disabledInfo){
        disabledInfo[key]= disabledInfo[key]<=0;
    }
          return(
            
        <Aux>
            <Icecream icecreamcone={ingredients['icecreamcone']}
                      scoop1 = {ingredients['scoop1']}
                      scoop2 = {ingredients['scoop2']}
                      sprinkle = {ingredients['sprinkle']}
                      cherry = {ingredients['cherry']}
                      allCounts = {ingredients}/>
                      
            <IcecreamControls ingredientsAdded = {addIngredient}
                              ingredientsRemoved= {(type)=> {setIngredient({...ingredients, [type]:0})}}
                              price = {totalPrice}
                              allCounts = {ingredients}
                              purchasehandler={(totalPrice)=>{setPurchasable({purchasable:totalPrice>0})}}/>
        </Aux>
    );

}

export default IcecreamBuilder;