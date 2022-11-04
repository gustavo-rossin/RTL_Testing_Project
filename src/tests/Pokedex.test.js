import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
// import { act } from 'react-dom/test-utils';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('5) Teste o componente <Pokedex.js />', () => {
  test('Teste se a página contém um heading h2 com o texto Encountered pokémons', () => {
    renderWithRouter(<App />);
    const encounteredPokemon = screen.getByRole('heading', { name: 'Encountered pokémons' });
    expect(encounteredPokemon).toBeInTheDocument();
  });

  it('Teste se é exibido o próximo pokémon da lista quando o botão Próximo pokémon é clicado', () => {
    renderWithRouter(<App />);
    const fireType = screen.getByRole('button', { name: 'Fire' });
    userEvent.click(fireType);
    expect(screen.getByText('Charmander')).toBeInTheDocument();
    const nextPokemon = screen.getByRole('button', { name: 'Próximo pokémon' });
    userEvent.click(nextPokemon);
    expect(screen.getByText('Rapidash')).toBeInTheDocument();
  });

  it('Teste se a Pokédex tem os botões de filtro:', () => {
    renderWithRouter(<App />);
    const dataId = screen.queryAllByTestId('pokemon-type-button');
    expect(dataId[0]).toBeInTheDocument();
  });

  it('Teste se a Pokédex contém um botão para resetar o filtro:', () => {
    renderWithRouter(<App />);
    const allBtn = screen.getByRole('button', { name: /all/i });
    userEvent.click(allBtn);
    expect(screen.getByText('All')).toBeInTheDocument();
  });
});
