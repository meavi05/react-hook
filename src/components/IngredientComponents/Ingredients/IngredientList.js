import React, {useState} from 'react';

import './IngredientList.css';
import ModifyIngredient from './ModifyIngredient/ModifyIngredient'

const IngredientList = props => {
  console.log('RENDERING IngredientList')
  const [editIngredient,setEditIngredient] =  useState();

  const modifyIngredient = (ingredient) =>{
   setEditIngredient(ingredient);
  }
  const deleteIngredient = (id) =>{
    props.deleteIngredient(id);
  }
  const updateIngredient = (ig) =>{
    props.updateIngredient(ig);
  }
  return (
    <React.Fragment>
   <ModifyIngredient
   ingredient = {editIngredient} deleteIngredient={deleteIngredient} updateIngredient = {updateIngredient}  ></ModifyIngredient>
    <section className="ingredient-list">
      <h2>Loaded Ingredients</h2>
      <ul>
        {props.ingredients.map(ig => (
          <li key={ig.id} data-toggle="modal" data-target="#largeModal" onClick = {() => modifyIngredient(ig)}>
            <span>{ig.title}</span>
            <span>{ig.amount}x</span>
          </li>
        ))}
      </ul>
    </section>
    </React.Fragment>
  );
};

export default IngredientList;
