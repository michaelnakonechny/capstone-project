import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { MenuCardItem, MenuDelete } from '/components/MenuCardItem';

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
        {selectedIngredients.map((ingredient, index) => (
          <MenuCardItem
            ingredient={ingredient}
            index={index}
            key={index}
            interActiveElement={
              <MenuDelete ingredient={ingredient} removeBagle={removeBagle} />
            }
          />
        ))}
      </ul>
    </>
  );
}

export default ShoppingCart;
