import { types } from "mobx-state-tree";
// Styles
import "styles/animate.css";
// Models
import UserModel from "models/users/UserModel.model";

const UsersModel = {
	all: types.map(UserModel)
};


const actions = (self)=> {
	return {
	};
};


export default types.model(GameModel).actions(actions);