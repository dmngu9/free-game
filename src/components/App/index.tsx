import React, { FC, ReactElement } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from 'components/Home'

const App: FC = (): ReactElement => (
	<BrowserRouter>
		<Switch>
			<Route path="/">
				<Home />
			</Route>
		</Switch>
	</BrowserRouter>
)

export default App
