import { types } from "mobx-state-tree";
// Models
// import GameModel from "models/game/Game.model";
import UsersModel from "models/users/Users.model";


const RootModel = {
	// game: GameModel
	users: UsersModel
};


const actions = (store)=> {
	return {
	};
};


export default types.model(RootModel).actions(actions);