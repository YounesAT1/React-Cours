import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { modifierIngredient } from "../redux/actions";

const ModifierIng = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { idRecette, ingNom } = useParams();

  const initialIngredientState = { nom: "", quantite: "" };
  const [ingredientData, setIngredientData] = useState(initialIngredientState);

  const ingredients = useSelector(
    (state) =>
      state.recette.find((rec) => rec._id === parseInt(idRecette)).ingredients
  );

  const currentIngredient = ingredients.find((ing) => ing.nom === ingNom);

  useEffect(() => {
    if (currentIngredient) {
      setIngredientData({
        nom: currentIngredient.nom,
        quantite: currentIngredient.quantite,
      });
    }
  }, [currentIngredient]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setIngredientData({
      ...ingredientData,
      [name]: value,
    });
  };

  const handleModifierIngredient = () => {
    const newIngredient = {
      nom: ingredientData.nom,
      quantite: ingredientData.quantite,
    };

    dispatch(modifierIngredient(idRecette, ingNom, newIngredient));
    navigate("/");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">Modifier ingrédient</h1>
      <form autoComplete="off" className="mb-4">
        <div className="mb-4">
          <label htmlFor="nomIngredient" className="block text-gray-800">
            Nom :
          </label>
          <input
            type="text"
            name="nom"
            value={ingredientData.nom}
            onChange={handleInputChange}
            className="border-2 border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="quantiteIngredient" className="block text-gray-800">
            Quantité :
          </label>
          <input
            type="text"
            name="quantite"
            value={ingredientData.quantite}
            onChange={handleInputChange}
            className="border-2 border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          onClick={handleModifierIngredient}
        >
          Modifier Ingrédient
        </button>
      </form>
    </div>
  );
};

export default ModifierIng;
