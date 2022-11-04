import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

test('Teste se a página contém as informações sobre a Pokédex;', () => {
  renderWithRouter(<App />);
  const linkAbout = screen.getByRole('link', { name: 'About' });
  userEvent.click(linkAbout);
  const aboutPokedex = screen.getByRole('heading', { name: 'About Pokédex' });
  const altPokedex = screen.getByAltText('Pokédex');

  expect(aboutPokedex).toBeInTheDocument();
  expect(altPokedex).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
});
