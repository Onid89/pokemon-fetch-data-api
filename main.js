// fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
//   .then(response => {
//     if(!response.ok){
//         throw new Error("I can`t fetch the resource");
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data.id))
//   .catch((error) => console.error(error));
async function fetchData() {
  const pokemonName = document
    .getElementById('pokemonName')
    .value.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("I can't fetch resource");
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById('pokemonSprite');

    imgElement.src = pokemonSprite;
    imgElement.style.display = 'block';
  } catch (error) {
    console.error(error);
  }
}
