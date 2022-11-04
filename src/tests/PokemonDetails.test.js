import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('7. Teste o componente <PokemonDetails.js />', () => {
  test('1) Teste se as informações detalhadas do pokémon selecionado são mostradas na tela:', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByText(/more details/i);
    userEvent.click(moreDetails);

    const pikachuDetails = screen.getByText('Pikachu Details');
    expect(pikachuDetails).toBeDefined();

    const summary = screen.getByRole('heading', { name: 'Summary' });
    expect(summary).toBeDefined();

    const shortText = screen.getByText(/This intelligent Pokémon roasts hard berries with electricity to make them tender enough to eat./i);
    expect(shortText).toBeDefined();
  });

  test('2) Teste se existe na página uma seção com os mapas contendo as localizações do pokémon:', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByText(/more details/i);
    userEvent.click(moreDetails);

    const pokeMap = screen.getByRole('heading', { name: /game locations of PIkachu/i });
    expect(pokeMap).toBeDefined();

    const location = screen.getAllByRole('img', { name: /pikachu location/i });
    expect(location[0]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(location[1]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
    expect(location[0]).toHaveAttribute('alt', 'Pikachu location');
    expect(location[1]).toHaveAttribute('alt', 'Pikachu location');
  });

  test('3) Teste se o usuário pode favoritar um pokémon através da página de detalhes:', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByText(/more details/i);
    userEvent.click(moreDetails);

    const checkbox = screen.getByRole('checkbox', { name: /pokémon favoritado?/i });
    expect(checkbox).toBeDefined();
  });
});
