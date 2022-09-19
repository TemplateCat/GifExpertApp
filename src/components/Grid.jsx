import React from 'react';
import Imagess from './Imagess';

const Grid = ({ categories }) => {
	return (
		<>
			<div className="container mx-auto">
				{categories.map((category) => (
					<div className="" key={category}>
						<h1 className="text-4xl font-bold text-red-400">
							Estas viendo: {category}
						</h1>
						<Imagess category={category} />
					</div>
				))}
			</div>

			{/* <div className="container mx-auto">
				<div className="grid grid-cols-12 gap-5">
					{data.map((item) => (
						<Card item={item} key={item.id} />
					))}
				</div>
			</div> */}
		</>
	);
};

export default Grid;
