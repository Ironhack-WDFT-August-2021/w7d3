import React from 'react'

export default function MovieCard(props) {
	return (
		<div>
			<h2>{props.movie.title}</h2>
			<p>{props.movie.director}</p>
			{/* <p>{props.movie.IMDBRating}</p> */}
			{/* if statement in react (in jsx) */}
			{props.movie.IMDBRating > 9.1 && <p>{props.movie.IMDBRating}</p>}
			{props.movie.hasOscars ? <p>Oscar winning movie 🤩</p> : <p>No Oscar 🙀</p>}
		</div>
	)
}
