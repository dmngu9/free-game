import React, { ReactElement } from 'react'
import { Game } from 'types'
import GameCard from 'components/GameCard'
import { List, ListItem } from './styles'
interface Props {
	err?: string
	games: Game[]
}

const GameList = ({ err, games }: Props): ReactElement => {
	if (err) {
		return <p>Unable to fetch games</p>
	}
	if (!games?.length) {
		return <p>No games available</p>
	}
	return (
		<List>
			{games.map(game => (
				<ListItem key={game.id}>
					<GameCard content={game} />
				</ListItem>
			))}
		</List>
	)
}

export default GameList
