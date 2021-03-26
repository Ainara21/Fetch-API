window.onload = function () {
    fetch("https://swapi.dev/api/species/9/")
        .then((res) => res.json())
        .then((res) => {
            console.log(res.name);
            let caja = document.getElementById("elephant");

            let item = `
            <div class="container"> 
            <div class="name">
            
            ${res.name}

            </div>
            <div class="life-span">
            Average lifespan:
            ${res.average_lifespan}
    
            </div>
            <div class="classification">
            Classification:
            ${res.classification}
    
            </div>
            <div class="height">
            Average height:
            ${res.average_height}
                
            </div>
            <div class="eye-color">
            Eye color:
            ${res.eye_colors}
    
            </div>
            <div class="language">
            Language:
            ${res.language}
                
            </div>
            </div>

            `;
            caja.innerHTML += item;
        });
};
