const toggleFavorites = (id: number)=> {
    let favorites : number[]= JSON.parse(localStorage.getItem('favorites') || '[]')
    if(favorites.includes(id)){
        favorites = favorites.filter(pokeId => pokeId !== id)
    } else {
        favorites.push(id)
    }
    localStorage.setItem('favorites', JSON.stringify(favorites))
    console.log(favorites)

} 

const isInFavorites = (id:number) : boolean=> {
    if(typeof window === 'undefined') return false;
    
    const favorites : number[]= JSON.parse(localStorage.getItem('favorites') || '[]')
    return favorites.includes(id)
}

const pokemons = ():number[]=> {
    if(typeof window === 'undefined') return [];
    return JSON.parse(localStorage.getItem('favorites') || '[]')
}

const localFavorites = {
    toggleFavorites,
    isInFavorites,
    pokemons
}
export default localFavorites

