import styled from 'styled-components';

let ingredients = [
  {
    name: 'Dummy Bread 1',
    chosen: false,
    category: 'bread',
  },
  {
    name: 'Dummy Bread 2',
    chosen: false,
    category: 'bread',
  },
  {
    name: 'Dummy Bread 3',
    chosen: false,
    category: 'bread',
  },
  {
    name: 'Dummy Topping 3',
    chosen: false,
    category: 'toppings',
  },
  //   Topping1: 'Dummy Topping 1',
  //   Topping2: 'Dummy Topping 2',
  //   Topping3: 'Dummy Topping 3',
  // },
  ,
];

export default function Home() {
  function editBagle(ingredient) {
    if (ingredient.chosen === true) {
      ingredient.chosen = false;
    } else {
      ingredient.chosen = true;
    }
    console.log(ingredient);
  }

  return (
    <div>
      <h1>Parkbench Bagels</h1>

      <h2>Build your own Bagle!</h2>

      <ul>
        {ingredients.map((ingredient) => {
          return (
            // key is not mandatory, but best practise to set
            <li key={ingredient.name}>
              {ingredient.name}
              <input
                type="checkbox"
                onChange={() => editBagle(ingredient)}
              ></input>
            </li>
          );
        })}
      </ul>

      <Button
        onClick={() => {
          console.log(ingredients);
        }}
      >
        Submit
      </Button>
    </div>
  );
}

const Button = styled.button`
  background: orange;
  color: white;
`;
