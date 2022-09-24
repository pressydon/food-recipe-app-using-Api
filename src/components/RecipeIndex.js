import React from 'react';
import './RecipeIndex.css';

function RecipeIndex({alphaIndex}) {
    const alpha = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O","P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  return (
    <div className='all-recipe-alphabets'>
      {
          alpha.map((item, index)=>(
              <div className='alphaBox' key={index} onClick={()=>alphaIndex(item)}>
                  <h3>{item}</h3>
              </div>
          ))
      }
    </div>
  )
}

export default RecipeIndex
