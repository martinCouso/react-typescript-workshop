import React, { memo } from 'react'
import { Fab, TableCell, TableRow } from '@mui/material'
import { Check } from '@mui/icons-material'

interface PokemonTableRowProps {
  name: string
  type: string
  selected: boolean
  id: number
  onSelect: (id: number) => void
}
const PokemonTableRow = ({ name, type, selected, id, onSelect }: PokemonTableRowProps) => {
  console.count('RenderPokemonTableRow')
  return (
    <TableRow key={id}>
      <TableCell scope='row' align={'left'}>
        {name}
      </TableCell>
      <TableCell align='right'>{type}</TableCell>
      <TableCell align='right'>
        <Fab aria-label='Check' onClick={() => onSelect(id)}>
          <Check color={selected ? 'primary' : 'disabled'} />
        </Fab>
      </TableCell>
    </TableRow>
  )
}

export default memo(PokemonTableRow)
