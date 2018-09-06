import { types } from "mobx-state-tree";


const AnonymousModel = {
	country: types.maybe(types.string),
	currency: types.maybe(types.string)
};


const actions = (self)=> {
	return {

	};
};

const views = (self)=> {
	return {
		get say() {
			console.log("say anon plz");
		},
		get anonSay() {
			console.log("anon Say!");
		}
	};
};


export default types.model('AnonymousModel', AnonymousModel).actions(actions).views(views);