import React, { FC, ReactElement } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from 'components/Home'
import GlobalStyles from 'components/GlobalStyles'

const App: FC = (): ReactElement => (
	<>
		<GlobalStyles />
		<BrowserRouter>
			<Switch>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</BrowserRouter>
	</>
)

export default App
