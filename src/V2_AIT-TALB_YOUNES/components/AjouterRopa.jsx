import { useState } from "react";
import { useDispatch } from "react-redux";
import { ajouterRopa } from "../redux/action";
import { useNavigate } from "react-router-dom";

const AjouterRopa = () => {
  const initialState = {
    id: 0,
    nom: "",
    prix: 0,
    details: {
      listeIngredients: [],
      calories: 0,
      allergenes: [],
      tempsPreparation: 0,
      typeCuisine: "",
    },
    commentaires: [],
    promotions: [],
  };

  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(ajouterRopa({ ...formData, id: Date.now() }));
    setFormData(initialState);
    navigate("/ropas");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        nom:{" "}
        <input
          type="text"
          value={formData.nom}
          onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
        />
        prix:{" "}
        <input
          type="text"
          value={formData.prix}
          onChange={(e) => setFormData({ ...formData, prix: e.target.value })}
        />
        <h1>details</h1>
        calories:
        <input
          type="number"
          value={formData.details.calories}
          onChange={(e) =>
            setFormData({
              ...formData,
              details: { ...formData.details, calories: e.target.value },
            })
          }
        />
        typeCuisine:
        <input
          type="text"
          value={formData.details.typeCuisine}
          onChange={(e) =>
            setFormData({
              ...formData,
              details: { ...formData.details, typeCuisine: e.target.value },
            })
          }
        />
        listeIngredients:
        <input
          type="text"
          value={formData.details.listeIngredients.join(",")}
          onChange={(e) => {
            const ingredientsArray = e.target.value.split(",");
            setFormData({
              ...formData,
              details: {
                ...formData.details,
                listeIngredients: ingredientsArray,
              },
            });
          }}
        />
        allergenes:
        <input
          type="text"
          value={formData.details.allergenes.join(",")}
          onChange={(e) => {
            const allergenesArray = e.target.value.split(",");
            setFormData({
              ...formData,
              details: {
                ...formData.details,
                allergenes: allergenesArray,
              },
            });
          }}
        />
        <button type="submit" className="bg-blue-400 p-4 text-white">
          Add
        </button>
      </form>
    </div>
  );
};

export default AjouterRopa;
