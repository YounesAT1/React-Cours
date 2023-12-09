import { connect } from "react-redux";
import { deleteClient, fetchClients } from "../redux/actions";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const mapStateToProps = (state) => {
  return {
    clients: state.clients,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadClients: () => dispatch(fetchClients()),
    deleteClient: (clientIdToDelete) =>
      dispatch(deleteClient(clientIdToDelete)),
  };
};

const ClinetList = (props) => {
  const [clientToDelete, setClientToDelete] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    props.loadClients();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDeleteClient = async (clientIdToDelete) => {
    try {
      await props.deleteClient(clientIdToDelete);
      props.loadClients();
      setShowDeleteModal(false);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const openDeleteModal = (clientId) => {
    setClientToDelete(clientId);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
    setClientToDelete(null);
  };

  //? CLIENT SEARCH LOGIC
  const filteredClients = props.clients.clients.filter((client) =>
    client.fullName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const clientsPerPage = 5;
  const indexOfLastClient = currentPage * clientsPerPage;
  const indexOfFirstClient = indexOfLastClient - clientsPerPage;
  const currentClients = filteredClients.slice(
    indexOfFirstClient,
    indexOfLastClient
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return props.clients.errMessage ? (
    <div className="flex items-center justify-center">
      <h1 className="text-6xl text-red-500 text-center mt-32 font-semibold bg-red-300 p-3 rounded-md w-3/4">
        {props.clients.errMessage}
      </h1>
    </div>
  ) : (
    <div className="mx-6">
      <h1 className="text-2xl font-bold my-5 text-slate-600">Client List :</h1>

      <div className="flex items-center justify-between my-4">
        <input
          type="text"
          placeholder="Search by Full Name..."
          value={searchQuery}
          onChange={handleSearchChange}
          disabled={filteredClients.length === 0}
          className={`border border-gray-300 rounded-md py-2 px-4 w-1/4 ${
            filteredClients.length === 0
              ? "disabled:bg-gray-100 disabled:outline-gray-100"
              : ""
          }`}
        />
      </div>

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
              delivery Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentClients.length !== 0 ? (
            currentClients.map((client) => (
              <tr key={client.id}>
                <td className="px-6 py-4 whitespace-nowrap">{client.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {client.fullName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{client.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {client.phoneNumber}
                </td>
                <td className={`px-6 py-4 whitespace-nowrap text-white`}>
                  <span
                    className={` rounded-lg px-2 py-2 ${
                      client.delivery === "Delivered"
                        ? "bg-green-500"
                        : "bg-orange-400"
                    }`}
                  >
                    {client.delivery}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link to={`/clients/update/${client.id}`}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Update
                    </button>
                  </Link>
                  <button
                    onClick={() => openDeleteModal(client.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={6}
                className="px-6 py-4 whitespace-nowrap bg-slate-600 text-white w-full text-center text-xl font-semibold"
              >
                No clients
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {showDeleteModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center">
            {/* MODAL OVERLAY */}

            <div
              className="fixed inset-0 bg-black opacity-50"
              onClick={closeDeleteModal}
            ></div>

            {/* MODAL BODY */}

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    {/* CONFIRMATION ICON */}

                    <svg
                      className="h-6 w-6 text-red-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Confirm Deletion
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Are you sure you want to delete this client?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={() => handleDeleteClient(clientToDelete)}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Delete
                </button>
                <button
                  onClick={closeDeleteModal}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PAGINATION */}

      <div className="mt-4 flex justify-center items-center">
        {filteredClients.length > clientsPerPage && (
          <ul className="flex list-none">
            {Array(Math.ceil(filteredClients.length / clientsPerPage))
              .fill()
              .map((_, index) => (
                <li
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`cursor-pointer mx-2 ${
                    currentPage === index + 1
                      ? "text-white bg-blue-500  font-semibold"
                      : "text-blue-400 bg-gray-300"
                  } px-4 py-2 rounded-full`}
                >
                  {index + 1}
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ClinetList);
