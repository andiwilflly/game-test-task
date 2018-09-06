import { types } from "mobx-state-tree";
// Styles
import "styles/animate.css";
// Models
import UserModel from "models/users/User.model";

const UsersModel = {
	all: types.optional(types.map(UserModel), {}),
	authUserId: types.maybe(types.string)
};


const actions = (self)=> {
	return {

		create(name) {
			self.all.set(name, {
				_id: '_' + name,
				_role: 'user', // user, admin, anon
				username: name
			});
		},

		remove(id) {},

		signIn(id) {
			self.authUserId = id;
		},
		signOut() {},
		signOutAll() {},

		signUpStep1() {},
		signUpStep2() {},

		signInFB() {},
		signInVK() {},
		signInGoogle() {},

		signUpFB() {},
		signUpVK() {},
		signUpGoogle() {}
	};
};

const views = (self)=> {
	return {
		get authUser() { return self.all.get(self.authUserId); }
	}
};

export default types.model(UsersModel).actions(actions).views(views);