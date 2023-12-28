import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const AficherIng = () => {
  const listRecette = useSelector((state) => state.recette);
  const { idRecette } = useParams();

  const currentRecette = listRecette.find(
    (rec) => rec._id === parseInt(idRecette)
  );
  const listIngredient = currentRecette.ingredients;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-green-600 mb-6">
        Les ingredients de la recette avec l'ID : {idRecette}
      </h1>
      {listIngredient.length !== 0 ? (
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="text-left font-semibold text-gray-800 py-2">
                Nom
              </th>
              <th className="text-left font-semibold text-gray-800 py-2">
                Quantité
              </th>
            </tr>
          </thead>
          <tbody>
            {listIngredient.map((ing, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                <td className="border border-gray-300 px-4 py-2">{ing.nom}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {ing.quantite}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-xl text-gray-800">Aucun ingredient</p>
      )}
    </div>
  );
};

export default AficherIng;
