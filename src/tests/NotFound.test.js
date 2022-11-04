import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import React from 'react';
import { act } from 'react-dom/test-utils';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

test('4) Teste o componente <NotFound.js />', () => {
  const { history } = renderWithRouter(<App />);

  act(() => {
    history.push('/paginaProibida');
  });
  const { pathname } = history.location;
  expect(pathname).toBe('/paginaProibida');

  const pageNotFound = screen.getByText('Page requested not found');

  expect(pageNotFound).toBeInTheDocument();

  const altText = screen.getByAltText('Pikachu crying because the page requested was not found');

  expect(altText).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
});
