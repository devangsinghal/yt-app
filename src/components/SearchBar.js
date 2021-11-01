import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
	const [searchText, setSearchText] = useState("");

	const OnInputChange = (event) => {
		setSearchText(event.target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		onFormSubmit(searchText);
	};
	return (
		<div className="search-bar ui segment">
			<form onSubmit={onSubmit} className="ui form">
				<div className="field">
					<label>Video Search</label>
					<input value={searchText} type="text" onChange={OnInputChange} />
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
