import classes from './Cart.module.css'; 
import Modal from '../UI/Modal'; 
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = (props)=>{
    const itemRemoveHandler =(id) => {}; 
    const itemAddHandler =(item) =>{}; 
    const cartcontext = useContext(CartContext); 
    const totalAmount = `$${cartcontext.totalAmount.toFixed(2)}`; 
    const cartItem = <ul className={classes['cart-items']}> 
    {cartcontext.items.map((item) =>(
        <CartItem 
        key ={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
        onAdd={itemAddHandler.bind(null, item)}
        onRemove={itemRemoveHandler.bind(null, item.id)}

        />
    )
    )}
    </ul>
    const itemCheck = cartcontext.items.length >0; 
    return(
        <Modal onClose={props.onClose}> 
            {cartItem}
            <div className={classes.total}>
                <span> Total Amount</span>
                <span> {totalAmount}</span>
            </div>
            <div className={classes.action}>
                <button className={classes['button--alt']} onClick={props.onClose}> Close</button> 
                
                {itemCheck && <button className={classes.button}> Order</button> }
            </div>



        </Modal>
    ); 
}; 

export default Cart; 