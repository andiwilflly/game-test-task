import { values, runInAction } from "mobx";
import { types } from "mobx-state-tree";
// Store
import store from "store";


const GameFieldModel = {
	cells: types.optional(types.map(types.frozen), {})
};


const actions = (self)=> {
	return {
		
		draw() {
			self.cells.clear();
			self.fields.forEach((value, y)=> {
				self.fields.forEach((value, x)=> {
					self.cells.set(`${x}:${y}`, { coordinates: [x, y], state: "" });
				})
			});
		},


		step(coordinates) {
			if(store.game.status === "finished") return runInAction(`GAMES-FIELD-STEP-WARNING (we already have winner!)`, ()=> {});
			const cell = self.getCell(coordinates);
			if(!cell) return runInAction(`GAMES-FIELD-STEP-ERROR (bad coordinates: ${coordinates})`, ()=> {});
			if(cell.state) return runInAction(`GAMES-FIELD-STEP-WARNING (not empty cell: ${coordinates}))`, ()=> {});

			runInAction(`GAMES-FIELD-STEP-SUCCESS (${coordinates})`, ()=> {
				self.cells.set(`${coordinates[0]}:${coordinates[1]}`, { ...cell, state: store.game.attempt });

				self.checkWinner(cell);
				store.game.toggleAttempt();

				const isNoEmptyCells = !values(self.cells).find((cell)=> cell.state === "");
				if(isNoEmptyCells && store.game.status !== "finished") store.game.start();
			});
		},


		checkWinner(cell) {
			const x = cell.coordinates[0];
			const y = cell.coordinates[1];
			const comboX = self.findCell(x, y, -1, 0) + self.findCell(x, y, +1, 0);
			const comboY = self.findCell(x, y, 0, -1) + self.findCell(x, y, 0, +1);
			const comboXY = self.findCell(x, y, -1, -1) + self.findCell(x, y, +1, +1);
			const comboYX = self.findCell(x, y, -1, 1) + self.findCell(x, y, 1, -1);

			const combo = Math.max(comboX, comboY, comboXY, comboYX);

			console.log(comboX, 42);
			if(combo+1 >= store.game.settings.winCombo) {
				store.game.toggleAttempt();
				store.game.setWinner();
			}
		},


		findCell(x, y, stepX, stepY, combo = 0) {
			const cell = self.getCell([x+stepX, y+stepY]); // Get next cell
			if(!cell) return combo; // No combo for this axes;
			if(cell.state !== store.game.attempt) return combo; // We found cell of other player

			// We found combo!
			return self.findCell(x+stepX, y+stepY, stepX, stepY, combo+1);
		}
	};
};


const views = (self)=> {

	return {
		get fields() { return Array.apply(null, { length: store.game.settings.fieldSize }); },
		get coordinates() { return values(store.game.field.cells).map((cell)=> cell.coordinates) },
		getCell(coordinates) { return self.cells.get(`${coordinates[0]}:${coordinates[1]}`); }
	};
};

export default types.model("GameFieldModel", GameFieldModel).actions(actions).views(views);