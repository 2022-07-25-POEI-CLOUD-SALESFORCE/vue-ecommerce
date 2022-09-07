export function CategorieRow(categorie) {
  const $ligne = document.createElement("tr");
  const $colonneId = document.createElement("td");
  $colonneId.innerText = categorie.id;

  const $colonneDesignation = document.createElement("td");
  $colonneDesignation.innerText = categorie.nom;

  const $colonneDescription = document.createElement("td");
  $colonneDescription.innerText = categorie.description;

  const $colonneActions = document.createElement("td");
  const $lienDetails = document.createElement("a");
  $lienDetails.href = `/pages/details-categorie.html?id=${categorie.id}`;
  $lienDetails.innerText = "Voir";
  $colonneActions.appendChild($lienDetails);

  $ligne.append(
    $colonneId,
    $colonneDesignation,
    $colonneDescription,
    $colonneActions
  );
  return $ligne;
}
