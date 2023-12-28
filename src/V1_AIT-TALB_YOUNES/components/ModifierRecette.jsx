import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { modifierRecette } from "../redux/actions";

const ModifierRecette = () => {
  const { idRecette } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentRecette = useSelector((state) =>
    state.recette.find((res) => res._id === parseInt(idRecette))
  );

  const initialRecetteData = {
    _id: 0,
    nom: "",
    ingredients: [],
  };
  const [recette, setRecette] = useState(initialRecetteData);

  useEffect(() => {
    if (currentRecette) {
      setRecette({
        _id: currentRecette._id,
        nom: currentRecette.nom,
        ingredients: currentRecette.ingredients,
      });
    }
  }, [currentRecette]);

  const handleModifierRecette = () => {
    const newRecette = { ...recette };
    dispatch(modifierRecette(idRecette, newRecette));
    navigate("/");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="my-5 text-3xl font-semibold">Modifier Recette</h1>
      <form className="mb-4">
        <div className="mb-4">
          <label htmlFor="recetteNom" className="block text-gray-800">
            Nom
          </label>
          <input
            type="text"
            value={recette.nom}
            onChange={(e) => setRecette({ ...recette, nom: e.target.value })}
            className="border-2 border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          onClick={handleModifierRecette}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          type="button"
        >
          Modifier Recette
        </button>
      </form>
    </div>
  );
};

export default ModifierRecette;
