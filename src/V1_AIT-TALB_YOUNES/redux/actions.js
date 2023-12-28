import {
  AJOUTER_INGREDIENT,
  AJOUTER_RECETTE,
  MODIFIER_INGREDIENT,
  MODIFIER_RECETTE,
  SUPPRIMER_INGREDINET,
  SUPPRIMER_ROCETTE,
} from "./actionTypes";

export const ajouterIngredient = (idRecette, ingredient) => {
  return {
    type: AJOUTER_INGREDIENT,
    payload: { idRecette, ingredient },
  };
};

export const supprimerIngredient = (idRecette, nomIngredient) => {
  return {
    type: SUPPRIMER_INGREDINET,
    payload: { idRecette, nomIngredient },
  };
};

export const modifierIngredient = (idRecette, nomIngredint, newIngredient) => {
  return {
    type: MODIFIER_INGREDIENT,
    payload: { idRecette, nomIngredint, newIngredient },
  };
};

export const ajouterRecette = (recette) => {
  return {
    type: AJOUTER_RECETTE,
    payload: recette,
  };
};

export const supprimerRecette = (nomReccet) => {
  return {
    type: SUPPRIMER_ROCETTE,
    payload: nomReccet,
  };
};

export const modifierRecette = (idRecette, newRecette) => {
  return {
    type: MODIFIER_RECETTE,
    payload: { idRecette, newRecette },
  };
};
