import { connect } from "react-redux";
import { deleteClient, fetchClients } from "../redux/actions";
import { useEffect } from "react";
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
  useEffect(() => {
    props.loadClients();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDeleteClient = async (clientIdToDelete) => {
    try {
      await props.deleteClient(clientIdToDelete);
      toast.success("Client deleted successfully");
      props.loadClients();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return props.clients.isLoading ? (
    <h1 className="text-8xl text-slate-600 text-center mt-32 font-semibold">
      Loading...
    </h1>
  ) : props.clients.errMessage ? (
    <h1 className="text-6xl text-red-600 text-center mt-32 font-semibold">
      {props.clients.errMessage}
    </h1>
  ) : (
    <div className="mx-6">
      <h1 className="text-2xl font-bold my-5 text-slate-600">Client List :</h1>
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
          {props.clients.clients.length !== 0 ? (
            props.clients.clients.map((client) => (
              <tr key={client.id}>
                <td className="px-6 py-4 whitespace-nowrap">{client.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {client.fullName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{client.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {client.phoneNumber}
                </td>
                <td
                  className={`px-6 py-4 whitespace-nowrap ${
                    client.delivery === "delivered"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {client.delivery}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link to={`/clients/update/${client.id}`}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Update
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDeleteClient(client.id)}
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

export default connect(mapStateToProps, mapDispatchToProps)(ClinetList);
