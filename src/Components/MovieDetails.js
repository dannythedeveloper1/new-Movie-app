import React, { useState, useEffect } from "react";
import { getMovieByID } from "../utils/utils";
import { Paragraph, Title } from "./Styles";

const MovieDetails = ({id}) => {
	const [detail, setDetail] = useState({});
	useEffect(() => {
		getMovieByID(id).then((res) => setDetail(res));
	}, []);

	const styles = {
        mainDiv: {
            backgroundColor: "gray",
            padding: "10px",
            borderRadius:"5px",
			margin: "0 auto",
            width: "80vw",
            height:"200px",
			display: "flex",
		},
		img: {
			width: "20vw",
		},
        textArea: {
            marginLeft:"20px",
			width: "60vw",
			display: "flex",
			flexDirection: "column",
			alignItems: "flex-start",
		},
		rating: {
			width: "200px",
			display: "flex",
		},
	};

	return (
		<div style={styles.mainDiv}>
			<img src={detail.Poster} style={{height:"100%"}} alt="" />
			<div style={styles.textArea}>
				<Title size="xx-large" weight="900">
					{detail.Title}
                </Title>
                <div style={styles.rating}>
				<Paragraph mRight="20px" bgColor="lightgray">{detail.Rated}</Paragraph>
				<Paragraph bgColor="lightgray">{detail.Runtime}</Paragraph>
                </div>
				<Title size="large" weight="800">
					Plot
				</Title>
				<Paragraph>{detail.Plot}</Paragraph>
				<Title size="large" weight="800">
					Actors
				</Title>
				<Paragraph>{detail.Actors}</Paragraph>
			</div>
		</div>
	);
};

export default MovieDetails;
