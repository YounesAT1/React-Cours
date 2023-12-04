import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NotAhuth from "./NotAhuth";
import { useEffect } from "react";
import { fetchClients } from "../redux/actions";
import { Link } from "react-router-dom";

const ClinetList = () => {
  const loggedInUser = useSelector((state) => state.loggedInUser);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchClients());
  }, [dispatch]);

  if (loggedInUser === null || !loggedInUser.clients) {
    return <NotAhuth />;
  }

  const currentUserClients = users.find(
    (user) => user.id === loggedInUser.id
  ).clients;

  console.log(currentUserClients);

  return (
    <div className="mx-6">
      <h1 className="text-3xl font-bold my-5">Clients:</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Full Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Phone Number
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentUserClients.length !== 0 ? (
            currentUserClients.map((client, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{client.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {client.fullName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{client.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {client.phoneNumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link to={`/clients/${client.id}`}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Update
                    </button>
                  </Link>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={5}
                className="px-6 py-4 whitespace-nowrap bg-slate-600 text-white w-full"
              >
                No clients
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ClinetList;
