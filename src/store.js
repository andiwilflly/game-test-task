import { spy } from "mobx";
// Models
import RootModel from "models/Root.model";


const store = RootModel.create({
	game: {
		status: "initial",
		attempt: "first",
		settings: {
			fieldSize: 15,
			winCombo: 5,
			cellSize: 30
		},
		field: {
		}
	}
});

// MobX spy goes here
spy((event)=> {
	switch(event.type) {
		case 'action':
			if(event.name.match('-WARNING')) return console.log('%c' + event.name, 'color: darkorange');
			if(event.name.match('-ERROR')) return console.log('%c' + event.name, 'color: darkred');
			if(event.name.match('-SUCCESS')) return console.log('%c' + event.name, 'color: green');
			break;
		default :
			break;
	}
});


export default store;