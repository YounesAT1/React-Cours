import React from "react";
import { useSelector } from "react-redux";

const DetailRopas = () => {
  const ropa = useSelector((state) => state.ropa);
  console.log(ropa);
  return (
    <div className="m-4">
      <h1 className="text-3xl mb-2">
        {ropa.nom} - {ropa.id}
      </h1>
      <ul className="list-disc pl-5">
        <li>Prix: {ropa.prix}</li>
        <li>
          Ingrédients:
          <ul className="list-disc pl-5">
            {ropa.details.listeIngredients.map((ingr, index) => (
              <li key={index}>{ingr}</li>
            ))}
          </ul>
        </li>
        <li>Calories: {ropa.details.calories}</li>
        <li>
          Allergènes:
          <ul className="list-disc pl-5">
            {ropa.details.allergenes.map((alg, index) => (
              <li key={index}>{alg}</li>
            ))}
          </ul>
        </li>
        <li>Temps de préparation: {ropa.details.tempsPreparation} minutes</li>
        <li>Type de cuisine: {ropa.details.typeCuisine}</li>
        {ropa.commentaires && (
          <li>
            Commentaires:
            <ul className="list-disc pl-5">
              {ropa.commentaires.map((comment, index) => (
                <li key={index}>
                  <p>Auteur: {comment.auteur}</p>
                  <p>Texte: {comment.texte}</p>
                  <p>Note: {comment.note}</p>
                </li>
              ))}
            </ul>
          </li>
        )}
        {ropa.promotions && (
          <li>
            Promotions:
            <ul className="list-disc pl-5">
              {ropa.promotions.map((promo, index) => (
                <li key={index}>
                  <p>Libellé: {promo.libelle}</p>
                  <p>Description: {promo.description}</p>
                  <p>Valeur: {promo.value}</p>
                </li>
              ))}
            </ul>
          </li>
        )}
      </ul>
    </div>
  );
};

export default DetailRopas;
