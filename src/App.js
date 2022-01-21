import './App.css';
import { SearchBar } from './components/searchbar';
import { useState } from 'react';
import unsplash from './api/unsplash.js'
import { ImageList } from './components/ImageList';

function App() {

	const [images, setImages] = useState({ img: [] })

	const searchKeyWords = async (keyWord) => {

		const response = await unsplash.get('/search/photos', {
			params: { query: keyWord },
		});

		const newImages = { img: response.data.results }

		setImages(newImages)
	}



	return (
		<div className="App">
			<h1 className="heading">Search for images <i className="far fa-images"></i></h1>
			<SearchBar searchKeyWords={searchKeyWords} />
			<br></br>
			<ImageList images={images.img} />
		</div>
	);
}

export default App;
