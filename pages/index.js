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
      <Head>
        <title>Parkbench Bagels</title>
      </Head>

      <h1>Parkbench Bagels</h1>

      <h2>Build your own Bagle!</h2>
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
