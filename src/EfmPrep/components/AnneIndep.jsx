import { Link } from "react-router-dom";

const AnneIndep = () => {
  const independenceYears = [
    1776, // United States
    1789, // France
    1804, // Haiti
    1821, // Greece, Mexico, Central American countries
    1822, // Brazil
    1830, // Belgium, Chile, Ecuador
    1825, // Bolivia
    1828, // Uruguay
    1956, // Morocco
  ];

  return (
    <div>
      {independenceYears.map((year) => (
        <ul>
          <li>
            <Link to={`/anneeIndep/${year}`}>{year}</Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default AnneIndep;
