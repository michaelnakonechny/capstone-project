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
      <Headline>Build your own Bagel!</Headline>
      <FilterButtonContainer>
        <FilterButton
          value="all"
          onClick={(event) => onCategoryChange(event.target.value)}
        >
          ALL TOPPINGS
        </FilterButton>
        <FilterButton
          value="bread"
          onClick={(event) => onCategoryChange(event.target.value)}
        >
          BREAD
        </FilterButton>
        <FilterButton
          value="topping"
          onClick={(event) => onCategoryChange(event.target.value)}
        >
          TOPPING
        </FilterButton>
        <FilterButton
          value="extras"
          onClick={(event) => onCategoryChange(event.target.value)}
        >
          EXTRAS
        </FilterButton>
      </FilterButtonContainer>
      <Formular
        onSubmit={(event) => {
          event.preventDefault();
          setSelectedIngredients(
            ingredients.filter((ingredient) => ingredient.chosen)
          );
          router.push({ pathname: '/shoppingcart', query: { data: 'test' } });
        }}
      >
        <IngredientWrap>
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
        </IngredientWrap>

        <SubmitButton type="submit">SUBMIT</SubmitButton>
      </Formular>
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

const FilterButton = styled.button`
  background: #1b1a1c;
  color: #fab214;
  border-radius: 1rem;
  border: none;
  padding: 0.5rem;
  &:hover {
    background-color: #fab214;
    color: #1b1a1c;
  }
  &:active {
    background-color: #1b1a1c;
    color: #fab214;
  }
`;

const FilterButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Headline = styled.h2`
  text-align: center;
`;

const IngredientWrap = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Formular = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
