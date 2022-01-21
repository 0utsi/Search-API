import { useState } from 'react'

export const SearchBar = (props) => {

	const [keyWord, setKeyWord] = useState('')

	const onSubmit = (e) => {

		e.preventDefault();

		props.searchKeyWords(keyWord)

		// console.log(keyWord);

		setKeyWord('')
	}



	return (
		<div className="search-container">
			<form onSubmit={onSubmit}>
				<input
					name="option"
					autoComplete="off"
					className="search-input"
					value={keyWord}
					onChange={(e) => setKeyWord(e.target.value)}
				>
				</input>
				<button className="search-btn" type="submit"><i className="fas fa-search"></i></button>
			</form>
		</div>
	);
}