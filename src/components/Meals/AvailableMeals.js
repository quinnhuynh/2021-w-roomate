import classes from './AvailableMeals.module.css';
import MealsItem from './MealsItem/MealsItem'; 
import Card from '../UI/Card';
import { useEffect, useState } from 'react';

 


const AvailableMeals = () => {
  const [meals, setMeals] = useState([]); 
  const [isLoading, setLoading] = useState(true); 
  const [httpError, setHttpError] = useState();

  useEffect(() =>{
  const fetchMeals = async () =>{
   const fetchInfo = await fetch('https://food-order-8f443-default-rtdb.firebaseio.com/meals.json'); 
   console.log(fetchInfo); 

   if (!fetchInfo.ok) {
    throw new Error('Something went wrong!');
  }
    const responseData = await fetchInfo.json();
    console.log(responseData);  

  const loadMeals = []; 

  for(const key in responseData ) {
    loadMeals.push({
      id: key, 
      name: responseData[key].name, 
      price: responseData[key].price,
      description: responseData[key].description,
    }); 
  }
  setMeals(loadMeals); 
  setLoading(false); 
}; 
fetchMeals().catch((error) => {
  setLoading(false);
  setHttpError(error.message);
});
}, []);

if (isLoading){
  return <section className={classes.MealsLoading}> 
    <p> Loading </p>
  </section>
}

if (httpError) {
  return (
    <section className={classes.MealsError}>
      <p>{httpError}</p>
    </section>
  );
}



  const mealsList = meals.map((meal) => (<MealsItem 
    key={meal.id} 
    id={meal.id}
    name={meal.name} 
    description={meal.description} 
    price={meal.price} />
    ));

  return (
    <section className={classes.meals}>
        <Card>
      <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;



