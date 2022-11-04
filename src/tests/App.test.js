import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

test('O primeiro link deve possuir o texto Home;', () => {
  renderWithRouter(<App />);
  const linkHome = screen.getByRole('link', { name: 'Home' });
  const linkAbout = screen.getByRole('link', { name: 'About' });
  const linkFavorite = screen.getByRole('link', { name: 'Favorite Pokémons' });

  expect(linkHome).toBeInTheDocument();
  expect(linkAbout).toBeInTheDocument();
  expect(linkFavorite).toBeInTheDocument();
});
