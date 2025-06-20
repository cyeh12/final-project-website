import { useState } from "react";

function ListGroup() {
  let items = ["Town A", "Town B", "Town C", "Town D", "Town E"];
  const [selectedItem, setSelectedItem] = useState(-1);

  return (
    <>
      <h1>This is List group title</h1>
      {items.length === 0 ? <p>Items not found</p> : null}
      {items.length === 0 && <p>Items not found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => setSelectedItem(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
