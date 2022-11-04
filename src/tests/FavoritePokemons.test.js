import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

test('Teste se é exibida na tela a mensagem No favorite pokemon found, caso a pessoa não tenha pokémons favoritos;', () => {
  renderWithRouter(<App />);
  const linkFavorite = screen.getByRole('link', { name: 'Favorite Pokémons' });
  userEvent.click(linkFavorite);
  expect(screen.getByText('No favorite pokemon found')).toBeInTheDocument();
});
