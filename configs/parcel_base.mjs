import path from 'path';
import { fileURLToPath } from 'url';

import { Parcel } from '@parcel/core';

const __dirname = path.resolve();

export const parcelConfig = new Parcel({
	entries: path.join(__dirname, 'src/index.html'),
	defaultConfig: '@parcel/config-default',
	serveOptions: {
		port: 4422,
	},
	hmrOptions: {
		port: 4422,
	},
	additionalReporters: [
		{
			packageName: '@parcel/reporter-cli',
			resolveFrom: fileURLToPath(import.meta.url),
		},
	],
});

export default parcelConfig;
