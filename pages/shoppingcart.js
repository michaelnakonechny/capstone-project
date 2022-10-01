function ShoppingCart({ ingredients, onUpdateIngredients }) {
  const selection = ingredients.filter((ingredient) => ingredient.chosen);

  function removeBagle(id) {
    const updatedIngredients = ingredients.map((ingredient) => {
      if (ingredient.id === id) {
        ingredient.chosen = false;
      }
      return ingredient;
    });
    onUpdateIngredients(updatedIngredients);
  }

  return (
    <>
      <h2>Shopping Cart</h2>

      <ul>
        {selection.map((ingredient) => {
          return (
            <>
              <li key={ingredient.id}>{ingredient.name}</li>;
              <button onClick={() => removeBagle(ingredient.id)}>Remove</button>
            </>
          );
        })}
      </ul>
    </>
  );
}

export default ShoppingCart;
