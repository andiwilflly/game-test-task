import { types } from "mobx-state-tree";


const AuthUserModel = {
	currency: types.maybe(types.string),
	GDPR: types.maybe(types.boolean),
	country: types.maybe(types.string),
	created_at: types.maybe(types.number),
	email: types.maybe(types.string),
	first_name: types.maybe(types.string),
	flags: types.maybe(types.number),
	has_email: types.maybe(types.boolean),
	has_password: types.maybe(types.boolean),
	phone: types.maybe(types.string),
	priv: types.maybe(types.number),
	username: types.maybe(types.string),
	licenses: types.frozen,
	tariffs: types.frozen
};


const actions = (self)=> {
	return {
		getConfig() {},
		recPasswordStep1() {},
		recPasswordStep2() {},
		updateSettings() {},
		changePhoneStep1() {},
		changePhoneStep2() {},
		changePassword() {}
	};
};


const views = (self)=> {
	return {
		get say() {
			console.log("say auth user plz");
		},
		get userSay() {
			console.log("auth userSay!");
		}
	};
};


export default types.model('AuthUserModel', AuthUserModel).actions(actions).views(views);