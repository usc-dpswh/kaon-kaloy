import React from 'react';
import HomeMealsCard from './HomeMealsCard';
import Container from '../../../components/Container';

function HomeMeals(props) {

  return (
    <Container className="flex flex-col w-10/12 ">
      {props.data.map((category, index) => (
        <Container key={index} className='flex flex-col items-start mt-8'>
          <h1 className={`text-3xl p-2`}>{category.categoryName}</h1>
          {category.categoryData.map((item, itemIndex) => (
            <HomeMealsCard
              key={itemIndex}
              itemName={item.itemName}
              itemDesc={item.itemDesc}
            />
          ))}
        </Container>
      ))}
    </Container>
  );
}

export default HomeMeals;
