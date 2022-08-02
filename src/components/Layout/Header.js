import { Fragment } from 'react'; 
import mealsImage from '../../assets/IMG_8377.JPG'; 
import classes from './Header.module.css'; 
import HeaderCart from './HeaderCart'; 

const Header = props => {
    return <Fragment> 
        <header className={classes.header}>
            <h1> Room 618 </h1>
            <HeaderCart onClick={props.onChange}/>
        </header>
        <div className={classes['main-image']}>
        <img src={mealsImage} alt= 'A table full of delicious food' />
        </div>
    </Fragment>


}; 
export default Header; 