import React from 'react'
import MovieCard from './MovieCard';

export default function MoviesList(props) {
	return (
		<div>
			{props.list.map(movie => (
				<MovieCard key={movie._id} movie={movie} />
			)
			)}
		</div>
	)
}
