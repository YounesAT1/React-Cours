import { useDispatch } from "react-redux";
import {
  decrementerNoteCommentaire,
  deleteIngredient,
  showDetailRopas,
} from "../redux/action";
import { Link } from "react-router-dom";

const ListRopas = ({ Ropas }) => {
  const dispatch = useDispatch();

  const handleDeleteIngredient = (ingredient, idRopa) => {
    dispatch(deleteIngredient(ingredient, idRopa));
  };

  const handleDecrementerNote = (
    commentaireAuteur,
    idRopas,
    decrementerPar
  ) => {
    dispatch(
      decrementerNoteCommentaire(commentaireAuteur, idRopas, decrementerPar)
    );
  };

  const handleShowRopaDetails = (ropaNom) => {
    dispatch(showDetailRopas(ropaNom));
    console.log(ropaNom);
  };

  return (
    <div>
      <h1 className="text-3xl mb-3">List ropas</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 py-2 px-4">Repas</th>
              <th className="border border-gray-300 py-2 px-4">Prix</th>
              <th className="border border-gray-300 py-2 px-4">Calories</th>
              <th className="border border-gray-300 py-2 px-4">Allergènes</th>
              <th className="border border-gray-300 py-2 px-4">
                Temps de préparation (minutes)
              </th>
              <th className="border border-gray-300 py-2 px-4">
                Type de cuisine
              </th>
              <th className="border border-gray-300 py-2 px-4">Commentaires</th>
              <th className="border border-gray-300 py-2 px-4">
                Liste des ingrédients
              </th>
              <th className="border border-gray-300 py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {Ropas.map((repas) => (
              <tr key={repas.id}>
                <td className="border border-gray-300 py-2 px-4">
                  {repas.nom}
                </td>
                <td className="border border-gray-300 py-2 px-4">
                  {repas.prix}
                </td>
                <td className="border border-gray-300 py-2 px-4">
                  {repas.details.calories}
                </td>
                <td className="border border-gray-300 py-2 px-4">
                  {repas.details.allergenes.join(", ")}
                </td>
                <td className="border border-gray-300 py-2 px-4">
                  {repas.details.tempsPreparation}
                </td>
                <td className="border border-gray-300 py-2 px-4">
                  {repas.details.typeCuisine}
                </td>
                <td className="border border-gray-300 py-2 px-4">
                  <ul>
                    {repas.commentaires.map((comm, index) => (
                      <li key={index}>
                        <p>Auteur: {comm.auteur}</p>
                        <p>Texte: {comm.texte}</p>
                        <p className={comm.note === 0 && "text-red-500"}>
                          Note: {comm.note}
                        </p>
                        <hr />

                        <button
                          className="bg-red-500 p-2 text-white"
                          onClick={() =>
                            handleDecrementerNote(comm.auteur, repas.id, 0.5)
                          }
                        >
                          Décrémenter note commentaire
                        </button>
                        <Link to={`/ropas/${repas.id}/ajouterCommentaire`}>
                          <button className="bg-green-500 p-2 text-white">
                            Adjouter commanetaire{" "}
                          </button>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="border border-gray-300 py-2 px-4">
                  <ul>
                    {repas.details.listeIngredients.map((ingredient, index) => (
                      <li key={index}>
                        {ingredient}
                        <button
                          className="bg-red-500 p-2 text-white"
                          onClick={() =>
                            handleDeleteIngredient(ingredient, repas.id)
                          }
                        >
                          Supprimer
                        </button>
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="border border-gray-300 py-2 px-4">
                  <Link to={`/${repas.id}/details`}>
                    <button
                      className="bg-blue-500 text-white"
                      onClick={() => handleShowRopaDetails(repas.nom)}
                    >
                      show Details
                    </button>
                  </Link>
                  <Link to={`/ropas/${repas.id}/listPromotion`}>
                    <button className="bg-purple-500 text-white">
                      list de promotion
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListRopas;
