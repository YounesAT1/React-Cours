import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ListRecette = () => {
  const listRecette = useSelector((state) => state.recette);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-red-600 mb-6">ListRecette</h1>
      <Link to={`/recette/supprimer`}>
        <button className="bg-red-500 text-white py-2 px-4 mr-4 rounded-md">
          Supprimer Recette
        </button>
      </Link>
      <hr className="my-6" />
      <p className="text-2xl text-red-600 mb-4">Recette</p>
      {listRecette.map((rec, index) => (
        <ul key={index} className="mb-8">
          <li className="text-gray-700 font-semibold mb-2">ID : {rec._id}</li>
          <li className="text-gray-700 font-semibold mb-4">NOM : {rec.nom}</li>
          <Link to={`/recette/${rec._id}/modifier`}>
            <button className="bg-purple-500 text-white py-2 px-4 rounded-md mr-4">
              Modifier
            </button>
          </Link>
          <p className="text-2xl text-red-600 mb-4">Ingredients</p>
          {rec.ingredients.map((ing, index) => (
            <div key={index} className="flex items-center mb-4">
              <p className="text-gray-700 font-semibold mr-4">
                NOM : {ing.nom}
              </p>
              <p className="text-gray-700 font-semibold mr-4">
                QUANTITE : {ing.quantite}
              </p>
              <Link to={`/recette/${rec._id}/ingredients/${ing.nom}/modifer`}>
                <button className="bg-orange-500 text-white py-2 px-4 rounded-md mr-4">
                  Modifier ingredient
                </button>
              </Link>
            </div>
          ))}
          <Link to={`/AjouterIngredient/${rec._id}`}>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md mr-4">
              Ajouter Ingredient
            </button>
          </Link>
          <Link to={`/recette/${rec._id}/listIngredient`}>
            <button className="bg-green-500 text-white py-2 px-4 rounded-md mr-4">
              Afficher tous les ingredients
            </button>
          </Link>
          <Link to={`/recette/${rec._id}/listIngredient/supprimer`}>
            <button className="bg-red-500 text-white py-2 px-4 rounded-md mr-4">
              Supprimer ingredient
            </button>
          </Link>
          <hr className="my-6" />
        </ul>
      ))}
    </div>
  );
};

export default ListRecette;
