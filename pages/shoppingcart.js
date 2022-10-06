import useLocalStorage from '../hooks/useLocalStorage';

function ShoppingCart() {
  const [selectedIngredients, setSelectedIngredients] = useLocalStorage(
    '_ingredients',
    []
  );

  function removeBagle(id) {
    const newIngredients = selectedIngredients.filter(
      (ingredient) => ingredient.id !== id
    );
    setSelectedIngredients(newIngredients);
  }

  return (
    <>
      <h2>Shopping Cart</h2>

      <ul>
        {selectedIngredients.map((ingredient) => {
          return (
            <div key={ingredient.id}>
              <li>{ingredient.name}</li>;
              <button onClick={() => removeBagle(ingredient.id)}>Remove</button>
            </div>
          );
        })}
      </ul>
    </>
  );
}

export default ShoppingCart;
