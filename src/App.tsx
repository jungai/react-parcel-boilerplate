import React from 'react';
import './style/tailwind.css';

export const App = (): React.ReactElement => {
	return (
		<div className="grid place-content-center h-screen">
			<h1 className="text-xl md:text-2xl text-[tomato]">Hello Parcel - React (ts)</h1>
		</div>
	);
};

export default App;
