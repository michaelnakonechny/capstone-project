import styled from 'styled-components';
import { useState } from 'react';
import Head from 'next/head';

const defaultIngredients = [
  {
    name: 'Dummy Bread 1',
    chosen: false,
    category: 'bread',
  },
  {
    name: 'Dummy Bread 2',
    chosen: false,
    category: 'bread',
  },
  {
    name: 'Dummy Bread 3',
    chosen: false,
    category: 'bread',
  },
  {
    name: 'Dummy Topping 3',
    chosen: false,
    category: 'toppings',
  },
];

export default function Home() {
  const [ingredients, setIngredients] = useState(defaultIngredients);

  function editBagle(ingredient) {
    ingredient.chosen = !ingredient.chosen;
  }

  return (
    <div>
      <Head>
        <title>Parkbench Bagels</title>
      </Head>

      <h1>Parkbench Bagels</h1>

      <h2>Build your own Bagle!</h2>
      <form
        onSubmit={(e) => {
          // only for Testing
          e.preventDefault();
          console.log(e.t);
        }}
      >
        <ul>
          {ingredients.map((ingredient) => {
            return (
              <li key={ingredient.name}>
                {ingredient.name}
                <input
                  type="checkbox"
                  onChange={() => editBagle(ingredient)}
                ></input>
              </li>
            );
          })}
        </ul>

        <Button>Submit</Button>
      </form>
    </div>
  );
}

const Button = styled.button`
  background: orange;
  color: white;
`;
