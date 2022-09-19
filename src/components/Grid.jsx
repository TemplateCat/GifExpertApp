import React from 'react';
import useFetch from '../hooks/useFetch';
import Card from './Card';

const Grid = ({ category }) => {
	const { data, loading } = useFetch(category);

	if (loading) return;

	console.log(data);

	return (
		<div className="grid grid-cols-12 gap-5">
			{data.map((item) => (
				<Card item={item} key={item.id} />
			))}
		</div>
	);
};

export default Grid;
