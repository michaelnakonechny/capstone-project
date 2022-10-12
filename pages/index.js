import styled from 'styled-components';
import useLocalStorage from '../hooks/useLocalStorage';
import { useRouter } from 'next/router';
import Dummybread from '../public/dummybread.png';
import Image from 'next/image';
import { MenuCardItem, MenuCheckbox } from './components/MenuCardItem';

export default function Home({ ingredients, onEditBagle, onCategoryChange }) {
  const router = useRouter();

  const [selectedIngredients, setSelectedIngredients] = useLocalStorage(
    '_ingredients',
    []
  );

  return (
    <>
      <h2>Build your own Bagel!</h2>
      <button
        value="all"
        onClick={(event) => onCategoryChange(event.target.value)}
      >
        All Toppings
      </button>
      <button
        value="bread"
        onClick={(event) => onCategoryChange(event.target.value)}
      >
        Bread
      </button>
      <button
        value="topping"
        onClick={(event) => onCategoryChange(event.target.value)}
      >
        Topping
      </button>
      <button
        value="extras"
        onClick={(event) => onCategoryChange(event.target.value)}
      >
        Extra
      </button>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setSelectedIngredients(
            ingredients.filter((ingredient) => ingredient.chosen)
          );
          router.push({ pathname: '/shoppingcart', query: { data: 'test' } });
        }}
      >
        <ul>
          {ingredients.map((ingredient, index) => (
            <MenuCardItem
              ingredient={ingredient}
              index={index}
              key={index}
              interActiveElement={
                <MenuCheckbox
                  ingredient={ingredient}
                  onEditBagle={onEditBagle}
                />
              }
            />
          ))}
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
