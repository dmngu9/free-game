import React, { ReactElement } from 'react'
import GameList from 'components/GameList'
import withErrorBoundary from 'hoc/withErrorBoundary'

const Home = (): ReactElement => (
	<main>
		<GameList />
	</main>
)

export default withErrorBoundary(Home)
