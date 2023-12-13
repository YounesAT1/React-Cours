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

export const initiaState = {
  listeRepas: [
    {
      id: 1,
      nom: "Repas 1",
      prix: 15.99,
      details: {
        listeIngredients: ["Ingrédient 1", "Ingrédient 2", "Ingrédient 3"],
        calories: 500,
        allergenes: ["Noix", "Gluten"],
        tempsPreparation: 30,
        typeCuisine: "Italienne",
      },
      commentaires: [
        {
          auteur: "John Doe",
          texte: "Très délicieux !",
          note: 4.5,
        },
      ],
      promotions: [
        {
          libelle: "Réduction de 10%",
          description: "Valable jusqu'au 31 décembre.",
          value: -30,
        },
      ],
    },
  ],
  filteredListeRepas: [],
  filteredListeRepasAvecCuisine: [],
  filteredListeRepasAvecNom: [],
  ropa: {},
};

export const reducer = (state = initiaState, action) => {
  switch (action.type) {
    case DELETE_INGREDIENT:
      const { ropaId, ingredientName } = action.payload;
      return {
        ...state,
        listeRepas: state.listeRepas.map((ropa) => {
          if (ropa.id === ropaId) {
            return {
              ...ropa,
              details: {
                ...ropa.details,
                listeIngredients: ropa.details.listeIngredients.filter(
                  (ing) => ing !== ingredientName
                ),
              },
            };
          }
          return ropa;
        }),
      };

    case CHERCHER_INGREDIENT:
      const { ingredientChercher } = action.payload;
      const filteredListeRepas = state.listeRepas.filter((ropa) =>
        ropa.details.listeIngredients.includes(ingredientChercher)
      );

      return {
        ...state,
        filteredListeRepas: filteredListeRepas,
      };

    case DECREMENTER_NOTE_COMMENTAIRE:
      const { commentaireAuteur, idRopas, decrementerPar } = action.payload;
      const foundRopa = state.listeRepas.find((ropa) => ropa.id === idRopas);
      if (foundRopa) {
        const foundCommentaire = foundRopa.commentaires.find(
          (comm) => comm.auteur === commentaireAuteur
        );
        if (foundCommentaire) {
          foundCommentaire.note =
            foundCommentaire.note > decrementerPar
              ? foundCommentaire.note - decrementerPar
              : 0;
        }
      }
      return {
        ...state,
        listeRepas: [...state.listeRepas],
      };

    case DETAIL_ROPAS:
      const nomRopa = action.payload;
      const selectedRopa = state.listeRepas.find((ro) => ro.nom === nomRopa);
      console.log(selectedRopa);
      return {
        ...state,
        ropa: selectedRopa,
      };

    case AJOUTER_ROPA:
      const newRopa = action.payload;
      return {
        ...state,
        listeRepas: [...state.listeRepas, newRopa],
      };

    case AJOUTER_COMMENTAIRE:
      console.log("payload " + action.payload.IdR);
      const updatedListeRepas = state.listeRepas.map((ro) => {
        if (ro.id === parseInt(action.payload.IdR)) {
          console.log(" found");
          return {
            ...ro,
            commentaires: [...ro.commentaires, action.payload.commentaire],
          };
        }
        return ro;
      });

      return {
        ...state,
        listeRepas: updatedListeRepas,
      };

    case FILTRE_CUISINE:
      const filteredListeRepasAvecCuisine = state.listeRepas.filter(
        (ropa) => ropa.details.typeCuisine === action.payload
      );

      return {
        ...state,
        filteredListeRepasAvecCuisine: filteredListeRepasAvecCuisine,
      };

    case CHERCHER_NOM:
      const filteredListeRepasAvecNom = state.listeRepas.filter(
        (ropa) => ropa.nom === action.payload
      );

      return {
        ...state,
        filteredListeRepasAvecNom: filteredListeRepasAvecNom,
      };

    default:
      return state;
  }
};
