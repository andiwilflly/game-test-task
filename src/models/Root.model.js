import { types } from "mobx-state-tree";
// Models
import GameModel from "models/game/Game.model";


const RootModel = {
	game: GameModel
};


const actions = (store)=> {
	return {
	};
};


export default types.model(RootModel).actions(actions);