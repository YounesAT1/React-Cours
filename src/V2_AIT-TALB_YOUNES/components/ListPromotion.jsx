import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ListPromotion = () => {
  const { ropaId } = useParams();
  const Ropas = useSelector((state) => state.listeRepas);
  const selectedRopa = Ropas.find((rop) => rop.id === parseInt(ropaId));

  if (!selectedRopa) {
    return <div className="text-red-500">Ropa not found!</div>;
  }

  const listDePromotion = selectedRopa.promotions;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">List Promotion</h1>
      {listDePromotion.length > 0 ? (
        listDePromotion.map((pr, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-md shadow mb-4">
            <p className="font-semibold">{pr.libelle}</p>
            <p className="text-sm text-gray-600 mb-2">{pr.description}</p>
            <p className="text-lg font-bold">{pr.value}</p>
          </div>
        ))
      ) : (
        <div className="text-gray-500">No promotions available</div>
      )}
    </div>
  );
};

export default ListPromotion;
