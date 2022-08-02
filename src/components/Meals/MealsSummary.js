
import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Room 618 @ CWRU </h2>
      <p>
        Delicious and most Exotic Food present to you by chef Thy Nguyen .
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, and at the most perfect time aka 'midnight' 
        perfect for a after grinding session !
      </p>
    </section>
  );
};

export default MealsSummary;