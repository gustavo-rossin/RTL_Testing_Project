import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { act } from 'react-dom/test-utils';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('6. Teste o componente <Pokemon.js />', () => {
  test('1) Teste se é renderizado um card com as informações de determinado pokémon:', () => {
    renderWithRouter(<App />);
    const pokeName = screen.getByText(/pikachu/i);
    const pokeType = screen.getByTestId('pokemon-type');
    const pokeWeight = screen.getByText(/Average weight: 6.0 kg/i);
    const pokerImg = screen.getByAltText('Pikachu sprite');

    expect(pokeName).toHaveTextContent('Pikachu');
    expect(pokeType).toHaveTextContent('Electric');
    expect(pokeWeight).toBeInTheDocument();
    expect(pokerImg).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });

  test('2) Teste se ao clicar no link de navegação do pokémon, é feito o redirecionamento da aplicação para a página de detalhes de pokémon;', () => {
    const link = '/pokemons/25';
    renderWithRouter(<App />);
    const linkMoreDetails = screen.getByRole('link', { name: /more details/i });

    expect(linkMoreDetails).toBeDefined();
    expect(linkMoreDetails).toHaveAttribute('href', link);

    userEvent.click(linkMoreDetails);

    const summary = screen.getByRole('heading', { name: 'Summary' });
    expect(summary).toBeDefined();

    const { history } = renderWithRouter(<App />);
    act(() => {
      history.push(link);
    });

    const { pathname } = history.location;
    expect(pathname).toBe(link);
  });

  it('3) Teste se existe um ícone de estrela nos pokémons favoritados:', () => {
    renderWithRouter(<App />);

    const linkMoreDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(linkMoreDetails);

    const favPokemon = screen.getByRole('checkbox', { name: 'Pokémon favoritado?' });
    userEvent.click(favPokemon);

    const homeBtn = screen.getByRole('link', { name: 'Home' });
    userEvent.click(homeBtn);

    const star = screen.getByAltText('Pikachu is marked as favorite');
    expect(star).toHaveAttribute('src', '/star-icon.svg');
  });
});
