import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const ContactList = ({ contacts }) => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.auth.user);
  const userContactList = contacts.filter(
    (contact) => contact.userId === currentUser.id
  );

  const handleNavigate = () => {
    navigate("/addContact");
  };

  const containerStyle = {
    display: "grid",
    gap: "10px",
    padding: "10px",
    maxWidth: "600px",
    margin: "0 auto",
  };

  const contactStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px",
    border: "1px solid black",
    borderRadius: "5px",
    textDecoration: "none",
    color: "#000",
    transition: "background-color 0.3s ease",
  };

  const lastMessageStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const unreadMessagesStyle = {
    border: "1px solid red",
    borderRadius: "50%",
    padding: "4px",
    marginLeft: "10px",
  };

  const addButtonStyle = {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "5px",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    transition: "background-color 0.3s ease",
  };

  const addButtonContainerStyle = {
    textAlign: "center",
  };

  return (
    <div style={containerStyle}>
      {userContactList.map((contact) => (
        <Link
          key={contact.id}
          to={`/messages/${contact.id}/${encodeURIComponent(contact.name)}`}
          style={contactStyle}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p style={{ marginRight: "80px" }}>{contact.name}</p>
            <div style={lastMessageStyle}>
              {contact.messages.length > 0
                ? contact.messages[contact.messages.length - 1].text.text
                : ""}

              <span style={unreadMessagesStyle}>{contact.messages.length}</span>
            </div>
          </div>
        </Link>
      ))}
      {contacts.length > 0 && (
        <div style={addButtonContainerStyle}>
          <button onClick={handleNavigate} style={addButtonStyle}>
            Add new contact
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactList;
