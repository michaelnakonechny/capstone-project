import styled from 'styled-components';

import { useRouter } from 'next/router';

export default function Home({
  ingredients,
  onUpdateIngredients,
  selectedIngredients,
}) {
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
