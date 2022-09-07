import { BASE_URL } from "../constantes.js";
import { CategorieService } from "../services/categories.service.js";
import { getParam } from "../utils/get-param.js";

class DetailsCategorie {
  constructor() {
    this.categorie = null;
    this.categoriesService = new CategorieService();
    this.$title = document.querySelector("#title");
    this.$description = document.querySelector("#description");
    this.id = getParam("id");
  }

  async render() {
    try {
      this.categorie = await this.categoriesService.fetchCategorieById(this.id);
      this.$title.innerText = `${this.categorie.nom}`;
      this.$description.innerText = `${this.categorie.description}`;
    } catch (error) {
      this.$title.innerText = "La catégorie recherchée n'existe pas";
    }
  }
}

const detailsCategoriePage = new DetailsCategorie();
detailsCategoriePage.render();
