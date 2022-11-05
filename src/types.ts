
export type Pokemon = {
    "id": number,
    "name": {
        "english": string,
        "japanese": string,
        "chinese": string,
        "french": string
    },
    "type": Array<string>,
    "base": {
        "hp": number,
        "attack": number,
        "defense": number,
        "Sp. Attack": number,
        "Sp. Defense": number,
        "Speed": number
    }
}
export type Pokemons = Array<Pokemon>;
