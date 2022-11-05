import React, { memo, useMemo, useState } from 'react'
import { Pokemons } from './types'
import {
  Box,
  Container,
  Pagination,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import PokemonTableRow from './PokemonTableRow'

interface PokemonTableProps {
  pokemons: Pokemons
  selectedPokemonId: number | undefined
  onSelect: (id: number) => void
}

const NUMBER_PER_PAGE = 5

const PokemonTable = ({ pokemons, selectedPokemonId, onSelect }: PokemonTableProps) => {
  console.count('RenderPokemonTable_')
  const [currentPage, setCurrentPage] = useState(1)

  const numberOfPages = useMemo(() => {
    return Math.ceil(pokemons.length / NUMBER_PER_PAGE)
  }, [pokemons])

  const currentList = useMemo(() => {
    return pokemons.slice((currentPage - 1) * NUMBER_PER_PAGE, currentPage * NUMBER_PER_PAGE)
  }, [pokemons, currentPage])

  return (
    <Stack spacing={2} alignContent={'center'}>
      <TableContainer component={Paper}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align={'left'}>Name</TableCell>
              <TableCell align='right'>Type</TableCell>
              <TableCell align='right'>action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentList.map((pokemon) => (
              <PokemonTableRow
                key={pokemon.id}
                type={pokemon.type.join(', ')}
                id={pokemon.id}
                name={pokemon.name.english}
                onSelect={onSelect}
                selected={pokemon.id === selectedPokemonId}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={numberOfPages}
        color='primary'
        onChange={(event, page) => {
          setCurrentPage(page)
        }}
      />
    </Stack>
  )
}

export default memo(PokemonTable)
