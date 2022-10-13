import Image from 'next/image';
import styled from 'styled-components';
import Dummybread from '../public/dummybread.png';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export const MenuCheckbox = ({ ingredient, onEditBagle }) => (
  <StyledCheckbox
    type="checkbox"
    id={ingredient.id}
    onChange={() => onEditBagle(ingredient.id)}
    value={ingredient.chosen}
  />
);

export const MenuDelete = ({ ingredient, removeBagle }) => (
  <IconButton onClick={() => removeBagle(ingredient.id)} aria-label="delete">
    <DeleteIcon />
  </IconButton>
);

export const MenuCardItem = ({ index, ingredient, interActiveElement }) => (
  <MenuCard key={index}>
    <div>
      <Image
        width="50px"
        height="50px"
        src={Dummybread}
        alt={ingredient.name}
      />
    </div>
    {ingredient.name}
    {interActiveElement}
  </MenuCard>
);

const MenuCard = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 2rem;
  list-style: none;
  min-height: 4rem;
  padding: 1rem;
  margin: 1rem;
  gap: 0.5rem;
  width: 350px;
  background-color: #fab214;
  /* background-color: #1b1a1c; */
  color: #1b1a1c;
`;

const StyledCheckbox = styled.input`
  background-color: black;
`;
