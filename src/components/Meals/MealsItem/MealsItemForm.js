import classes from './MealsItemForm.module.css'; 
import Input from '../../UI/Input'; 
import {useRef, useState} from 'react'; 


const MealsItemForm = props =>{
    /*store mutable values that does not cause re-render when updated*/
    const [amountIsValid, setAmountIsValid] =useState(true);
    const amountInputRef = useRef(); 
  

    const submitHandler =(event)=>{
        event.preventDefault(); 

        const enteredAmount  = amountInputRef.current.value; 
        const enteredAmountNumber = +enteredAmount; 

        if (enteredAmount.trim().length === 0 || enteredAmountNumber <1 || enteredAmountNumber > 5){
            setAmountIsValid(false); 
            return; 
            /*want to set an error message so I use state*/ 
        }
        /*bc this ref only gives me the amoun not the id or the name--> pass it the props*/ 
        props.onAddToCart(enteredAmountNumber); 
    }

    return(
    <form className ={classes.form} onSubmit={submitHandler}> 
        
        <Input 
        ref={amountInputRef} 
        label= 'Amount'
        input ={{
            id:'amount',
            type:'number',
            min: '1', 
            max:'5', 
            step:'1', 
            defaultStep:'1'
        }}
        /> 
        <button> + Fill Me </button>
        {!amountIsValid && <p> Enter a valid amount between 1-5</p>}
    </form>
    ); 
}; 
export default MealsItemForm; 