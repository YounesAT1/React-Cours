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
    commentaires: [
      {
        auteur: "",
        texte: "",
        note: 0,
      },
    ],
    promotions: [
      {
        libelle: "",
        description: "",
        value: 0,
      },
    ],
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
        Commentaires
        {formData.commentaires.map((commentaire, index) => (
          <div key={index}>
            Auteur:
            <input
              type="text"
              value={formData.commentaires[index].auteur}
              onChange={(e) => {
                const updatedCommentaires = [...formData.commentaires];
                updatedCommentaires[index].auteur = e.target.value;
                setFormData({ ...formData, commentaires: updatedCommentaires });
              }}
            />
            Texte:
            <input
              type="text"
              value={formData.commentaires[index].texte}
              onChange={(e) => {
                const updatedCommentaires = [...formData.commentaires];
                updatedCommentaires[index].texte = e.target.value;
                setFormData({ ...formData, commentaires: updatedCommentaires });
              }}
            />
            Note:
            <input
              type="number"
              value={formData.commentaires[index].note}
              onChange={(e) => {
                const updatedCommentaires = [...formData.commentaires];
                updatedCommentaires[index].note = e.target.value;
                setFormData({ ...formData, commentaires: updatedCommentaires });
              }}
            />
          </div>
        ))}
        Promotions
        {formData.promotions.map((promotion, index) => (
          <div key={index}>
            Libellé:
            <input
              type="text"
              value={formData.promotions[index].libelle}
              onChange={(e) => {
                const updatedPromotions = [...formData.promotions];
                updatedPromotions[index].libelle = e.target.value;
                setFormData({ ...formData, promotions: updatedPromotions });
              }}
            />
            Description:
            <input
              type="text"
              value={formData.promotions[index].description}
              onChange={(e) => {
                const updatedPromotions = [...formData.promotions];
                updatedPromotions[index].description = e.target.value;
                setFormData({ ...formData, promotions: updatedPromotions });
              }}
            />
            Value:
            <input
              type="number"
              value={formData.promotions[index].value}
              onChange={(e) => {
                const updatedPromotions = [...formData.promotions];
                updatedPromotions[index].value = e.target.value;
                setFormData({ ...formData, promotions: updatedPromotions });
              }}
            />
          </div>
        ))}
        <button type="submit" className="bg-blue-400 p-4 text-white">
          Add
        </button>
      </form>
    </div>
  );
};

export default AjouterRopa;
