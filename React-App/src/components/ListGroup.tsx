function ListGroup() {
	let items = ["Town 1", "Town 2", "Town 3"]
	// items = [];

	return( 
		<>
			<h1>This is List group title</h1>
			{items.length === 0 ? <p>Items not found</p> : null}
			{items.length === 0 && <p>Items not found</p>}	
			<ul className="list-group">
				{items.map(item => <li key={item} className="list-group-item">{item}</li>)}
			</ul>
		</>	
	);
}

export default ListGroup;
