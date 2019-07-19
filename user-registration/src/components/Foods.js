import React, { useState, useEffect } from 'react';
import { axiosWithAuth as axios } from '../helpers';
import Food from './Food';

const Foods = () => {
  const [foodList, setFoodList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios()
      .get('http://localhost:5000/api/restricted/data')
      .then(res => {
        console.log(res);
        setFoodList(res.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.log('fetching data error: ', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className='food-list'>
      {isLoading && <h1>Loading...</h1>}
      {foodList.map(food => (
        <Food key={food.name} food={food} />
      ))}
    </div>
  );
};

export default Foods;
