import {
  AJOUTER_INGREDIENT,
  AJOUTER_RECETTE,
  MODIFIER_INGREDIENT,
  MODIFIER_RECETTE,
  SUPPRIMER_INGREDINET,
  SUPPRIMER_ROCETTE,
} from "./actionTypes";

const initialState = {
  recette: [
    {
      _id: 1,
      nom: "Lasagnes Maison",
      ingredients: [
        { nom: "Pate de lasagne", quantite: "250g" },
        { nom: "Viand de hachee", quantite: "500g" },
      ],
    },
  ],
};

export const recetteReducer = (state = initialState, action) => {
  switch (action.type) {
    case AJOUTER_INGREDIENT:
      const updatedRecetteList = state.recette.map((recette) => {
        if (recette._id === parseInt(action.payload.idRecette)) {
          return {
            ...recette,
            ingredients: [...recette.ingredients, action.payload.ingredient],
          };
        }
        return recette;
      });

      return {
        ...state,
        recette: updatedRecetteList,
      };

    case SUPPRIMER_INGREDINET:
      return {
        ...state,
        recette: state.recette.map((rec) => {
          if (rec._id === parseInt(action.payload.idRecette)) {
            return {
              ...rec,
              ingredients: rec.ingredients.filter(
                (ing) => ing.nom !== action.payload.nomIngredient
              ),
            };
          }
          return rec;
        }),
      };

    case MODIFIER_INGREDIENT:
      return {
        ...state,
        recette: state.recette.map((rec) => {
          if (rec._id === parseInt(action.payload.idRecette)) {
            return {
              ...rec,
              ingredients: rec.ingredients.map((ing) =>
                ing.nom === action.payload.nomIngredint
                  ? action.payload.newIngredient
                  : ing
              ),
            };
          }
          return rec;
        }),
      };

    case AJOUTER_RECETTE:
      return {
        ...state,
        recette: [...state.recette, action.payload],
      };

    case SUPPRIMER_ROCETTE:
      return {
        ...state,
        recette: state.recette.filter((rec) => rec.nom !== action.payload),
      };

    case MODIFIER_RECETTE:
      return {
        ...state,
        recette: state.recette.map((res) =>
          res._id === parseInt(action.payload.idRecette)
            ? action.payload.newRecette
            : res
        ),
      };

    default:
      return state;
  }
};
