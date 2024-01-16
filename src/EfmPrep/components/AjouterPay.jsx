import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ajouterPays, modifierPopulation } from "../redux/actions";

const AjouterPay = () => {
  const initialPayState = {
    code: "",
    Name: "",
    continent: "",
    surface: 0,
    image: "",
    indepYear: 0,
    population: 0,
    ville: [],
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [payData, setPayData] = useState(initialPayState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPayData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAdddPay = (e) => {
    e.preventDefault();
    dispatch(ajouterPays(payData));
    navigate("/pays/afficher");
    setPayData(initialPayState);
  };

  const handleModifierPopulation = (e) => {
    e.preventDefault();
    dispatch(modifierPopulation(payData.code, payData.population));
    navigate("/pays/afficher");
    setPayData(initialPayState);
  };

  return (
    <div>
      <h1>Ajouter un Pay</h1>

      <form autoComplete="off" method="POST">
        <label htmlFor="code">Code :</label>
        <input
          type="text"
          value={payData.code}
          name="code"
          onChange={handleInputChange}
        />
        <label htmlFor="Name">Name :</label>
        <input
          type="text"
          value={payData.Name}
          name="Name"
          onChange={handleInputChange}
        />
        <label htmlFor="continent">Continent :</label>
        <input
          type="text"
          value={payData.continent}
          name="continent"
          onChange={handleInputChange}
        />
        <label htmlFor="surface">Surface :</label>
        <input
          type="text"
          value={payData.surface}
          name="surface"
          onChange={handleInputChange}
        />
        <label htmlFor="image">Image :</label>
        <input
          type="text"
          value={payData.image}
          name="image"
          onChange={handleInputChange}
        />
        <label htmlFor="indepYear">IndepYear :</label>
        <input
          type="text"
          value={payData.indepYear}
          name="indepYear"
          onChange={handleInputChange}
        />
        <label htmlFor="population">Population :</label>
        <input
          type="text"
          value={payData.population}
          name="population"
          onChange={handleInputChange}
        />
        <button onClick={handleAdddPay}>Ajouter Pays</button>
        <button onClick={handleModifierPopulation}>Modifier Population</button>
      </form>
    </div>
  );
};

export default AjouterPay;
