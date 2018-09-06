import { types } from "mobx-state-tree";
// Models
import AuthUserModel from "models/users/AuthUser.model";
import AnonymousModel from "models/users/Anonymous.model";
import AdminModel from "models/users/Admin.model";

const actions = (self)=> {
	return {
		update(id, user) { }
	}
};

const views = (self)=> {
	return {
		get say() {
			console.log("say ROOT plz");
		}
	};
};

const UserModel = types.model({
	_id: types.string,
	_role: types.string
}).actions(actions).views(views);


export default types.compose(AuthUserModel, AnonymousModel, AdminModel, UserModel);