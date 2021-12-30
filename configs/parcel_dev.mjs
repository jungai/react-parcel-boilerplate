import { fileURLToPath } from 'url';

import { Parcel } from '@parcel/core';

import { defaultParcelConfig } from './parcel_base.mjs';

const App = new Parcel({
	...defaultParcelConfig,
	// dev mode
	serveOptions: {
		port: 4422,
	},
	hmrOptions: {
		port: 4422,
	},
	// Reporters
	additionalReporters: [
		{
			packageName: '@parcel/reporter-cli',
			resolveFrom: fileURLToPath(import.meta.url),
		},
	],
});

await App.watch();
