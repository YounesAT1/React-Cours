import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { supprimerIngredient } from "../redux/actions";

const SupprimerIng = () => {
  const [ingredient, setIngredient] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const listRecette = useSelector((state) => state.recette);
  const { idRecette } = useParams();
  const currentRecette = listRecette.find(
    (rec) => rec._id === parseInt(idRecette)
  );
  const listIngredient = currentRecette.ingredients;

  const handleSupprimerIngredient = (e) => {
    e.preventDefault();

    dispatch(supprimerIngredient(idRecette, ingredient));
    navigate("/");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">
        Choisissez un ingreient pour supprimer
      </h1>
      <select
        name="ingPourSup"
        id="ingPourSup"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
        className="border-2 border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-blue-500"
      >
        <option value="" disabled>
          Nom de ingredient
        </option>
        {listIngredient.map((ing, index) => (
          <option key={index} value={ing.nom}>
            {ing.nom}
          </option>
        ))}
      </select>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none mx-3"
        onClick={handleSupprimerIngredient}
      >
        Supprimer
      </button>
    </div>
  );
};

export default SupprimerIng;
