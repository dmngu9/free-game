import styled from 'styled-components'
import { breakpoints } from 'styles/breakpoints'

export const List = styled.ul`
	display: block;
	max-width: 542px;
	margin: 0 auto;
	padding: 0 16px;
	list-style-type: none;
	box-sizing: border-box;

	@media (min-width: ${breakpoints.tablet}) {
		max-width: ${breakpoints.tablet};
	}

	@media (min-width: ${breakpoints.desktop}) {
		max-width: ${breakpoints.desktop};
	}
`

export const ListItem = styled.li`
	margin-bottom: 24px;
	transition: all 0.2s ease-in-out;

	&:hover {
		transform: scale(1.02);
	}

	@media (min-width: ${breakpoints.tablet}) {
		display: inline-block;
		max-width: 332px;
		margin-right: 24px;

		&:nth-of-type(even) {
			margin-right: 0;
		}
	}

	@media (min-width: ${breakpoints.desktop}) {
		max-width: 312px;

		&:nth-of-type(even) {
			margin-right: 24px;
		}

		&:nth-of-type(3n + 3) {
			margin-right: 0;
		}
	}
`
