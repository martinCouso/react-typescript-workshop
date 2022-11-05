import React, { useState, useCallback, useMemo } from 'react'
import './App.css'
import { POKEMONS } from './assets/pokemons'
import { Container, TextField } from '@mui/material'
import { Pokemon } from './types'
import PokemonCard from './PokemonCard'
import PokemonTable from './PokemonTable'

function App() {
  console.count('RenderApp')

  //  State
  const [searchInput, setSearchInput] = useState<string>('')
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null)

  //  Handlers
  const onSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value)
  }

  const onCheckClick = useCallback(
    (id: number) => {
      const pokemon = POKEMONS.find((currentPokemon) => currentPokemon.id == id)
      if (pokemon) {
        setSelectedPokemon(pokemon)
      }
    },
    [setSelectedPokemon],
  )

  //  Memoized values
  const pokemons = useMemo(() => {
    if (searchInput === '') {
      return POKEMONS
    }
    return POKEMONS.filter((pokemon) =>
      pokemon.name.english.toLowerCase().includes(searchInput.toLowerCase()),
    )
  }, [searchInput])

  return (
    <Container maxWidth='sm' className='App'>
      <TextField
        id='standard-search'
        label='Search field'
        type='search'
        variant='standard'
        value={searchInput}
        onChange={onSearchInputChange}
      />
      {selectedPokemon && (
        <PokemonCard
          name={selectedPokemon.name.english}
          type={selectedPokemon.type.join(', ')} // ['air','water'] = 'air, water';
          hp={selectedPokemon.base.hp}
          attack={selectedPokemon.base.attack}
          defense={selectedPokemon.base.defense}
        />
      )}
      <PokemonTable
        pokemons={pokemons}
        selectedPokemonId={selectedPokemon?.id}
        onSelect={onCheckClick}
      />
    </Container>
  )
}

export default App
