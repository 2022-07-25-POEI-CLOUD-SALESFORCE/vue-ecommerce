import { BASE_URL } from "../constantes.js";

const urlParams = new URLSearchParams(location.search);
const id = urlParams.get("id");

const $title = document.querySelector("#title");
const $description = document.querySelector("#description");

fetch(`${BASE_URL}/categories/${id}`)
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
