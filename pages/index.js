import styled from 'styled-components';

import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Home({ ingredients, onUpdateIngredients }) {
  const router = useRouter();

  function editBagle(id) {
    const updatedIngredients = ingredients.map((ingredient) => {
      if (ingredient.id === id) {
        ingredient.chosen = !ingredient.chosen;
      }
      return ingredient;
    });
    onUpdateIngredients(updatedIngredients);
  }

  return (
    <>
      <h2>Build your own Bagel!</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log(event);
          router.push({ pathname: '/shoppingcart', query: { data: 'test' } });
        }}
      >
        <ul>
          {ingredients.map((ingredient, index) => {
            return (
              <li key={index}>
                {ingredient.name}
                <input
                  type="checkbox"
                  id={ingredient.id}
                  onChange={() => editBagle(ingredient.id)}
                />
              </li>
            );
          })}
        </ul>

        <Button type="submit">Submit</Button>
      </form>
    </>
  );
}

const Button = styled.button`
  background: orange;
  color: white;
`;

const Heading = styled.header`
  background-color: #1b1a1c;
  width: 100%;
  height: 48px;
  color: #fab214;
  font-family: 'lulo-clean', sans-serif;
  font-weight: bold;
  font-size: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  margin: 0;
  margin-bottom: 3rem;
  z-index: 1;
`;
