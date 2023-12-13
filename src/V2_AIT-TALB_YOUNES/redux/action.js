import {
  AJOUTER_COMMENTAIRE,
  AJOUTER_ROPA,
  CHERCHER_INGREDIENT,
  CHERCHER_NOM,
  DECREMENTER_NOTE_COMMENTAIRE,
  DELETE_INGREDIENT,
  DETAIL_ROPAS,
  FILTRE_CUISINE,
} from "./actionTypes";

export const deleteIngredient = (ingredientName, ropaId) => {
  return {
    type: DELETE_INGREDIENT,
    payload: { ingredientName, ropaId },
  };
};

export const displayRopasOfIngredientChercher = (ingredientChercher) => {
  return {
    type: CHERCHER_INGREDIENT,
    payload: { ingredientChercher },
  };
};

export const decrementerNoteCommentaire = (
  commentaireAuteur,
  idRopas,
  decrementerPar
) => {
  return {
    type: DECREMENTER_NOTE_COMMENTAIRE,
    payload: { commentaireAuteur, idRopas, decrementerPar },
  };
};

export const showDetailRopas = (nomRopa) => {
  return {
    type: DETAIL_ROPAS,
    payload: nomRopa,
  };
};

export const ajouterRopa = (ropa) => {
  return {
    type: AJOUTER_ROPA,
    payload: ropa,
  };
};

export const ajouterCommentaire = (IdR, commentaire) => {
  return {
    type: AJOUTER_COMMENTAIRE,
    payload: { IdR, commentaire },
  };
};

export const filterAvceCuisine = (cuisine) => {
  return {
    type: FILTRE_CUISINE,
    payload: cuisine,
  };
};

export const chercherAvecNom = (nom) => {
  return {
    type: CHERCHER_NOM,
    payload: nom,
  };
};
