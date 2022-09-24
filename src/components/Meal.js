import React, { useEffect, useState } from 'react'
import './Meal.css'
import MealItem from './MealItem'
import RecipeIndex from './RecipeIndex'

function Meal() {
      const [url, setUrl]  =     useState('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
      const [item, setItem] = useState('');
      const [show, setShow] = useState(false);
      const [search, setSearch] = useState('')

      useEffect(()=>{
         fetch(url)
         .then(res=>res.json())
         .then(data =>{
           console.log(data.meals)
           setItem(data.meals);
           setShow(true)
         })
       

      },[url]);

      const alphaIndex =(alpha)=>{
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
    }

    const searchRecipe= (e)=>{
      if(e.key == "Enter"){
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      }
    }

   

  return (
    <div className='main'>
        <div className='heading'>
            <h1>Search Your Food Recipe</h1>
            <p>Search below for recipes for all your foods, Dear Chef</p>

        </div>
        <div className='search-box'>
            <input
             type='search' 
             className='search-bar'
             onChange={e=>setSearch(e.target.value)} onKeyPress={searchRecipe} />
            <button className='search-btn'>Search</button>

        </div>

        <div className='meal-item-container'>
           
            {
              show ?  <MealItem data={item} /> : 'Not Found'
            }
        </div>

        <div className='alphaContainer'>
          <RecipeIndex alphaIndex={(alpha)=>alphaIndex(alpha)} />
        </div>
      
    </div>
  )
}

export default Meal
