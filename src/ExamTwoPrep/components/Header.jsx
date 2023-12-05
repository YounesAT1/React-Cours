import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-3 bg-gray-50">
      <nav className="flex items-center justify-between">
        <ul className="flex items-center">
          <li className="text-2xl font-semibold text-gray-700 mr-5">
            <Link to="/" className="hover:text-gray-500">
              Clients
            </Link>
          </li>
          <li className="text-2xl font-semibold text-gray-700">
            <Link to="/clients/add" className="hover:text-gray-500">
              Add Client
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
