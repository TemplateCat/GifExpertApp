import React from 'react';
import Grid from './Grid';

const Section = ({ categories }) => {
	return (
		<div className="container mx-auto py-10 px-4 lg:px-20">
			{categories.map((category) => (
				<div className="mb-20" key={category}>
					<h1 className="text-2xl font-bold text-gray-500 my-5">
						Resultados de: <span className="italic">"{category}"</span>
					</h1>
					<Grid category={category} />
				</div>
			))}
		</div>
	);
};

export default Section;
