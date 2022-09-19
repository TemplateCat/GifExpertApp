import React from 'react';
import Grid from './Grid';

const Section = ({ categories }) => {
	return (
		<div className="container mx-auto">
			{categories.map((category) => (
				<div className="" key={category}>
					<h1 className="text-4xl font-bold text-red-400">
						Estas viendo: {category}
					</h1>
					<Grid category={category} />
				</div>
			))}
		</div>
	);
};

export default Section;
