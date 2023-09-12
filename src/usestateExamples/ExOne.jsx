import React, { useState } from "react";

const ExOne = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mark, setMark] = useState("");
  const [result, setResult] = useState("");

  const handleValidate = () => {
    const fullName = `${firstName} ${lastName}`;
    const message = mark < 10 ? "You Failed" : "You Passed";
    setResult(`${fullName}: ${message}`);
  };

  return (
    <div style={styles.container}>
      <form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="firstName" style={styles.label}>
          First Name:
        </label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your first name"
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
          placeholder="Enter your last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          style={styles.input}
        />
        <label htmlFor="mark" style={styles.label}>
          Mark:
        </label>
        <input
          type="text"
          id="mark"
          placeholder="Enter your mark"
          value={mark}
          onChange={(e) => setMark(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleValidate} style={styles.button}>
          Validate
        </button>
      </form>
      {result && <p style={styles.result}>{result}</p>}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
  },
  label: {
    display: "block",
    marginBottom: "5px",
  },
  input: {
    width: "100%",
    padding: "5px",
    marginBottom: "10px",
    borderRadius: "3px",
    border: "1px solid #ccc",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px 15px",
    borderRadius: "3px",
    cursor: "pointer",
  },
  result: {
    marginTop: "10px",
    fontWeight: "bold",
  },
};

export default ExOne;
