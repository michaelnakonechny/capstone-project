import { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';

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

  // this renders on "localhost:3000" -> index.js
  // and on "localhost:3000/shoppingcart" -> shoppingcart.js
  // and on ".../whatever" -> whatever.js
  // it always gives the rendered js file two properties: "ingredients" and "onUpdateIngredients"
  return (
    <>
      <Header />
      <Component
        {...pageProps}
        ingredients={ingredients}
        onUpdateIngredients={setIngredients}
      />

      <Footer />
    </>
  );
}

export default MyApp;
