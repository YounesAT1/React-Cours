import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="pays/afficher">Afficher Tous les pays</Link>
        </li>
        <li>
          <Link to="pays/ajouter">Ajouter un Pays</Link>
        </li>
        <li>
          <Link to="/anneeIndep">Annee de independence</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
