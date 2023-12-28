import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ajouterIngredient } from "../redux/actions";

const AjouterIng = () => {
  const initialIngredientState = {
    nom: "",
    quantite: "",
  };

  const [ingredientData, setIngredientData] = useState(initialIngredientState);
  const [errMess, setErrMes] = useState("");
  const { idRecette } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAjouterIngredient = (e) => {
    e.preventDefault();

    if (ingredientData.nom === "" || ingredientData.quantite === "") {
      setErrMes("Tous les champs sont obligatoires");
    } else {
      dispatch(ajouterIngredient(idRecette, ingredientData));
      setIngredientData(initialIngredientState);
      navigate("/");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">
        Ajouter ingredient
      </h1>
      <form className="mb-4">
        <div className="mb-4">
          <label htmlFor="nomIngredient" className="block text-gray-800">
            Nom :
          </label>
          <input
            type="text"
            id="nomIngredient"
            value={ingredientData.nom}
            onChange={(e) =>
              setIngredientData({ ...ingredientData, nom: e.target.value })
            }
            className="border-2 border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="quantiteIngredient" className="block text-gray-800">
            Quantite :
          </label>
          <input
            type="text"
            id="quantiteIngredient"
            value={ingredientData.quantite}
            onChange={(e) =>
              setIngredientData({ ...ingredientData, quantite: e.target.value })
            }
            className="border-2 border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          onClick={handleAjouterIngredient}
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Ajouter Ingredient
        </button>
      </form>
      {errMess && <p className="text-red-500">{errMess}</p>}
    </div>
  );
};

export default AjouterIng;
