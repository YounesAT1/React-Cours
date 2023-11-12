import { ArrowLeft, CheckCircle2, Circle, MoveRight, Plus } from "lucide-react";
import { useState } from "react";
import "./Cart.css";

const Cart = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");
  const [nextId, setNextId] = useState(0);
  const [error, setError] = useState("");
  const [total, setTotal] = useState(0);

  const handleAddItem = () => {
    if (!item) {
      setError("Please enter an item to add");
    } else {
      const newItem = {
        text: item,
        checked: false,
        number: 1,
        id: nextId,
      };

      setList([...list, newItem]);
      setItem("");
      setError("");
      setNextId((prevId) => prevId + 1);
      setTotal((prevTotal) => prevTotal + 1);
    }
  };

  const handleIncreamentItem = (idToIncrement) => {
    const updatedList = list.map((item) => {
      if (item.id === idToIncrement) {
        return { ...item, number: item.number + 1 };
      }
      return item;
    });

    setList(updatedList);
    setTotal((prevTotal) => prevTotal + 1);
  };

  const handleDecrementItem = (idToDecrement) => {
    const updatedList = list.map((item) => {
      if (item.id === idToDecrement) {
        return { ...item, number: item.number - 1 };
      }
      return item;
    });

    setList(updatedList);
    setTotal((prevTotal) => prevTotal - 1);
  };

  const handleCompleteOrIncomplete = (index) => {
    const newList = [...list];
    newList[index].checked = !newList[index].checked;
    setList(newList);
  };

  return (
    <div className="container">
      <div className="input_controle">
        <input
          type="text"
          value={item}
          name="item"
          placeholder="something..."
          autoComplete="off"
          onChange={(e) => setItem(e.target.value)}
        />
        <button onClick={handleAddItem}>
          <Plus />
        </button>
      </div>
      <div className="items_container">
        <h1>Items :</h1>
        <ul>
          {list.length === 0 ? (
            <p style={{ color: "gray" }}>No item for now !!</p>
          ) : (
            list.map((listItem, index) => (
              <div key={listItem.id} className="flex">
                {listItem.checked ? (
                  <CheckCircle2
                    onClick={() => handleCompleteOrIncomplete(index)}
                  />
                ) : (
                  <Circle onClick={() => handleCompleteOrIncomplete(index)} />
                )}
                <li className={listItem.checked ? "unchecked" : "checked"}>
                  {listItem.text}
                </li>
                <div>
                  <button onClick={() => handleDecrementItem(listItem.id)}>
                    <ArrowLeft />
                  </button>
                  <span>{listItem.number < 0 ? 0 : listItem.number}</span>
                  <button onClick={() => handleIncreamentItem(listItem.id)}>
                    <MoveRight />
                  </button>
                </div>
              </div>
            ))
          )}
        </ul>
      </div>
      <div>{error && <h3 style={{ color: "red" }}>{error}</h3>}</div>
      <div>
        <h4 style={{ color: "blue", textAlign: "right" }}>
          Total is : {total < 0 ? 0 : total}
        </h4>
      </div>
    </div>
  );
};

export default Cart;
