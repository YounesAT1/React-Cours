import { MoveLeft, MoveRight } from "lucide-react";
import React, { useState } from "react";

const Crud = () => {
  const initialClientState = {
    firstName: "",
    lastName: "",
    email: "",
    sex: "",
    id: 0,
  };

  const [client, setClient] = useState(initialClientState);
  const [clientsList, setClientsList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [clientsPerPage] = useState(2);
  const [alert, setAlert] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClient((prevClient) => ({
      ...prevClient,
      [name]: value,
    }));
  };

  const handleAddClient = () => {
    const { firstName, lastName, email, sex } = client;

    if (firstName && lastName && email && sex) {
      const newClient = {
        ...client,
        id: new Date().getTime(),
      };

      setClientsList((prevClients) => [...prevClients, newClient]);
      setClient(initialClientState);
      setAlert("");
    } else {
      setAlert("Please fill out all fields !!");
    }
  };

  const handleDeleteClient = (clientId) => {
    setClientsList((prevClients) =>
      prevClients.filter((client) => client.id !== clientId)
    );
  };

  const handleEditClient = (selectedClient) => {
    setClient(selectedClient);
    setIsEditing(true);
  };

  const handleUpdateClient = () => {
    setClientsList((prevClients) =>
      prevClients.map((existingClient) =>
        existingClient.id === client.id ? client : existingClient
      )
    );

    setClient(initialClientState);
    setIsEditing(false);
  };

  const tableStyle = {
    borderCollapse: "collapse",
    width: "100%",
  };

  const thStyle = {
    backgroundColor: "#f2f2f2",
    padding: "8px",
    textAlign: "left",
    border: "1px solid #ddd",
  };

  const tdStyle = {
    padding: "8px",
    textAlign: "left",
    border: "1px solid #ddd",
  };

  const indexOfLastClient = currentPage * clientsPerPage;
  const indexOfFirstClient = indexOfLastClient - clientsPerPage;
  const currentClients = clientsList.slice(
    indexOfFirstClient,
    indexOfLastClient
  );

  const totalClients = clientsList.length;
  const totalPages = Math.ceil(totalClients / clientsPerPage);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Clients : {clientsList.length}</h1>
      <label htmlFor="firstName">First Name:</label>
      <br />
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={client.firstName}
        onChange={handleInputChange}
        style={{ width: "30%", height: "30px", borderRadius: "5px" }}
      />
      <br />
      <label htmlFor="lastName">Last Name:</label>
      <br />
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={client.lastName}
        onChange={handleInputChange}
        style={{ width: "30%", height: "30px", borderRadius: "5px" }}
      />
      <br />
      <label htmlFor="email">Email:</label>
      <br />
      <input
        type="text"
        id="email"
        name="email"
        value={client.email}
        onChange={handleInputChange}
        style={{ width: "30%", height: "30px", borderRadius: "5px" }}
      />
      <br />
      <label htmlFor="sex">Sex:</label>
      <br />
      <input
        type="radio"
        name="sex"
        id="female"
        onChange={handleInputChange}
        value="female"
        checked={client.sex === "female"}
      />
      <label htmlFor="female" style={{ marginRight: "10px" }}>
        Female
      </label>
      <input
        type="radio"
        name="sex"
        id="male"
        onChange={handleInputChange}
        value="male"
        checked={client.sex === "male"}
      />
      <label htmlFor="male">Male</label>
      <br />
      {!isEditing ? (
        <button
          onClick={handleAddClient}
          style={{
            backgroundColor: "green",
            color: "white",
            padding: "8px 16px",
            border: "none",
            cursor: "pointer",
            margin: "8px",
            borderRadius: "5px",
          }}
        >
          Add Client
        </button>
      ) : (
        <button
          onClick={handleUpdateClient}
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "8px 16px",
            border: "none",
            cursor: "pointer",
            margin: "8px",
            borderRadius: "5px",
          }}
        >
          Update Client
        </button>
      )}
      {alert && <h2 style={{ color: "red" }}>{alert}</h2>}
      {currentClients.length > 0 && (
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>First Name</th>
              <th style={thStyle}>Last Name</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Sex</th>
              <th style={thStyle}>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentClients.map((client) => (
              <tr key={client.id}>
                <td style={tdStyle}>{client.firstName}</td>
                <td style={tdStyle}>{client.lastName}</td>
                <td style={tdStyle}>{client.email}</td>
                <td style={tdStyle}>{client.sex}</td>
                <td style={tdStyle}>
                  <button
                    onClick={() => handleDeleteClient(client.id)}
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      padding: "4px 8px",
                      border: "none",
                      cursor: "pointer",
                      marginRight: "4px",
                      borderRadius: "5px",
                    }}
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleEditClient(client)}
                    style={{
                      backgroundColor: "orange",
                      color: "white",
                      padding: "4px 8px",
                      border: "none",
                      cursor: "pointer",
                      borderRadius: "5px",
                    }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="pagination" style={{ display: "flex", marginTop: "8px" }}>
        <button
          className={`action-button ${
            currentPage === 1 ? "disabled-button" : ""
          }`}
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1 || currentClients.length === 0}
          style={{ marginRight: "10px", borderRadius: "5px" }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <MoveLeft width={15} height={15} />
            <span style={{ marginLeft: "5px" }}>Previous</span>
          </div>
        </button>
        <button
          className={`action-button ${
            currentPage === totalPages ? "disabled-button" : ""
          }`}
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages || currentClients.length === 0}
          style={{ borderRadius: "5px" }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ marginRight: "5px" }}>Next</span>
            <MoveRight width={15} height={15} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Crud;
