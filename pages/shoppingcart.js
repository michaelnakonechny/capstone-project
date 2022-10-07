import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

function ShoppingCart() {
  const [selectedIngredients, setSelectedIngredients] = useLocalStorage(
    '_ingredients',
    []
  );

  function removeBagle(id) {
    const newIngredients = selectedIngredients.filter(
      (ingredient) => ingredient.id !== id
    );
    setSelectedIngredients(newIngredients);
  }

  return (
    <>
      <h2>Shopping Cart</h2>

      <ul>
        {selectedIngredients.map((ingredient) => {
          return (
            <React.Fragment key={ingredient.id}>
              <li>{ingredient.name}</li>;
              <button onClick={() => removeBagle(ingredient.id)}>Remove</button>
            </React.Fragment>
          );
        })}
      </ul>
    </>
  );
}

export default ShoppingCart;
