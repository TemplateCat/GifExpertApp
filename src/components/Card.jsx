import React from 'react';

const Card = ({ item }) => {
	return (
		<div className="relative col-span-3 bg-white gradient_card rounded-lg overflow-hidden transition-all duration-500 hover:shadow-xl">
			<div className="h-[250px]">
				<img
					src={item.url}
					alt={item.title}
					className="w-full h-full object-cover"
				/>
			</div>
			<h1 className="absolute bottom-0 font-medium text-slate-50 p-2 shadow-lg">
				{item.title}
			</h1>
		</div>
	);
};

export default Card;
