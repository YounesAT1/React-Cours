import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { displayRopasOfIngredientChercher } from "../redux/action";

const RopaAvecIngredientChercher = ({ filteredListeRepas }) => {
  const dispatch = useDispatch();
  const [ingredientChercher, setIngredientChercher] = useState("");

  const handleShowRopasWithIngredient = () => {
    dispatch(displayRopasOfIngredientChercher(ingredientChercher));
    setIngredientChercher("");
  };

  return (
    <div className="m-4">
      <h1 className="text-3xl mb-3">Ropas avec l'ingrédient recherché</h1>
      <div className="flex items-center">
        <input
          type="text"
          name="ingredientChercher"
          value={ingredientChercher}
          onChange={(e) => setIngredientChercher(e.target.value)}
          className="border border-gray-300 rounded-l py-2 px-4 focus:outline-none focus:border-blue-500"
          placeholder="Rechercher un ingrédient"
        />
        <button
          className="bg-blue-500 text-white rounded-r py-2 px-4 ml-2 hover:bg-blue-600 focus:outline-none"
          onClick={handleShowRopasWithIngredient}
        >
          Chercher ropas
        </button>
      </div>

      <div className="mt-4">
        {filteredListeRepas.map((ropa, index) => (
          <div key={index} className="border p-4 my-2">
            <p>ID: {ropa.id}</p>
            <p>Nom: {ropa.nom}</p>
            <p>Prix: {ropa.prix}</p>
          </div>
        ))}

        {filteredListeRepas.length === 0 && (
          <p className="text-red-600 text-xl">Aucun Ropas disponible</p>
        )}
      </div>
    </div>
  );
};

export default RopaAvecIngredientChercher;
