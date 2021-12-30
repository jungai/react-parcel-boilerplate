import React from 'react';

import { App } from './App';
import GlobalStyles from './style/GlobalStyles';

export const Provider = (): React.ReactElement => (
	<React.StrictMode>
		<GlobalStyles />
		<App />
	</React.StrictMode>
);

export default Provider;
