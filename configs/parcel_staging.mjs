import { Parcel } from '@parcel/core';

import { defaultParcelConfig } from './parcel_base.mjs';

const App = new Parcel({ ...defaultParcelConfig });

try {
	let { bundleGraph, buildTime } = await App.run();
	let bundles = bundleGraph.getBundles();
	console.log(`✨ Built ${bundles.length} bundles in ${buildTime}ms!`);
} catch (err) {
	console.log(err.diagnostics);
}
