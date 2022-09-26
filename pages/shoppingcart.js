function ShoppingCart({ ingredients }) {
  console.log(ingredients.filter((ingredient) => ingredient.chosen));

  const selection = ingredients.filter((ingredient) => ingredient.chosen);

  return (
    <>
      <h1>Shopping Cart</h1>

      <ul>
        {selection.map((ingredient) => {
          return <li key={ingredient.id}>{ingredient.name}</li>;
        })}
      </ul>
    </>
  );
}

export default ShoppingCart;
