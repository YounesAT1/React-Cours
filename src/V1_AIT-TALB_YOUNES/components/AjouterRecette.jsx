import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ajouterRecette } from "../redux/actions";

const AjouterRecette = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialRecetteData = {
    _id: 0,
    nom: "",
    ingredients: [],
  };
  const [recette, setRecette] = useState(initialRecetteData);
  const [errMess, setErrMess] = useState("");

  const handleAjouterRecette = (e) => {
    e.preventDefault();
    if (recette.nom !== "") {
      dispatch(ajouterRecette({ ...recette, _id: Date.now() }));
      setErrMess("");
      setRecette(initialRecetteData);
      navigate("/");
    } else {
      setErrMess("Entrez le nom");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="my-5 text-3xl font-semibold">Ajouter Recette</h1>
      <form className="mb-4">
        <div className="mb-4">
          <label htmlFor="recetteNom" className="block text-gray-800">
            Nom
          </label>
          <input
            type="text"
            id="recetteNom"
            value={recette.nom}
            onChange={(e) => setRecette({ ...recette, nom: e.target.value })}
            className="border-2 border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          onClick={handleAjouterRecette}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          type="button"
        >
          Ajouter Recette
        </button>
      </form>
      {errMess && <p className="text-red-500">{errMess}</p>}
    </div>
  );
};

export default AjouterRecette;
