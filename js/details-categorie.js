const id = prompt("Entrez un id : ");

// A partir de l'ID aller récupérer la catégorie appropriée
// Si la catégorie n'existe, afficher dans la page "La catégorie recherchée n'existe pas"
// Le mnessage doit avoir la couleur rouge
// Si elle, l'afficher dans le HTML.
//Vous avez la liberté d'organiser la page comme bon vous semble
const $title = document.querySelector("#title");
const $description = document.querySelector("#description");

fetch(`http://localhost:3000/api/categories/${id}`)
  .then((response) => {
    console.log(response);
    if (!response.ok) {
      const errorResponse = {
        status: response.status,
        statusText: response.statusText,
      };
      throw errorResponse;
    }
    return response.json();
  })
  .then((data) => {
    $title.innerText = `${data.nom}`;
    $description.innerText = `${data.description}`;
  })
  .catch((error) => {
    console.log(error);
    if (error.status === 404) {
      $title.innerText = "La catégorie recherchée n'existe pas";
      $title.classList.add("error");
    }
  });
