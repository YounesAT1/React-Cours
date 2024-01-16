import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ListPaysIndep = () => {
  const { anneeIndep } = useParams();
  const listPays = useSelector((state) => state.Pays);
  const listIndepPays = listPays.filter(
    (pay) => pay.indepYear === parseInt(anneeIndep)
  );

  return (
    <div>
      <h2>List des pays independence en l Annee:{anneeIndep}</h2>
      {listIndepPays.length !== 0 ? (
        <ul>
          {listIndepPays.map((pay) => (
            <li key={pay.id}>Nom: {pay.Name}</li>
          ))}
        </ul>
      ) : (
        <p>Aucun pays</p>
      )}
    </div>
  );
};

export default ListPaysIndep;
