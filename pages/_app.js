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
  const [selectedIngredients, setSelectedIngredients] = useLocalStorage(
    'ingredients',
    []
  );
  return (
    <>
      <Layout>
        <Component
          {...pageProps}
          ingredients={ingredients}
          onUpdateIngredients={setSelectedIngredients}
        />
      </Layout>
    </>
  );
}

export default MyApp;
