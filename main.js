const searchButton = document.getElementById('boton-busqueda');
      const searchInput = document.getElementById('buscar');
      const resultsContainer = document.getElementById('resultado');
      searchButton.addEventListener('click', async () => {
        const characterName = searchInput.value.trim().toLowerCase();
        const url = `https://rickandmortyapi.com/api/character/?name=${characterName}`;
        
        try {
          const response = await fetch(url);
          const data = await response.json();
          
          if (data.error) {
            throw new Error(data.error);
          }
          
          const results = data.results.map(character => {
            return `<div class="contenedor-api container">  
                      <img class="imagen-api" src="${character.image}"">
                      <h2>${character.name}</h2>
                      <p>Especie: ${character.species}</p>
                      <p>Género: ${character.gender}</p>
                      <p>Origen: ${character.origin.name}</p>
                      <p>Localización: ${character.location.name}</p>
                    </div>`;
          }).join('');

          resultsContainer.innerHTML = results;
        } catch (error) {
          resultsContainer.innerHTML = `<p>${error.message}</p>`;
        }
      });