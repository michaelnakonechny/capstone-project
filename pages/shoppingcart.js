import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

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
              <li>
                {ingredient.name}
                <IconButton
                  onClick={() => removeBagle(ingredient.id)}
                  aria-label="delete"
                >
                  <DeleteIcon />
                </IconButton>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </>
  );
}

export default ShoppingCart;

const RemoveButton = styled.button``;
