import { useState } from "react";

const Exam = () => {
  const butteurs = [
    {
      Id: 1,
      player: { player_Id: 19779, player_name: "Mohamed Salah" },
      team: "Real Madrid",
      goals: { home: 7, away: 7 },
    },
    {
      Id: 2,
      player: { player_Id: 4934, player_name: "Robert" },
      team: "Real Madrid",
      goals: { home: 7, away: 7 },
    },
  ];
  //? START QUESTION 1
  const [nombreDeBut, setNombreDeBut] = useState(0);
  const [nomPlayers, setNomPlayers] = useState([]);

  const butOfMohamedSalah = () => {
    const goalsBySalah = butteurs.filter(
      (but) => but.player.player_name === "Mohamed Salah"
    );

    const totalGoals = goalsBySalah.reduce(
      (total, but) => total + but.goals.home + but.goals.away,
      0
    );

    setNombreDeBut(totalGoals);
  };
  //? END QUESTION 1

  //? START QUESTION 2
  const nomDeJoueurAvecPlusDeTroisButExterieur = () => {
    console.log("Button clicked");
    const playersMoreGoalsAway = butteurs.filter(
      (player) => player.goals.away > 3
    );
    setNomPlayers(playersMoreGoalsAway);
    console.log(playersMoreGoalsAway);
  };

  //? END QUESTION 2

  //? START QUESTION 3

  //? END QUESTION 3

  return (
    <>
      <div className="container mx-auto p-5">
        <h1 className="text-semibold text-slate-800 text-3xl underline">
          Question 1
        </h1>
        <button
          onClick={butOfMohamedSalah}
          className="bg-green-300 text-green-700 p-2 rounded-md"
        >
          Afficher nombre but par Mohamed Salah
        </button>
        {nombreDeBut !== 0 && (
          <p className="text-slate-700 bg-slate-300 p-2 w-[200px] mt-3 rounded-md">
            Nom de goals est :{nombreDeBut}
          </p>
        )}
        <hr className="my-4" />
        <h1 className="text-semibold text-slate-800 text-3xl underline">
          Question 2
        </h1>
        <button
          onClick={nomDeJoueurAvecPlusDeTroisButExterieur}
          className="bg-green-300 text-green-700 p-2 rounded-md"
        >
          Nom des jouers avec plus de Trois but away
        </button>
        <ul>
          {nomPlayers.length !== 0 ? (
            nomPlayers.map((player, index) => (
              <li
                className="text-slate-700 bg-slate-300 p-2 w-[200px] mt-3 rounded-md"
                key={index}
              >
                {player.player.player_name}
              </li>
            ))
          ) : (
            <p className="text-slate-700 bg-slate-300 p-2 w-[200px] mt-3 rounded-md">
              Clicker sur le button
            </p>
          )}
        </ul>
      </div>
    </>
  );
};

export default Exam;
