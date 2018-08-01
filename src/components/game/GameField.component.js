import React from 'react';
// MobX
import { observer } from "mobx-react";
// Store
import store from "store";
// Components
import GameFieldCell from "components/game/GameFieldCell.component";


class GameField extends React.Component {

	onFieldClick = (e)=> {
		const cell = e.target;
		if(!cell.attributes.coordinates) return; // Click outside of [cell]

		const coordinates = cell.attributes.coordinates.value.split(":").map((axis)=> +axis);
		store.game.field.step(coordinates);
	};

	
	render() {
		return (
			<React.Fragment>
				<div className="game-field"
					 style={{ width: store.game.settings.cellSize * store.game.settings.fieldSize }}
					 onClick={ this.onFieldClick }>
					{ store.game.field.coordinates.map((coordinates)=> {
						const x = coordinates[0];
						const y = coordinates[1];
						return <GameFieldCell key={`${x}:${y}`} x={x} y={y} />
					}) }
				</div>
				<h3>first player: 🍪</h3>
				<h3>second player: 🍩</h3>
				<h3>field size: { store.game.settings.fieldSize }</h3>
				<h3>cell size: { store.game.settings.cellSize }</h3>
				<button onClick={ store.game.initial }>Settings</button>
			</React.Fragment>
		)
	}
}

export default observer(GameField)
