import React from 'react';
import { withAuthenticator } from 'aws-amplify-react';
import '@aws-amplify/ui/dist/style.css';

function App() {
	return <div className="b--pink">App</div>;
}

export default withAuthenticator(App, { includeGreetings: true });
