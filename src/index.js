import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from 'registerServiceWorker';
// Styles
import "styles/reset.css";
// Components
import App from 'App';


ReactDOM.render(<App/>, document.getElementById('root'));


if(module.hot) {
	module.hot.accept('App', () => {
		const NextApp = require('App').default;
		ReactDOM.render(
			<NextApp />,
			document.getElementById('root')
		)
	})
}

registerServiceWorker();
