import { types } from "mobx-state-tree";
// Styles
import "styles/animate.css";


const UserModel = {
	currency: types.maybe(types.string),
	GDPR: types.maybe(types.boolean),
	country: types.maybe(types.string),
	created_at: types.maybe(types.number),
	email: types.maybe(types.string),
	first_name: types.maybe(types.string),
	flags: types.maybe(types.number),
	has_email: types.maybe(types.boolean),
	has_password: types.maybe(types.boolean),
	id: types.identifierNumber,
	phone: types.maybe(types.string),
	priv: types.maybe(types.number),
	username: types.maybe(types.string)
};


const actions = (self)=> {
	return {
	};
};


export default types.model('UserModel', UserModel).actions(actions);