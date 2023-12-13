import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterAvceCuisine } from "../redux/action";

const FilterAvecCuisine = ({ filters }) => {
  const dispatch = useDispatch();
  const [cuisine, setICuisine] = useState("");

  const handlefilterAvceCuisine = () => {
    dispatch(filterAvceCuisine(cuisine));
    setICuisine("");
  };
  return (
    <div className="m-4">
      <h1 className="text-3xl mb-3">Ropas avec cuisine recherché</h1>
      <div className="flex items-center">
        <input
          type="text"
          name="cuisine"
          value={cuisine}
          onChange={(e) => setICuisine(e.target.value)}
          className="border border-gray-300 rounded-l py-2 px-4 focus:outline-none focus:border-blue-500"
          placeholder="Rechercher une cuisine"
        />
        <button
          className="bg-blue-500 text-white rounded-r py-2 px-4 ml-2 hover:bg-blue-600 focus:outline-none"
          onClick={handlefilterAvceCuisine}
        >
          Chercher ropas
        </button>
      </div>

      <div className="mt-4">
        {filters.map((fl, index) => (
          <div key={index} className="border p-4 my-2">
            <p>{fl.nom}</p>
            <p>{fl.id}</p>
            <p>{fl.prix}</p>
          </div>
        ))}

        {filters.length === 0 && (
          <p className="text-red-600 text-xl">Aucun Ropas disponible</p>
        )}
      </div>
    </div>
  );
};

export default FilterAvecCuisine;
