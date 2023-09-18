import React, { useState } from "react";

const ExTwo = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [people, setPeople] = useState([]);

  const handleClick = () => {
    if (firstName === "" || lastName === "") {
      alert("All information is required");
      return;
    }

    const newPerson = {
      firstName,
      lastName,
    };

    setPeople([...people, newPerson]);
    setFirstName("");
    setLastName("");
  };

  return (
    <div>
      <form
        autoComplete="off"
        onSubmit={(e) => e.preventDefault()}
        style={styles.form}
      >
        <label htmlFor="firstName" style={styles.label}>
          First Name:
        </label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          style={styles.input}
        />
        <label htmlFor="lastName" style={styles.label}>
          Last Name:
        </label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter your Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleClick} style={styles.button}>
          Add
        </button>
      </form>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>First Name</th>
            <th style={styles.tableHeader}>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <tr style={styles.evenTableRow}>
              <td style={styles.tableRow}>{person.firstName}</td>
              <td style={styles.tableRow}>{person.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "300px",
    margin: "0 auto",
  },
  label: {
    marginBottom: "5px",
  },
  input: {
    padding: "5px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  },
  tableHeader: {
    backgroundColor: "#f2f2f2",
  },
  tableRow: {
    padding: "10px",
    textAlign: "center",
    borderBottom: "1px solid #ddd",
    fontSize: "1.2rem",
  },
  evenTableRow: {
    backgroundColor: "#f2f2f2",
  },
};
export default ExTwo;
