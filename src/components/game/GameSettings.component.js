import React from 'react';
// MobX
import { observer } from "mobx-react";
// Store
import store from "store";


class GameSettings extends React.Component {


	onInputChange = (e)=> {
		store.game.settings.change([e.currentTarget.name], +e.currentTarget.value);
	};


	render() {
		return (
			<div className="game-settings">
				<h3>Field size</h3>
				<input type="number" value={ store.game.settings.fieldSize } name="fieldSize" onChange={ this.onInputChange } />
				<h3>Cell size</h3>
				<input type="number" value={ store.game.settings.cellSize } name="cellSize" onChange={ this.onInputChange } />
			</div>
		)
	}
}

export default observer(GameSettings)
