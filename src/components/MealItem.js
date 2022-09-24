import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MealItem.css'

function MealItem({data}) {

  console.log(data)

  let navigate = useNavigate();


  return (
    <div className='meal-item-container '>

      {
        (!data) ? "Not Found" : data.map((item, index)=>(
          <div className='card' key={item.idMeal} onClick={()=>{navigate(`/${item.idMeal}`)}}>
          <img src={item.strMealThumb} />
          <h3>{item.strMeal}</h3>
      </div>
        ))
        }
      
    </div>
  )
}

export default MealItem
