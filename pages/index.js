import styled from 'styled-components';
import useLocalStorage from '../hooks/useLocalStorage';
import { useRouter } from 'next/router';
import Dummybread from '../public/dummybread.png';
import Image from 'next/image';
import { MenuCardItem, MenuCheckbox } from './components/MenuCardItem';

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

const MenuCard = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  list-style: none;
  min-height: 4rem;
  padding: 1rem;
  margin: 1rem;
  gap: 0.5rem;
  max-width: 300px;
`;
