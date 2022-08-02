import { Fragment } from 'react/cjs/react.production.min';
import classes from './Modal.module.css'; 
import ReactDOM from 'react-dom';
const BackDrop= props =>{
    return <div className={classes.BackDrop} onClick={props.onClose} />
}; 

const ModalOverLay =props =>{
    return (
        <div className={classes.modal}>
            <div className={classes.content}> {props.children}</div>
        </div>
    );
}

const portalElement = document.getElementById('overlays'); 
const Modal = props =>{
    return(
        <Fragment>
            {ReactDOM.createPortal(<BackDrop onClose={props.onClose} />,portalElement )}
            {ReactDOM.createPortal(<ModalOverLay>{props.children}</ModalOverLay>, portalElement)}
        </Fragment>

    ); 
}; 


export default Modal; 