import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { supprimerRecette } from "../redux/actions";

function SupprimerRecette() {
  const [recetteNom, setRecetteNom] = useState("");
  const listRecette = useSelector((state) => state.recette);
  const recetteToSupprimer = listRecette.find((rec) => rec.nom === recetteNom);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSupprimerRecette = (e) => {
    e.preventDefault();
    if (recetteToSupprimer) {
      dispatch(supprimerRecette(recetteToSupprimer.nom));
      navigate("/");
    } else {
      console.error("La recette n'existe pas");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">
        Choisissez une recette à supprimer
      </h1>
      <select
        name="recetteNom"
        id="recetteNom"
        value={recetteNom}
        onChange={(e) => setRecetteNom(e.target.value)}
        className="border-2 border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-blue-500"
      >
        <option value="" disabled>
          Choisissez une recette
        </option>
        {listRecette.map((rec, index) => (
          <option key={index} value={rec.nom}>
            {rec.nom}
          </option>
        ))}
      </select>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none mx-3"
        onClick={handleSupprimerRecette}
      >
        Supprimer
      </button>
    </div>
  );
}

export default SupprimerRecette;
