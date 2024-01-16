import { useSelector } from "react-redux";

const ListPays = () => {
  const listPays = useSelector((state) => state.Pays);
  return (
    <div>
      <h1>List Pays :</h1>
      {listPays.map((pay) => (
        <ul>
          <li>Nom :{pay.Name}</li>
          <li>Surface :{pay.surface}</li>
          <li>Population :{pay.population}</li>
          <img
            style={{ width: "60px", height: "40px" }}
            src={pay.image}
            alt={pay.Name}
          />
          <hr />
        </ul>
      ))}
    </div>
  );
};

export default ListPays;
