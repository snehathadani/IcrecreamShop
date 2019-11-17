import React, { useState } from "react";
import Icecream from '../Icecream/Icecream';
import Aux from '../../Containers/HOC/Aux';
import IcecreamControls from '../IcecreamControls/IcecreamControls';
import Modal from '../OrderSummery/Modal';
import OrderSummary from "../OrderSummery/OrderSummary";
const INGREDIENT_PRICE = {
    'icecreamcone': .50,
    'scoop': 1,
    'sprinkle': .50,
    'cherry': .50,
    'scoopstraberry': 1
}

function IcecreamBuilder(props) {
    const [ingredients, setIngredient] = useState({
        'icecreamcone': 0,
        'scoop1': undefined,
        'scoop2': undefined,
        'sprinkle': 0,
        'cherry': 0,
    });
    const [totalPrice, setTotalprice] = useState(0.0)
    const [purchasing, setPurchasing] = useState(false)
    const addIngredientPrice = (type) => {
        setTotalprice(totalPrice + INGREDIENT_PRICE[type])
    }

    const removeIngredientPrice = (type) => {
        setTotalprice(totalPrice - INGREDIENT_PRICE[type])
    }
    const [purchasable, setPurchasable] = useState(false);

    const addIngredient = (type) => {
        if (type === 'scoop' || type === 'scoopstraberry') {
            if (!ingredients['scoop1']) {
                setIngredient({ ...ingredients, 'scoop1': type === 'scoop' ? 'chocolate' : 'straberry' });
            } else {
                setIngredient({ ...ingredients, 'scoop2': type === 'scoop' ? 'chocolate' : 'straberry' });
            }
        } else {
            setIngredient({ ...ingredients, [type]: 1 });
        }
        addIngredientPrice(type);
    }

    const removeIngredient = (type) => {

        if (type.startsWith('scoop')) {
            if (type === 'scoop') {
                if (ingredients['scoop1'] === 'chocolate')
                    setIngredient({ ...ingredients, 'scoop1': ingredients['scoop2'], 'scoop2': undefined })
                else
                    setIngredient({ ...ingredients, 'scoop2': undefined })
            } else {
                if (ingredients['scoop1'] === 'straberry')
                    setIngredient({ ...ingredients, 'scoop1': ingredients['scoop2'], 'scoop2': undefined })
                else
                    setIngredient({ ...ingredients, 'scoop2': undefined })
            }
        } else {
            setIngredient({ ...ingredients, [type]: 0 });
        }
        console.log("remove", ingredients)
        removeIngredientPrice(type);
    }

    const disabledInfo = { ...ingredients }
    for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
        <Aux>
            <Modal show={purchasing}
                   modalClose={() => setPurchasing(false)}>
                <OrderSummary ingredients={ingredients} />
            </Modal>
            <Icecream icecreamcone={ingredients['icecreamcone']}
                scoop1={ingredients['scoop1']}
                scoop2={ingredients['scoop2']}
                sprinkle={ingredients['sprinkle']}
                cherry={ingredients['cherry']}
                allCounts={ingredients} />

            <IcecreamControls ingredientsAdded={addIngredient}
                ingredientsRemoved={removeIngredient}
                price={totalPrice}
                allCounts={ingredients}
                purchasehandler={(totalPrice) => { setPurchasable({ purchasable: totalPrice > 0 }) }}
                purchasing={(e) => { setPurchasing({ purchasing: true }) }}
            />

        </Aux>
    );

}

export default IcecreamBuilder;