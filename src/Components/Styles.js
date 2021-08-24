import styled from "styled-components";

export const Button = styled.button`
	background-color: ${(props) => props.bgColor};
	color: ${(props) => props.color};
	font-size: ${(props) => props.size};
	border-radius: 5px;
	border: none;
	transition: transform 0.1s ease-in;
	cursor: pointer;
	&:hover {
		background-color: ${(props) => props.hbgColor};
		transform: scale(1.02);
	}
`;

export const Title = styled.h5`
	margin: 0;
    color:${props=>props.color};
	font-size: ${(props) => props.size};
	font-family: Arial, Helvetica, sans-serif;
	font-weight: ${(props) => props.weight};
`;

export const Paragraph = styled.p`
	margin: 0;
    margin-right:${(props)=>props.mRight};
    background-color: ${(props) => props.bgColor};
    border-radius: 5px;

`;
