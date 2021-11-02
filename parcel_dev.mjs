import { Parcel } from '@parcel/core';

const dev = new Parcel({
	entries: './src/index.html',
	defaultConfig: '@parcel/config-default',
	serveOptions: {
		port: 4422,
	},
	hmrOptions: {
		port: 4422,
	},
});

await dev.watch();
