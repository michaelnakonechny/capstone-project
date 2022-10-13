import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { MenuCardItem, MenuDelete } from '/components/MenuCardItem';
import styled from 'styled-components';

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

  console.log(selectedIngredients);

  const initialValue = 0;
  const sumWithInitial = selectedIngredients.reduce(
    (previousValue, currentValue) => previousValue + currentValue.price,
    initialValue
  );

  console.log(sumWithInitial, 'summe');

  return (
    <>
      <h2>Shopping Cart</h2>

      <IngredientWrap>
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
      </IngredientWrap>
      <SubmitButton type="submit">
        CHECKOUT | PRICE: {sumWithInitial}€
      </SubmitButton>
      <span></span>
    </>
  );
}

const SubmitButton = styled.button`
  background: #1b1a1c;
  color: #fab214;
  border-radius: 1rem;
  padding: 1rem;
  border: none;
  padding-left: 6rem;
  padding-right: 6rem;
  &:hover {
    background-color: #fab214;
    color: #1b1a1c;
  }
  &:active {
    background-color: #1b1a1c;
    color: #fab214;
  }
`;

const IngredientWrap = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default ShoppingCart;
