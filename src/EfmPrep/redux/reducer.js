import { AJOUTER_PAYS, MODIFIER_POPULATION } from "./actionTypes";

const initailState = {
  Pays: [
    {
      code: "1",
      Name: "Morocco",
      continent: "afrique",
      surface: 400000,
      image:
        "https://cdn.webshopapp.com/shops/94414/files/52406302/flag-of-morocco.jpg",
      indepYear: 1956,
      population: 40000000,
      ville: [
        {
          name: "casablanca",
          district: "province",
          pipulation: 7000000,
          capital: false,
        },
        {
          name: "rabat",
          district: "province",
          pipulation: 2000000,
          capital: true,
        },
      ],
    },
  ],
};

export const reducer = (state = initailState, action) => {
  switch (action.type) {
    case AJOUTER_PAYS:
      return {
        ...state,
        Pays: [...state.Pays, action.payload],
      };
    case MODIFIER_POPULATION:
      const updatedPopulation = state.Pays.map((pay) =>
        pay.code === action.payload.idPays
          ? { ...pay, population: action.payload.newPopilaton }
          : pay
      );
      return {
        ...state,
        Pays: updatedPopulation,
      };
    default:
      return state;
  }
};
