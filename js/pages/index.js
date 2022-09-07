import { CategorieRow } from "../components/categorie-row.js";
import { CategorieService } from "../services/categories.service.js";

// const $categories = document.querySelector("#categories");

// fetch(`${BASE_URL}/categories`)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (categories) {
//     categories.forEach(function (categorie) {
//       const $categorieRow = CategorieRow(categorie);
//       $categories.appendChild($categorieRow);
//     });
//   });

class CategoriesPage {
  constructor() {
    this.categories = [];
    this.categorieService = new CategorieService();
    this.$categories = document.querySelector("#categories");
  }

  async render() {
    this.categories = await this.categorieService.fetchCategories();
    for (let categorie of this.categories) {
      const $categorieRow = CategorieRow(categorie);
      this.$categories.appendChild($categorieRow);
    }
  }
}

const categoriesPages = new CategoriesPage();
categoriesPages.render();
