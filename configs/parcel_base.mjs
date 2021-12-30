import path from 'path';

const __dirname = path.resolve();

export const defaultParcelConfig = {
	entries: path.join(__dirname, 'src/index.html'),
	defaultConfig: '@parcel/config-default',
};
