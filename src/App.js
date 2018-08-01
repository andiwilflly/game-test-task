import React from 'react';
// Styles
import "styles/layout.css";
// Components
import Game from "components/game/Game.component";


class App extends React.Component {
	render() {

		return (
			<div className="layout">
				<Game />
			</div>
		);
	}
}


export default App;
