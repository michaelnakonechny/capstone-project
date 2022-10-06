import styled from 'styled-components';
import useLocalStorage from '../hooks/useLocalStorage';

import { useRouter } from 'next/router';

export default function Home({ ingredients, onEditBagle }) {
  const router = useRouter();

  const [selectedIngredients, setSelectedIngredients] = useLocalStorage(
    '_ingredients',
    []
  );

  return (
    <>
      <h2>Build your own Bagel!</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log(event);
          setSelectedIngredients(
            ingredients.filter((ingredient) => ingredient.chosen)
          );
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
                  onChange={() => onEditBagle(ingredient.id)}
                  value={ingredient.chosen}
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
