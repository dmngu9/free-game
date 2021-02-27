import React, { ChangeEvent, ReactElement, useCallback, useState } from 'react'
import useFetch from 'hooks/useFetch'
import GameListRender from './GameList.render'
import { Filter } from './types'

const GameListContainer = (): ReactElement => {
	const [filter, setFilter] = useState<Filter>({
		platform: 'browser',
		sortBy: 'relevance',
	})
	const { games, error } = useFetch(filter)

	const onFilterChange = useCallback((event: ChangeEvent<HTMLFormElement>) => {
		setFilter(current => ({
			...current,
			[event.target.name]: event.target.value,
		}))
		event.preventDefault()
	}, [])

	return (
		<GameListRender err={error} games={games} onFilterChange={onFilterChange} />
	)
}

export default GameListContainer
