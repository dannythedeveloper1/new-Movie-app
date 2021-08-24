import React, { useEffect, useState } from "react";
import { Button } from "./Styles";
import { getMovieByName } from "../utils/utils";
import MovieList from "./MovieList";
const Search = () => {
	const [form, setForm] = useState({ searchValue: "matrix", type: "movie" });
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        (async () => {
					const response = await getMovieByName(form.searchValue, form.type);
					setMovies(response);
					console.log(response);
				})();
    }, [])

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		(async () => {
			const response = await getMovieByName(form.searchValue, form.type);
			setMovies(response);
			console.log(response);
		})();
	};
    console.log(movies);
    
    const styles = {
        movieList: {
            width: "500px",
            display: "flex",
            // justifyContent: "center",
            alignItems:"center",
            flexWrap:"wrap"
        },
        form: {
            marginTop:"20px",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems:"center",
        },
        input: {
            backgroundColor: "lightgray",
            border: "none",
            borderRadius:"5px"
        }
    }

	return (
		<div>
			<form onSubmit={handleSubmit} style={styles.form}>
				<input
					style={styles.input}
					name="searchValue"
					type="text"
					placeholder="Search Movie"
					onChange={handleChange}
				/>
				<select name="type" onChange={handleChange} style={styles.input}>
					<option>Choose Type</option>
					<option>movie</option>
					<option>series</option>
					<option>game</option>
				</select>
				<Button bgColor="lightblue" size="small" color="white">
					Search
				</Button>
			</form>
			<div style={styles.movieList}>
				{movies.map((movie) => (
					<MovieList
						key={movie.imdbID}
						poster={movie.Poster}
						title={movie.Title}
						id={movie.imdbID}
					/>
				))}
			</div>
		</div>
	);
};

export default Search;
