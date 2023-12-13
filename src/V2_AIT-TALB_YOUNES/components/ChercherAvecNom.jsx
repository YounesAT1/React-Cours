import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { chercherAvecNom } from "../redux/action";

const FilterAvecCuisine = ({ results }) => {
  const dispatch = useDispatch();
  const [nom, setINom] = useState("");

  const handleChercherAvecNom = () => {
    dispatch(chercherAvecNom(nom));
    setINom("");
  };
  return (
    <div className="m-4">
      <h1 className="text-3xl mb-3">Ropas avec Nom recherché</h1>
      <div className="flex items-center">
        <input
          type="text"
          name="nom"
          value={nom}
          onChange={(e) => setINom(e.target.value)}
          className="border border-gray-300 rounded-l py-2 px-4 focus:outline-none focus:border-blue-500"
          placeholder="Rechercher une cuisine"
        />
        <button
          className="bg-blue-500 text-white rounded-r py-2 px-4 ml-2 hover:bg-blue-600 focus:outline-none"
          onClick={handleChercherAvecNom}
        >
          Chercher ropas
        </button>
      </div>

      <div className="mt-4">
        {results.map((fl, index) => (
          <div key={index} className="border p-4 my-2">
            <p>{fl.nom}</p>
            <p>{fl.id}</p>
            <p>{fl.prix}</p>
          </div>
        ))}

        {results.length === 0 && (
          <p className="text-red-600 text-xl">Aucun Ropas disponible</p>
        )}
      </div>
    </div>
  );
};

export default FilterAvecCuisine;
