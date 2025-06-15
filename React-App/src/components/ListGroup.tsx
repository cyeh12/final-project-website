function ListGroup() {
	let items = ["Town 1", "Town 2", "Town 3"]
	// items = [];
	if (items.length===0) {
		return <p>no item founds</p>
	}
	return( 
		<>
			<h1>This is List group title</h1>	
			<ul className="list-group">
				{items.map(item => <li key={item} className="list-group-item">{item}</li>)}
			</ul>
		</>	
	);
}

export default ListGroup;
