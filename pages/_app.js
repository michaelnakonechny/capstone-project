import { useEffect, useState } from 'react';
import Layout from './components/Layout';
import useLocalStorage from '../hooks/useLocalStorage';
import { defaultIngredients } from './ingredients';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import GlobalCSS from '../GlobalStyle';

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
    <ThemeProvider theme={theme}>
      <GlobalCSS />
      <Layout>
        <Component
          {...pageProps}
          ingredients={ingredients}
          onEditBagle={editBagle}
        />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
