import { types } from "mobx-state-tree";


const GameSettingsModel = {
	fieldSize: types.number,
	winCombo: types.number,
	cellSize: types.number
};


const actions = (self)=> {
	return {

		change(name, value) {
			self[name] = value;
		}
	};
};


export default types.model("GameSettingsModel", GameSettingsModel).actions(actions);