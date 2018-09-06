import { types } from "mobx-state-tree";
// Styles
import "styles/animate.css";


const AdminModel = {
	permissions: types.frozen
};


const actions = (self)=> {
	return {
		getConfig() {}
	};
};


const views = (self)=> {
	return {
		get say() {
			console.log("say admin plz");
		},
		get adminSay() {
			console.log("admin Say!");
		}
	};
};

export default types.model('AdminModel', AdminModel).actions(actions).views(views);