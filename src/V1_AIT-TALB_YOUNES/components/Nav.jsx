import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="container mx-auto p-6 bg-slate-500 rounded-b-md">
      <ul className="flex justify-between items-center">
        <li className="mr-6">
          <Link
            to="/"
            className="text-xl font-semibold text-white hover:underline x"
          >
            List Recette
          </Link>
        </li>
        <li>
          <Link
            to="/recette/ajouter"
            className="text-xl font-semibold text-white hover:underline"
          >
            Ajouter Recette
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
