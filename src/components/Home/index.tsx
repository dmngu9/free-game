import React, { FC, ReactElement } from 'react'
import GameList from 'components/GameList'
import withErrorBoundary from 'hoc/withErrorBoundary'

const Home = (): ReactElement => <GameList />

export default withErrorBoundary(Home)
