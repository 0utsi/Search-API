import React from 'react';

export const ImageList = (props) => {

	const images = props.images.map((images) => {
		return (
			<img className="img" alt={images.description} key={images.id} src={images.urls.regular} />
		)
	});

	return (
		<div>
			{images}
		</div>
	);
};

