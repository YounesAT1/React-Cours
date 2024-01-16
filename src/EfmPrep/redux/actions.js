import {
  AJOUTER_PAYS,
  AJOUTER_VILLE,
  MODIFIER_POPULATION,
  MODIFIER_VILLE,
} from "./actionTypes";

export const ajouterPays = (pay) => {
  return {
    type: AJOUTER_PAYS,
    payload: pay,
  };
};

export const modifierPopulation = (idPays, newPopilaton) => {
  return {
    type: MODIFIER_POPULATION,
    payload: { idPays, newPopilaton },
  };
};

export const ajouterVille = (idPays, ville) => {
  return {
    type: AJOUTER_VILLE,
    payload: { idPays, ville },
  };
};

export const modiferVille = (idPays, idVille, newVille) => {
  return {
    type: MODIFIER_VILLE,
    payload: { idPays, idVille, newVille },
  };
};
