import React from 'react';
// MobX
import { observer } from "mobx-react";
// Store
import store from "store";


const GameFieldCell = ({ x, y })=> {

	const state = store.game.field.cells.get(`${x}:${y}`).state;

	return (
		<div className="game-field-cell"
			 coordinates={`${x}:${y}`}
			 style={{
			 	width: store.game.settings.cellSize,
			 	height: store.game.settings.cellSize,
			 	lineHeight: `${store.game.settings.cellSize}px`,
			 	fontSize: state === "" ? "11px" : store.game.settings.cellSize - 3
			 }}>
			{ state === "" ?
				""
				:
				state === "first" ?
					<div className="animated rubberBand">🍪</div>
					:
					<div className="animated tada">🍩</div> }
		</div>
	);
};

export default observer(GameFieldCell);
