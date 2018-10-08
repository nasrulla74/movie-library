import React from 'react';

const BASE_IMG_URL = 'http://image.tmdb.org/t/p/w780/';

function getMovieReleaseYear(date) {
	const releaseDate = new Date(date);
	return releaseDate.getFullYear();
}

const Modal = ({ selectedMovie, onCloseModal }) => {
	console.log(selectedMovie);
	const { title, backdrop_path , overview, release_date } = selectedMovie;
	return (
		<div className="modal-outer-container">
			<div className="modal-inner-container" style={{backgroundImage: `url(${BASE_IMG_URL}${backdrop_path}`}}>
				<div className="backdrop">
					<div className="close-btn" onClick={onCloseModal}>×</div>
					<div className="details">
						<div className="movie-info">
							<h2 className="movie-title">{ title }</h2>
							<p className="movie-release-date subheading">{getMovieReleaseYear(release_date)}</p>
							<p className="movie-description">{ overview }</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Modal;