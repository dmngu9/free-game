import styled from 'styled-components'

export const List = styled.ul`
	display: flex;
	align-items: center;
	flex-direction: column;
	margin: 0;
	padding: 0 16px;
	list-style-type: none;
`

export const ListItem = styled.li`
	max-width: 510px;
	width: 100%;
	margin-bottom: 24px;
	transition: all 0.2s ease-in-out;

	&:hover {
		transform: scale(1.02);
	}
`
