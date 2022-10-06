import { useEffect, useState } from 'react';
import Layout from './components/Layout';
import useLocalStorage from '../hooks/useLocalStorage';

const defaultIngredients = [
  {
    id: 1,
    name: 'Dummy Bread 1',
    chosen: false,
    category: 'bread',
  },
  {
    id: 2,
    name: 'Dummy Bread 2',
    chosen: false,
    category: 'bread',
  },
  {
    id: 3,
    name: 'Dummy Bread 3',
    chosen: false,
    category: 'bread',
  },
  {
    id: 4,
    name: 'Dummy Topping 3',
    chosen: false,
    category: 'toppings',
  },
];

function MyApp({ Component, pageProps }) {
  const [ingredients, setIngredients] = useState(defaultIngredients);

  function editBagle(id) {
    const updatedIngredients = ingredients.map((ingredient) => {
      if (ingredient.id === id) {
        ingredient.chosen = !ingredient.chosen;
      }
      return ingredient;
    });
    setIngredients(updatedIngredients);
  }

  return (
    <>
      <Layout>
        <Component
          {...pageProps}
          ingredients={ingredients}
          onEditBagle={editBagle}
        />
      </Layout>
    </>
  );
}

export default MyApp;
