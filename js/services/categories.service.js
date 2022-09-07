import { BASE_URL } from "../constantes.js";

export class CategorieService {
  constructor() {
    this.url = `${BASE_URL}/categories`;
  }

  fetchCategories() {
    return fetch(this.url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      });
  }

  fetchCategorieById(id) {}
}
