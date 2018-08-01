import React from 'react';
// Styles
import "styles/game.css";
// MobX
import { observer } from "mobx-react";
// Store
import store from "store";
// Components
import GameField from "components/game/GameField.component";
import GameSettings from "components/game/GameSettings.component";


class Game extends React.Component {

	render() {
		return (
			<div className="game">
				{ store.game.status === "initial" ?
					<h1>Game</h1>
					:
					store.game.status === "finished" ?
						<h1 className="animated infinite heartBeat">Winner: { store.game.attempt }! <button onClick={ store.game.start }>Restart</button></h1>
						:
						<h1>Game (attempt: { store.game.attempt })</h1>
				}

				{ store.game.status === "initial" ?
					<GameSettings />
					: null	}

				{ store.game.status === "initial" ?
					<button onClick={ store.game.start }>Start game</button>
					:
					<GameField />
				}
			</div>
		)
	}
}

export default observer(Game)
