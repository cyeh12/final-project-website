import type { MouseEvent } from "react";

function ListGroup() {
  let items = ["Town A", "Town B", "Town C", "Town D", "Town E"];

  // event handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>This is List group title</h1>
      {items.length === 0 ? <p>Items not found</p> : null}
      {items.length === 0 && <p>Items not found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item" onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
