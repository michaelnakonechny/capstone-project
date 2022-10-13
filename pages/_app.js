import { ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { defaultIngredients } from '../data/defaultIngredients';
import GlobalCSS from '../GlobalStyle';
import theme from '../theme';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  const [ingredients, setIngredients] = useState(defaultIngredients);
  const [category, setCategory] = useState('all');

  function editBagle(id) {
    const updatedIngredients = ingredients.map((ingredient) => {
      if (ingredient.id === id) {
        ingredient.chosen = !ingredient.chosen;
      }
      return ingredient;
    });
    setIngredients(updatedIngredients);
  }

  function filterByCategory(category) {
    if (category === 'all') return ingredients;
    else
      return ingredients.filter(
        (ingredient) => ingredient.category === category
      );
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalCSS />
      <Layout>
        <Component
          {...pageProps}
          ingredients={filterByCategory(category)}
          onEditBagle={editBagle}
          onCategoryChange={setCategory}
        />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
