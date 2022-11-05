import React, { memo } from 'react'
import { Pokemon } from './types'
import { Card, CardContent } from '@mui/material'
import Typography from '@mui/material/Typography'

interface PokemonCardProps {
  name: string
  type: string
  hp: number
  attack: number
  defense: number
}
const PokemonCard = ({ name, type, hp, attack, defense }: PokemonCardProps) => {
  console.count('RenderPokemonCard')
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          {`Name: ${name}`}
        </Typography>
        <Typography variant='h5' component='div'>
          Type: {type}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          Attack {attack}
        </Typography>
        <Typography variant='body2'>HP: {hp}</Typography>
        <Typography variant='body2'>Defense: {defense}</Typography>
      </CardContent>
    </Card>
  )
}

export default memo(PokemonCard)
