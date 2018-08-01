import { types } from "mobx-state-tree";
// Styles
import "styles/animate.css";
// Models
import GameSettingsModel from "models/game/GameSettings.model";
import GameFieldModel from "models/game/GameField.model";


const GameModel = {
	settings: GameSettingsModel,
	field: GameFieldModel,
	status: types.string, // initial, started, finished
	attempt: types.string // first, second
};


const actions = (self)=> {
	return {

		initial() {
			self.status = "initial";
			self.field.draw();
		},

		start() {
			self.status = "started";
			self.field.draw();
		},

		setWinner() {
			self.status = "finished";
		},

		toggleAttempt() {
			self.attempt = self.attempt === "first" ? "second" : "first";
		}
	};
};


export default types.model(GameModel).actions(actions);