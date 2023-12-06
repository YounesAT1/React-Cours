import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { failRequest, getSingleClient, updateClient } from "../redux/actions";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const UpdateClient = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { clientId } = useParams();

  const currentClient = useSelector((state) => state.clients.client);

  const initialClientData = {
    id: clientId,
    fullName: "",
    email: "",
    delivery: "",
    phoneNumber: "",
  };

  const [clientData, setClientData] = useState(initialClientData);

  const handleFormSubmt = (e) => {
    e.preventDefault();
    const client = { ...clientData };

    try {
      dispatch(updateClient(client, clientId));
      toast.success("Client Updated successfully");
      navigate("/");
    } catch (error) {
      dispatch(failRequest(error.message));
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    dispatch(getSingleClient(clientId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (currentClient) {
      setClientData({
        id: clientId,
        fullName: currentClient.fullName,
        email: currentClient.email,
        phoneNumber: currentClient.phoneNumber,
        delivery: currentClient.delivery,
      });
    }
  }, [clientId, currentClient]);

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md mb-10">
      <h2 className="text-2xl font-semibold mb-6">Add Client</h2>

      <form autoComplete="off" onSubmit={handleFormSubmt}>
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-gray-700 font-semibold mb-2"
          >
            ID
          </label>
          <input
            type="text"
            id="id"
            name="id"
            value={clientData.id}
            onChange={() => setClientData({ ...clientData })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            disabled
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-gray-700 font-semibold mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={clientData.fullName}
            onChange={(e) =>
              setClientData({ ...clientData, fullName: e.target.value })
            }
            placeholder="Enter Full Name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-semibold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={clientData.email}
            onChange={(e) =>
              setClientData({ ...clientData, email: e.target.value })
            }
            placeholder="Enter Email Address"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-gray-700 font-semibold mb-2"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phoneNumber"
            value={clientData.phoneNumber}
            onChange={(e) =>
              setClientData({ ...clientData, phoneNumber: e.target.value })
            }
            placeholder="Enter Phone Number"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="orderStatus"
            className="block text-gray-700 font-semibold mb-2"
          >
            Order Status
          </label>
          <select
            id="orderStatus"
            name="delivery"
            value={clientData.delivery}
            onChange={(e) =>
              setClientData({ ...clientData, delivery: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          >
            <option value="">Select Status</option>
            <option value="delivered">Delivered</option>
            <option value="processing">Processing</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateClient;
