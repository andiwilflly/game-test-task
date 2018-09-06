import React from 'react';
import { observer } from 'mobx-react';
// Store
import store from 'store';
// Components
// import Game from "components/game/Game.component";


class App extends React.Component {
	render() {
		const user = store.users.all.get('Ivan 2');
		const anon = store.users.all.get('anon');
		const authUser = store.users.authUser;
		console.log(store, anon, user, authUser);
		return (
			<div className="layout">
				<button onClick={ ()=> store.users.create('Ivan 2') }>Create Ivan 2</button>
				<br/>
				<button onClick={ ()=> user.say }>Ivan 2 say</button>
				<br/>
				<button onClick={ ()=> user.userSay }>Ivan 2 userSay</button>
				<br/>
				<button onClick={ ()=> user.adminSay }>Ivan 2 adminSay</button>
				<br/>
				<button onClick={ ()=> user.anonSay }>Ivan 2 anonSay</button>
				<br/>
				<button onClick={ ()=> anon.say }>anon say</button>
				<br/>
				<button onClick={ ()=> store.users.signIn('Ivan 2') }>login Ivan 2</button>
				<div>logged in: { '' + !!store.users.authUserId }</div>
				{ store.users.authUserId ?
					'hello, ' + store.users.authUser.username
					: null }
			</div>
		);
	}
}


export default observer(App);
