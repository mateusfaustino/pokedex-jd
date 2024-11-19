let $pokedex = document.getElementById('pokedex')

console.log($pokedex)

$pokedex.innerHTML=``


for(let i= 0; i<=151;i++){
    if(i!=0 && pokemons[i].number == pokemons[i-1].number){
        continue
    }
    // console.log(pokemons[i].name)
    let p = pokemons[i]
    let nomePokemon = p.name
    let numberPokemon = p.number
    let thumb = p.ThumbnailImage

    let tipos = p.type
    let tiposHtml = ""
    
    for(let t of tipos){
        tiposHtml+=`
            <li class="tipo-item ${t}">${t}</li>
        ` 
    }
    console.log(tiposHtml)

    $pokedex.innerHTML+=`
        <li class="pokemon-item"> 
            
            <div class="item-image">
                <img src="${thumb}" alt="${nomePokemon}" >
            </div>
            <div class="item-footer">
                <h3>${nomePokemon} </h3>
                <h4>${numberPokemon}</h4>
            </div>
            <ul class="tipos">
                ${tiposHtml}
            </ul>
            
        </li>
    `
}