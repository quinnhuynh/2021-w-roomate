import classes from './MealsItem.module.css'; 
import MealsItemForm from './MealsItemForm';
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';

const MealsItem = props =>{
    console.log(props.price);
    const price = `$${props.price.toFixed(2)}`; 
    const cartcontext = useContext(CartContext); 


    const addToCartHandler = amount =>{
        cartcontext.addItem({
            id: props.id, 
            name: props.name, 
            price: props.price,
            amount: amount
        });
    };
    return(
    <li className={classes.meal}>
        <div>
            <h3> {props.name}</h3>
            <div className={classes.description}> {props.description}</div>
            <div className ={classes.price}> {price} </div>

        </div>
        <div>
            <MealsItemForm id={props.id} onAddToCart={addToCartHandler} />
        </div>

    </li>
    );
}; 

export default MealsItem; 