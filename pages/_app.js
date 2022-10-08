import { useEffect, useState } from 'react';
import Layout from './components/Layout';
import useLocalStorage from '../hooks/useLocalStorage';
import { defaultIngredients } from './ingredients';

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
