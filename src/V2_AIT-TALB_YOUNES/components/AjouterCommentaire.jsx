import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ajouterCommentaire } from "../redux/action";

const AjouterCommentaire = () => {
  const initialState = {
    auteur: "",
    text: "",
    note: 0,
  };

  const [commentaire, setCommentaire] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { ropaId } = useParams();
  console.log(ropaId);

  const handleAddComment = (e) => {
    e.preventDefault();
    dispatch(ajouterCommentaire(ropaId, commentaire));
    setCommentaire(initialState);
    navigate("/ropas");
  };

  return (
    <div>
      <h1 className="text-xl"> commentaire de ropa de id {ropaId}</h1>
      <form onSubmit={handleAddComment}>
        auteur:{" "}
        <input
          type="text"
          value={commentaire.auteur}
          onChange={(e) =>
            setCommentaire({ ...commentaire, auteur: e.target.value })
          }
        />
        text:{" "}
        <input
          type="text"
          value={commentaire.text}
          onChange={(e) =>
            setCommentaire({ ...commentaire, text: e.target.value })
          }
        />
        note:{" "}
        <input
          type="number"
          value={commentaire.note}
          onChange={(e) =>
            setCommentaire({ ...commentaire, note: e.target.value })
          }
        />
        <button type="submit" className="bg-green-500 text-white p-4">
          add commentaire
        </button>
      </form>
    </div>
  );
};

export default AjouterCommentaire;
