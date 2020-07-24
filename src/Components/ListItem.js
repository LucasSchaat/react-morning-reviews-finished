import React from "react";

const ListItem = (props) => {
	const { movie, deleteMovie } = props;
	return (
		<div className="List-Item">
			<img alt={movie.title} className="movie-poster" src={movie.posterImg} />
			<div className="movie-info">
				<p>{movie.title}</p>
				<p>{movie.year}</p>
			</div>
            <p
                className = 'delete-button'
                onClick = {() => deleteMovie(movie.id)}
            >
            X
            </p>
		</div>
	);
}

export default ListItem;
