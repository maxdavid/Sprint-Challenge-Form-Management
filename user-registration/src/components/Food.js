import React from 'react';

const Food = props => {
  const { name, course, technique, ingredients } = props.food;

  return (
    <div className='food'>
      <h2>{name}</h2>
      <h4>
        {course}, {technique}
      </h4>
      <details>
        <summary>Ingredients</summary>
        {ingredients.map(ingredient => (
          <p>{ingredient}</p>
        ))}
      </details>
    </div>
  );
};

export default Food;
