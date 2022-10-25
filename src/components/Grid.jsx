import React from 'react';
import useFetch from '../hooks/useFetch';
import Card from './Card';

const Grid = ({ category }) => {
	const { data, loading } = useFetch(category);

	if (loading) return;

	return data.length === 0 ? (
		<span className="text-slate-600">
			No se encuentran gifs sobre "{category}".
		</span>
	) : (
		<div className="grid grid-cols-12 gap-x-5 gap-y-10">
			{data.map((item) => (
				<Card item={item} key={item.id} />
			))}
		</div>
	);
};

export default Grid;
